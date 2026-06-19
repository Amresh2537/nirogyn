"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Ingredient {
  id: string;
  title: string;
  slug: string;
  category: string;
  status: "draft" | "published";
  author: string;
  createdAt: string;
}

export default function IngredientsAdminPage() {
  const router = useRouter();
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
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

  const fetchIngredients = useCallback(async () => {
    const res = await fetch("/api/admin/ingredients");

    if (res.status === 401) {
      router.push("/admin/login");
      return;
    }

    const data = await readJsonSafely<Ingredient[]>(res, []);
    setIngredients(data);
    setLoading(false);
  }, [router]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void fetchIngredients();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [fetchIngredients]);

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    await fetch(`/api/admin/ingredients/${id}`, { method: "DELETE" });
    fetchIngredients();
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <div className="admin-wrap">
      <header className="admin-nav">
        <Link href="/" className="admin-nav-logo">
          <span className="admin-login-dot" />
          NIROGYN
        </Link>
        <div className="admin-nav-right">
          <Link href="/admin" className="admin-btn-ghost">
            Blog
          </Link>
          <span className="admin-nav-badge">Admin</span>
          <button className="admin-btn-ghost" onClick={handleLogout}>
            Sign Out
          </button>
        </div>
      </header>

      <main className="admin-main">
        <div className="admin-page-header">
          <div>
            <h1 className="admin-page-title">Ingredients</h1>
            <p className="admin-page-sub">{ingredients.length} ingredients total</p>
          </div>
          <Link href="/admin/ingredients/new" className="admin-btn-primary">
            + New Ingredient
          </Link>
        </div>

        {loading ? (
          <div className="admin-loading">Loading ingredients…</div>
        ) : ingredients.length === 0 ? (
          <div className="admin-empty">
            <p>No ingredients yet.</p>
            <Link
              href="/admin/ingredients/new"
              className="admin-btn-primary"
              style={{ marginTop: "1rem", display: "inline-block" }}
            >
              Create your first ingredient
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
                {ingredients.map((ingredient) => (
                  <tr key={ingredient.id}>
                    <td>
                      <div className="post-title-cell">
                        <span>{ingredient.title}</span>
                        <a
                          href={`/ingredients/${ingredient.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="post-view-link"
                        >
                          ↗ view
                        </a>
                      </div>
                    </td>
                    <td>
                      <span className="category-chip">{ingredient.category || "—"}</span>
                    </td>
                    <td>
                      <span className={`status-chip status-${ingredient.status}`}>
                        {ingredient.status}
                      </span>
                    </td>
                    <td>{ingredient.author}</td>
                    <td>{formatDate(ingredient.createdAt)}</td>
                    <td>
                      <div className="action-btns">
                        <Link
                          href={`/admin/ingredients/edit/${ingredient.id}`}
                          className="action-edit"
                        >
                          Edit
                        </Link>
                        <button
                          className="action-delete"
                          onClick={() => handleDelete(ingredient.id, ingredient.title)}
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
