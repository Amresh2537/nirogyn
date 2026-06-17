"use client";

import { useEffect, useMemo, useRef, useState, type ClipboardEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Link2 } from "lucide-react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";

interface PostForm {
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  category: string;
  status: "draft" | "published";
  featured: boolean;
  featuredImage: string;
  featuredImageAlt: string;
  seoTitle: string;
  seoDescription: string;
  readTime: string;
  content: string;
}

const CATEGORIES = [
  "Gut Health", "Mental Health", "Sleep", "Skin Health", "Nutrition",
  "Supplements", "Men's Health", "Women's Health", "Kids Health",
  "Fitness", "Ayurveda", "Research",
];

const EMPTY: PostForm = {
  title: "", slug: "", excerpt: "", author: "Nirogyn Editorial",
  category: "", status: "draft", featured: false,
  featuredImage: "", featuredImageAlt: "", seoTitle: "", seoDescription: "", readTime: "", content: "",
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

interface Props {
  postId?: string;
}

marked.setOptions({
  gfm: true,
  breaks: true,
});

const turndownService = new TurndownService({
  headingStyle: "atx",
  bulletListMarker: "-",
  codeBlockStyle: "fenced",
  emDelimiter: "_",
  strongDelimiter: "**",
  linkStyle: "inlined",
});

turndownService.use(gfm);

const TOOLBAR_ACTIONS = [
  { label: "H1", title: "Heading 1", prefix: "# ", suffix: "" },
  { label: "H2", title: "Heading 2", prefix: "## ", suffix: "" },
  { label: "H3", title: "Heading 3", prefix: "### ", suffix: "" },
  { label: "B", title: "Bold", prefix: "**", suffix: "**" },
  { label: "I", title: "Italic", prefix: "_", suffix: "_" },
  { label: "- List", title: "Bullet list", prefix: "- ", suffix: "" },
  { label: "HR", title: "Horizontal rule", prefix: "\n---\n", suffix: "" },
  { label: "> Quote", title: "Blockquote", prefix: "> ", suffix: "" },
  { label: "`Code`", title: "Inline code", prefix: "`", suffix: "`" },
];

const ALLOWED_TAGS = [
  "h1", "h2", "h3", "h4", "h5", "h6",
  "p", "br", "hr",
  "strong", "b", "em", "i", "u", "s", "del",
  "a", "blockquote", "pre", "code",
  "ul", "ol", "li",
  "table", "thead", "tbody", "tr", "th", "td",
  "img", "figure", "figcaption",
  "div", "span",
];

const ALLOWED_ATTR = ["href", "target", "rel", "src", "alt", "class", "id", "title"];

function looksLikeHtml(value: string): boolean {
  return /<\/?[a-z][\s\S]*>/i.test(value);
}

function markdownFromStoredContent(content: string): string {
  const trimmed = (content || "").trim();
  if (!trimmed) return "";
  if (!looksLikeHtml(trimmed)) return trimmed;

  try {
    return turndownService.turndown(trimmed).replace(/\n{3,}/g, "\n\n").trim();
  } catch {
    return trimmed;
  }
}

function renderFormattedHtml(content: string): string {
  const trimmed = (content || "").trim();
  const rawHtml = looksLikeHtml(trimmed)
    ? trimmed
    : ((marked.parse(trimmed) as string) || "");

  if (typeof window === "undefined") {
    // DOMPurify needs a real DOM; skip on the server SSR pass.
    // This re-runs (and sanitizes properly) once mounted in the browser.
    return rawHtml;
  }

  return DOMPurify.sanitize(rawHtml, {
    ALLOWED_TAGS: ALLOWED_TAGS,
    ALLOWED_ATTR: ALLOWED_ATTR,
    FORCE_BODY: true,
  });
}

export default function PostEditor({ postId }: Props) {
  const router = useRouter();
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const selectionRef = useRef<{ start: number; end: number }>({ start: 0, end: 0 });
  const [form, setForm] = useState<PostForm>(EMPTY);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [linkDialog, setLinkDialog] = useState(false);
  const [linkText, setLinkText] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  const isEdit = !!postId;
  const renderedPreviewHtml = useMemo(() => renderFormattedHtml(form.content), [form.content]);

  // Load existing post
  useEffect(() => {
    if (!postId) return;
    fetch(`/api/admin/posts/${postId}`)
      .then((r) => {
        if (!r.ok) { setLoadError(true); return null; }
        return r.json();
      })
      .then((post) => {
        if (!post) return;
        setForm({
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          author: post.author,
          category: post.category,
          status: post.status,
          featured: post.featured,
          featuredImage: post.featuredImage ?? "",
          featuredImageAlt: post.featuredImageAlt ?? post.title,
          seoTitle: post.seoTitle ?? post.title,
          seoDescription: post.seoDescription ?? post.excerpt,
          readTime: post.readTime ?? "",
          content: markdownFromStoredContent(post.content ?? ""),
        });
      });
  }, [postId]);

  function set(field: keyof PostForm, value: string | boolean) {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      // Auto-generate slug from title (only when creating)
      if (field === "title" && !isEdit) {
        next.slug = slugify(value as string);
      }
      return next;
    });
  }

  function insertAtSelection(insertedText: string, start: number, end: number) {
    const editor = editorRef.current;
    const before = form.content.substring(0, start);
    const after = form.content.substring(end);
    const nextContent = before + insertedText + after;
    setForm((prev) => ({ ...prev, content: nextContent }));

    requestAnimationFrame(() => {
      if (!editor) return;
      editor.focus();
      const caret = start + insertedText.length;
      editor.selectionStart = caret;
      editor.selectionEnd = caret;
    });
  }

  function applyFormat(prefix: string, suffix: string) {
    const editor = editorRef.current;
    if (!editor) return;

    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const selected = form.content.substring(start, end);
    const before = form.content.substring(0, start);
    const after = form.content.substring(end);
    const nextContent = before + prefix + selected + suffix + after;
    setForm((prev) => ({ ...prev, content: nextContent }));

    requestAnimationFrame(() => {
      editor.focus();
      const newCursor = start + prefix.length + selected.length + suffix.length;
      editor.selectionStart = suffix ? start + prefix.length : newCursor;
      editor.selectionEnd = suffix ? start + prefix.length + selected.length : newCursor;
    });
  }

  function openLinkDialog() {
    const editor = editorRef.current;
    if (!editor) return;

    selectionRef.current = { start: editor.selectionStart, end: editor.selectionEnd };
    const selectedText = form.content.substring(editor.selectionStart, editor.selectionEnd);
    setLinkText(selectedText || "");
    setLinkUrl("");
    setLinkDialog(true);
  }

  function insertLink() {
    const { start, end } = selectionRef.current;
    const text = linkText.trim() || "link text";
    const url = linkUrl.trim() || "https://";
    insertAtSelection(`[${text}](${url})`, start, end);
    setLinkDialog(false);
    setLinkText("");
    setLinkUrl("");
  }

  function handlePaste(event: ClipboardEvent<HTMLTextAreaElement>) {
    const html = event.clipboardData.getData("text/html");
    if (!html) return;

    event.preventDefault();
    const markdown = turndownService
      .turndown(html)
      .replace(/\n{3,}/g, "\n\n")
      .trim();

    if (!markdown) return;

    const editor = editorRef.current;
    if (!editor) return;
    insertAtSelection(markdown, editor.selectionStart, editor.selectionEnd);
  }

  async function handleImageUpload(file: File | null) {
    if (!file) return;
    setUploadingImage(true);
    setUploadError("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/uploads", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const failed = await res.json().catch(() => ({ error: "Upload failed" }));
        throw new Error(failed.error || "Upload failed");
      }

      const data = await res.json();
      setForm((prev) => ({
        ...prev,
        featuredImage: data.url,
        featuredImageAlt: prev.featuredImageAlt || prev.title,
      }));
    } catch (error) {
      const message = error instanceof Error ? error.message : "Image upload failed. Please try again.";
      setUploadError(message);
    } finally {
      setUploadingImage(false);
    }
  }

  async function handleSave(statusOverride?: "draft" | "published") {
    const payload: PostForm = {
      ...form,
      seoTitle: form.seoTitle || form.title,
      seoDescription: form.seoDescription || form.excerpt,
      featuredImageAlt: form.featuredImageAlt || form.title,
      content: renderFormattedHtml(form.content),
    };
    if (statusOverride) payload.status = statusOverride;

    if (!payload.title.trim()) { alert("Title is required."); return; }
    if (!payload.slug.trim()) { alert("Slug is required."); return; }

    setSaving(true);
    try {
      const url = isEdit ? `/api/admin/posts/${postId}` : "/api/admin/posts";
      const method = isEdit ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Save failed");
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
      if (!isEdit) {
        const data = await res.json();
        router.replace(`/admin/edit/${data.id}`);
      }
    } catch {
      alert("Failed to save. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  if (loadError) {
    return (
      <div className="admin-wrap">
        <div className="admin-main" style={{ textAlign: "center", paddingTop: "4rem" }}>
          <p style={{ color: "#ef4444" }}>Post not found.</p>
          <Link href="/admin" className="admin-btn-primary" style={{ marginTop: "1rem", display: "inline-block" }}>
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-wrap">
      {/* Navbar */}
      <header className="admin-nav">
        <Link href="/admin" className="admin-nav-logo">
          <span className="admin-login-dot" />NIROGYN
        </Link>
        <div className="admin-nav-right">
          <Link href="/admin" className="admin-btn-ghost">← Dashboard</Link>
          {saved && <span className="admin-saved-badge">✓ Saved</span>}
          <button className="admin-btn-secondary" onClick={() => handleSave("draft")} disabled={saving}>
            Save Draft
          </button>
          <button className="admin-btn-primary" onClick={() => handleSave("published")} disabled={saving}>
            {saving ? "Saving…" : "Publish"}
          </button>
        </div>
      </header>

      <main className="admin-editor-main">
        <div className="admin-editor-layout">
          {/* ── LEFT COLUMN ── */}
          <div className="admin-editor-left">
            {/* Basic Info */}
            <div className="admin-card">
              <h2 className="admin-card-title">Basic Information</h2>

              <div className="admin-field">
                <label className="admin-label">Title <span className="admin-required">*</span></label>
                <input
                  className="admin-input"
                  placeholder="Enter blog post title"
                  value={form.title}
                  onChange={(e) => set("title", e.target.value)}
                />
              </div>

              <div className="admin-field">
                <label className="admin-label">Slug <span className="admin-required">*</span></label>
                <input
                  className="admin-input"
                  placeholder="blog-post-slug"
                  value={form.slug}
                  onChange={(e) => set("slug", slugify(e.target.value))}
                />
              </div>

              <div className="admin-field">
                <label className="admin-label">Excerpt</label>
                <textarea
                  className="admin-textarea"
                  rows={3}
                  placeholder="Brief description of the blog post"
                  value={form.excerpt}
                  onChange={(e) => set("excerpt", e.target.value)}
                />
              </div>

              <div className="admin-fields-row">
                <div className="admin-field">
                  <label className="admin-label">Author</label>
                  <input
                    className="admin-input"
                    value={form.author}
                    onChange={(e) => set("author", e.target.value)}
                  />
                </div>
                <div className="admin-field">
                  <label className="admin-label">Read Time</label>
                  <input
                    className="admin-input"
                    placeholder="e.g. 5 min read"
                    value={form.readTime}
                    onChange={(e) => set("readTime", e.target.value)}
                  />
                </div>

                <div className="admin-field">
                  <label className="admin-label">SEO Title</label>
                  <input
                    className="admin-input"
                    placeholder="Search-engine friendly title"
                    value={form.seoTitle}
                    onChange={(e) => set("seoTitle", e.target.value)}
                  />
                </div>

                <div className="admin-field">
                  <label className="admin-label">SEO Description</label>
                  <textarea
                    className="admin-textarea"
                    rows={3}
                    placeholder="Meta description for search engines"
                    value={form.seoDescription}
                    onChange={(e) => set("seoDescription", e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Content Editor */}
            <div className="admin-card">
              <h2 className="admin-card-title">Content</h2>
              <p className="editor-helper-text">
                Write in markdown and use the toolbar shortcuts. Pasting rich text from ChatGPT, Docs, or Word is supported.
              </p>

              <div className="editor-shell">
                <div className="editor-toolbar">
                  <div className="toolbar-group">
                    {TOOLBAR_ACTIONS.map((action) => (
                      <button
                        key={action.label}
                        type="button"
                        className="toolbar-btn toolbar-btn--label"
                        title={action.title}
                        onMouseDown={(event) => {
                          event.preventDefault();
                          applyFormat(action.prefix, action.suffix);
                        }}
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                  <div className="toolbar-divider" />
                  <div className="toolbar-group">
                    <button
                      type="button"
                      className="toolbar-btn toolbar-btn--label"
                      title="Insert hyperlink"
                      onMouseDown={(event) => {
                        event.preventDefault();
                        openLinkDialog();
                      }}
                    >
                      <Link2 size={12} />
                      Link
                    </button>
                  </div>
                </div>

                <textarea
                  ref={editorRef}
                  className="editor-body"
                  value={form.content}
                  onChange={(event) => set("content", event.target.value)}
                  onPaste={handlePaste}
                  rows={16}
                  placeholder={"Write content in markdown...\n\n# Heading\n## Sub-heading\n**bold text**\n_italic text_\n[link text](https://example.com)\n- bullet point"}
                  style={{
                    width: "100%",
                    resize: "vertical",
                    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                  }}
                />

                <div className="editor-footer-note">Live preview</div>

                <div
                  className="editor-body"
                  style={{ minHeight: "220px" }}
                  dangerouslySetInnerHTML={{ __html: renderedPreviewHtml }}
                />

                <div className="editor-footer-note">
                  Markdown toolbar, safe HTML sanitization, and rich-text paste conversion are enabled.
                </div>
              </div>

              {linkDialog && (
                <div
                  style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0, 0, 0, 0.5)",
                    padding: "1rem",
                  }}
                  onClick={() => setLinkDialog(false)}
                >
                  <div
                    className="admin-card"
                    style={{ width: "100%", maxWidth: "420px" }}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <h3 className="admin-card-title" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <Link2 size={16} /> Insert Link
                    </h3>
                    <div className="admin-field">
                      <label className="admin-label">Link Text</label>
                      <input
                        type="text"
                        className="admin-input"
                        placeholder="e.g. Read more"
                        value={linkText}
                        onChange={(event) => setLinkText(event.target.value)}
                        autoFocus
                      />
                    </div>
                    <div className="admin-field">
                      <label className="admin-label">URL</label>
                      <input
                        type="url"
                        className="admin-input"
                        placeholder="https://example.com"
                        value={linkUrl}
                        onChange={(event) => setLinkUrl(event.target.value)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") insertLink();
                          if (event.key === "Escape") setLinkDialog(false);
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
                      <button type="button" className="admin-btn-secondary" onClick={() => setLinkDialog(false)}>
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="admin-btn-primary"
                        disabled={!linkUrl.trim()}
                        onClick={insertLink}
                      >
                        Insert
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="admin-editor-right">
            {/* Publish Settings */}
            <div className="admin-card">
              <h2 className="admin-card-title">Publish Settings</h2>

              <div className="admin-field">
                <label className="admin-label">Status</label>
                <select
                  className="admin-select"
                  value={form.status}
                  onChange={(e) => set("status", e.target.value)}
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              <div className="admin-field">
                <label className="admin-label">Category</label>
                <input
                  className="admin-input"
                  list="blog-category-options"
                  placeholder="Type or choose a category"
                  value={form.category}
                  onChange={(e) => set("category", e.target.value)}
                />
                <datalist id="blog-category-options">
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c} />
                  ))}
                </datalist>
              </div>

              <label className="admin-checkbox-row">
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(e) => set("featured", e.target.checked)}
                />
                <span>Feature this post</span>
              </label>
            </div>

            {/* Featured Image */}
            <div className="admin-card">
              <h2 className="admin-card-title">Featured Image</h2>
              <div className="admin-field">
                <label className="admin-label">Upload image</label>
                <input
                  className="admin-input"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e.target.files?.[0] ?? null)}
                />
              </div>
              {uploadingImage && <p className="admin-page-sub">Uploading image…</p>}
              {uploadError && <p className="admin-error">{uploadError}</p>}
              {form.featuredImage && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={form.featuredImage}
                  alt="preview"
                  className="admin-img-preview"
                />
              )}
              <div className="admin-field">
                <label className="admin-label">Image Alt Text</label>
                <input
                  className="admin-input"
                  placeholder="Describe the image for accessibility and SEO"
                  value={form.featuredImageAlt}
                  onChange={(e) => set("featuredImageAlt", e.target.value)}
                />
              </div>
            </div>

            {/* Save actions */}
            <div className="admin-save-actions">
              <button
                className="admin-btn-secondary"
                style={{ width: "100%" }}
                onClick={() => handleSave("draft")}
                disabled={saving}
              >
                Save as Draft
              </button>
              <button
                className="admin-btn-primary"
                style={{ width: "100%" }}
                onClick={() => handleSave("published")}
                disabled={saving}
              >
                {saving ? "Saving…" : "Publish Post"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
