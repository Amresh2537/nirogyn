"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Post {
  id: string;
  title: string;
  slug: string;
  category: string;
  status: "draft" | "published";
  author: string;
  createdAt: string;
  featured: boolean;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/admin/posts");
    if (res.status === 401) { router.push("/admin/login"); return; }
    setPosts(await res.json());
    setLoading(false);
  }, [router]);

  useEffect(() => { fetchPosts(); }, [fetchPosts]);

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    await fetch(`/api/admin/posts/${id}`, { method: "DELETE" });
    fetchPosts();
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-IN", {
      day: "numeric", month: "short", year: "numeric",
    });
  }

  return (
    <div className="admin-wrap">
      {/* Navbar */}
      <header className="admin-nav">
        <Link href="/" className="admin-nav-logo">
          <span className="admin-login-dot" />NIROGYN
        </Link>
        <div className="admin-nav-right">
          <span className="admin-nav-badge">Admin</span>
          <button className="admin-btn-ghost" onClick={handleLogout}>
            Sign Out
          </button>
        </div>
      </header>

      <main className="admin-main">
        <div className="admin-page-header">
          <div>
            <h1 className="admin-page-title">Blog Posts</h1>
            <p className="admin-page-sub">{posts.length} posts total</p>
          </div>
          <Link href="/admin/new" className="admin-btn-primary">
            + New Post
          </Link>
        </div>

        {loading ? (
          <div className="admin-loading">Loading posts…</div>
        ) : posts.length === 0 ? (
          <div className="admin-empty">
            <p>No posts yet.</p>
            <Link href="/admin/new" className="admin-btn-primary" style={{ marginTop: "1rem", display: "inline-block" }}>
              Create your first post
            </Link>
          </div>
        ) : (
          <div className="admin-posts-table">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Author</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td>
                      <div className="post-title-cell">
                        {post.featured && <span className="featured-badge">★ Featured</span>}
                        <span>{post.title}</span>
                        <a
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="post-view-link"
                        >
                          ↗ view
                        </a>
                      </div>
                    </td>
                    <td><span className="category-chip">{post.category || "—"}</span></td>
                    <td>
                      <span className={`status-chip status-${post.status}`}>
                        {post.status}
                      </span>
                    </td>
                    <td>{post.author}</td>
                    <td>{formatDate(post.createdAt)}</td>
                    <td>
                      <div className="action-btns">
                        <Link href={`/admin/edit/${post.id}`} className="action-edit">
                          Edit
                        </Link>
                        <button
                          className="action-delete"
                          onClick={() => handleDelete(post.id, post.title)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
