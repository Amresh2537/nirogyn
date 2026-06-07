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

interface Subscriber {
  id: string;
  email: string;
  subscribedAt: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);

  async function readJsonSafely<T>(response: Response, fallback: T): Promise<T> {
    const text = await response.text();
    if (!text.trim()) return fallback;

    try {
      return JSON.parse(text) as T;
    } catch {
      return fallback;
    }
  }

  const fetchDashboardData = useCallback(async () => {
    const [postsRes, subscribersRes] = await Promise.all([
      fetch("/api/admin/posts"),
      fetch("/api/admin/newsletter"),
    ]);

    if (postsRes.status === 401 || subscribersRes.status === 401) {
      router.push("/admin/login");
      return;
    }

    const [postsData, subscribersData] = await Promise.all([
      readJsonSafely<Post[]>(postsRes, []),
      readJsonSafely<Subscriber[]>(subscribersRes, []),
    ]);

    setPosts(postsData);
    setSubscribers(subscribersData);
    setLoading(false);
  }, [router]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void fetchDashboardData();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [fetchDashboardData]);

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    await fetch(`/api/admin/posts/${id}`, { method: "DELETE" });
    fetchDashboardData();
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
          <div style={{ display: "grid", gap: "2rem" }}>
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

            <div className="admin-card">
              <h2 className="admin-card-title">Newsletter Subscribers</h2>
              <p className="admin-page-sub">{subscribers.length} saved emails</p>

              {subscribers.length === 0 ? (
                <div className="admin-empty" style={{ marginTop: "1rem" }}>
                  <p>No subscribers yet.</p>
                </div>
              ) : (
                <div className="admin-posts-table" style={{ marginTop: "1rem" }}>
                  <table>
                    <thead>
                      <tr>
                        <th>Email</th>
                        <th>Subscribed</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subscribers.map((subscriber) => (
                        <tr key={subscriber.id}>
                          <td>{subscriber.email}</td>
                          <td>{formatDate(subscriber.subscribedAt)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
