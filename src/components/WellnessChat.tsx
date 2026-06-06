"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "How do I improve my gut health?",
  "Best supplements for stress?",
  "Why am I Vitamin D deficient?",
  "Foods for better sleep?",
];

export default function WellnessChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Namaste! I'm **Niro**, your AI wellness guide from Nirogyn. Ask me anything about nutrition, gut health, supplements, sleep, stress, or any wellness topic. I'm here to help. 🌿",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send(text?: string) {
    const msg = (text ?? input).trim();
    if (!msg || loading) return;
    setInput("");

    const newMessages: Message[] = [...messages, { role: "user", content: msg }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "Sorry, I had trouble connecting. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  // Render markdown-like bold (**text**) to <strong>
  function renderContent(text: string) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={i}>{part.slice(2, -2)}</strong>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  }

  return (
    <>
      {/* ── FLOATING BUTTON ── */}
      <button
        className={`chat-fab ${open ? "chat-fab--open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="Open wellness chat"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <circle cx="9" cy="10" r="0.8" fill="currentColor" />
            <circle cx="12" cy="10" r="0.8" fill="currentColor" />
            <circle cx="15" cy="10" r="0.8" fill="currentColor" />
          </svg>
        )}
        {!open && <span className="chat-fab-label">Ask Nirogyn</span>}
      </button>

      {/* ── CHAT PANEL ── */}
      <div className={`chat-panel ${open ? "chat-panel--open" : ""}`} role="dialog" aria-label="Wellness chatbot">
        {/* Header */}
        <div className="chat-header">
          <div className="chat-header-avatar">
            <span>🌿</span>
          </div>
          <div className="chat-header-info">
            <div className="chat-header-name">Niro</div>
            <div className="chat-header-sub">AI Wellness Guide · Nirogyn</div>
          </div>
          <div className="chat-header-status">
            <span className="chat-status-dot" />
            Online
          </div>
        </div>

        {/* Messages */}
        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`chat-msg ${msg.role === "user" ? "chat-msg--user" : "chat-msg--bot"}`}
            >
              {msg.role === "assistant" && (
                <div className="chat-msg-avatar">N</div>
              )}
              <div className="chat-bubble">
                {msg.content.split("\n").map((line, li) => (
                  <p key={li} style={{ margin: li === 0 ? 0 : "0.4rem 0 0" }}>
                    {renderContent(line)}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {loading && (
            <div className="chat-msg chat-msg--bot">
              <div className="chat-msg-avatar">N</div>
              <div className="chat-bubble chat-bubble--typing">
                <span /><span /><span />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggestions (only when first message) */}
        {messages.length === 1 && (
          <div className="chat-suggestions">
            {SUGGESTIONS.map((s) => (
              <button key={s} className="chat-suggestion" onClick={() => send(s)}>
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <form
          className="chat-input-row"
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
        >
          <input
            ref={inputRef}
            className="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about nutrition, gut health, sleep…"
            disabled={loading}
            autoComplete="off"
          />
          <button
            type="submit"
            className="chat-send"
            disabled={loading || !input.trim()}
            aria-label="Send"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>

        <div className="chat-footer-note">
          Powered by Nirogyn · Not a substitute for medical advice
        </div>
      </div>

      {/* Backdrop on mobile */}
      {open && (
        <div className="chat-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />
      )}
    </>
  );
}
