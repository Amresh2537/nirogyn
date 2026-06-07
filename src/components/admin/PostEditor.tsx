"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

export default function PostEditor({ postId }: Props) {
  const router = useRouter();
  const editorRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<PostForm>(EMPTY);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const isEdit = !!postId;

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
          content: post.content,
        });
        if (editorRef.current) {
          editorRef.current.innerHTML = post.content;
        }
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

  // Toolbar command
  function exec(command: string, value?: string) {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  }

  function insertHeading(tag: string) {
    exec("formatBlock", tag);
  }

  function handleEditorInput() {
    setForm((prev) => ({ ...prev, content: editorRef.current?.innerHTML ?? "" }));
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
        throw new Error("Upload failed");
      }

      const data = await res.json();
      setForm((prev) => ({
        ...prev,
        featuredImage: data.url,
        featuredImageAlt: prev.featuredImageAlt || prev.title,
      }));
    } catch {
      setUploadError("Image upload failed. Please try again.");
    } finally {
      setUploadingImage(false);
    }
  }

  async function handleSave(statusOverride?: "draft" | "published") {
    const content = editorRef.current?.innerHTML ?? "";
    const payload: PostForm = {
      ...form,
      seoTitle: form.seoTitle || form.title,
      seoDescription: form.seoDescription || form.excerpt,
      featuredImageAlt: form.featuredImageAlt || form.title,
      content,
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

              {/* Toolbar */}
              <div className="editor-toolbar">
                <div className="toolbar-group">
                  <button type="button" className="toolbar-btn" title="Bold" onClick={() => exec("bold")}><b>B</b></button>
                  <button type="button" className="toolbar-btn" title="Italic" onClick={() => exec("italic")}><i>I</i></button>
                  <button type="button" className="toolbar-btn" title="Underline" onClick={() => exec("underline")}><u>U</u></button>
                  <button type="button" className="toolbar-btn" title="Strikethrough" onClick={() => exec("strikeThrough")}><s>S</s></button>
                </div>
                <div className="toolbar-divider" />
                <div className="toolbar-group">
                  <button type="button" className="toolbar-btn toolbar-btn--label" onClick={() => insertHeading("h1")}>H1</button>
                  <button type="button" className="toolbar-btn toolbar-btn--label" onClick={() => insertHeading("h2")}>H2</button>
                  <button type="button" className="toolbar-btn toolbar-btn--label" onClick={() => insertHeading("h3")}>H3</button>
                  <button type="button" className="toolbar-btn toolbar-btn--label" onClick={() => exec("formatBlock", "p")}>P</button>
                </div>
                <div className="toolbar-divider" />
                <div className="toolbar-group">
                  <button type="button" className="toolbar-btn" title="Bullet list" onClick={() => exec("insertUnorderedList")}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/><circle cx="4" cy="6" r="1.5" fill="currentColor"/><circle cx="4" cy="12" r="1.5" fill="currentColor"/><circle cx="4" cy="18" r="1.5" fill="currentColor"/></svg>
                  </button>
                  <button type="button" className="toolbar-btn" title="Numbered list" onClick={() => exec("insertOrderedList")}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><text x="2" y="8" fontSize="7" fill="currentColor">1.</text><text x="2" y="14" fontSize="7" fill="currentColor">2.</text><text x="2" y="20" fontSize="7" fill="currentColor">3.</text></svg>
                  </button>
                  <button type="button" className="toolbar-btn" title="Blockquote" onClick={() => exec("formatBlock", "blockquote")}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
                  </button>
                </div>
                <div className="toolbar-divider" />
                <div className="toolbar-group">
                  <button type="button" className="toolbar-btn" title="Undo" onClick={() => exec("undo")}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/></svg>
                  </button>
                  <button type="button" className="toolbar-btn" title="Redo" onClick={() => exec("redo")}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 14 20 9 15 4"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/></svg>
                  </button>
                </div>
              </div>

              {/* Editable content area */}
              <div
                ref={editorRef}
                className="editor-body"
                contentEditable
                suppressContentEditableWarning
                onInput={handleEditorInput}
                data-placeholder="Write your blog post content here, or paste from Google Docs / Word…"
              />
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
                <select
                  className="admin-select"
                  value={form.category}
                  onChange={(e) => set("category", e.target.value)}
                >
                  <option value="">Select category</option>
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
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
