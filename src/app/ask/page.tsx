"use client";

import { useState, useRef, useEffect } from "react";

// Bot replies based on user queries
const botReplies = {
  default: [
    "I'm Nirogyn AI, and I'm still learning! 🌱 Let me connect you with the right information. Could you please rephrase your question or contact us at care@nirogyn.com for personalized help.",
    "That's a great question! I'm still learning about this topic. In the meantime, our team at Nirogyn would love to help you. Reach out to care@nirogyn.com",
    "I'm here to help, but I'm still in my learning phase. For now, I'd suggest checking out our articles or writing to us at care@nirogyn.com"
  ],
  sleep: [
    "Sleep issues are usually tied to cortisol rhythms or blue light exposure before bed. Try dimming screens 90 minutes before sleep and keeping a consistent wake time — even on weekends. Our SLEEP pillar covers this in depth, including the gut-sleep axis that most content completely misses.",
    "If you're waking up tired after 7-8 hours, it might be your gut microbiome. If disrupted, it produces less serotonin — the precursor to melatonin — and less GABA, the molecule that allows your brain to properly switch off. No sleep hygiene routine fixes a gut chemistry problem."
  ],
  energy: [
    "Energy slumps often point to blood sugar instability. Prioritise protein at breakfast and reduce high-glycaemic snacks. Magnesium and B12 can also make a noticeable difference. Pretty Energy, one of our brands, is formulated specifically for sustained energy based on how women's bodies actually function.",
    "Feeling tired despite eating well? Eating well and absorbing well are two different things. If your gut microbiome is depleted — through low fibre, stress, or ultra-processed food — your body cannot extract what it needs from even a decent diet."
  ],
  anxiety: [
    "Anxiety responds well to a few key habits: breathwork (4-7-8 method), reducing caffeine after noon, and magnesium glycinate before bed. Consistency matters more than intensity. The gut-brain axis is real — your gut produces 90% of your serotonin.",
    "Our MIND pillar covers the gut-brain axis in depth. India's mental health crisis is real — 83% of those who need care never receive it. Nirogyn is here to bridge that gap with science-backed understanding."
  ],
  bloating: [
    "Bloating is often linked to FODMAPs, eating too fast, or low stomach acid. Starting meals with a small salad and chewing slowly can reduce symptoms significantly. The traditional Indian thali was one of the most gut-intelligent meals ever assembled — fermented curd, prebiotic-rich dal, whole grains.",
    "If you're bloated despite eating healthy, your gut microbiome might be depleted. India has a specific, urgent gut health crisis: a generation that grew up eating fibre-rich traditional food has shifted to processed, low-fibre diets in 30 years."
  ],
  supplements: [
    "Choosing the right supplement depends on your specific needs. For gut health, prebiotics like Isochia are essential. For women's energy, Pretty Energy is formulated around hormonal reality. For muscle recovery, PowerShilla supports strength and stamina. Always consult a healthcare professional first.",
    "India's supplement market is confusing. Nirogyn Healthcare brands — Isochia, Captain Gummies, PowerShilla, and Pretty Energy — are manufactured to the highest standards: FDA Registered Facility, FSSAI Approved, GMP Certified, CE Certified, and ISO 9001:2015."
  ],
  protein: [
    "For muscle gain, aim for 1.6–2.2g of protein per kg of bodyweight. Whey isolate post-workout is effective, but whole food sources like eggs, lentils, and Greek yoghurt work just as well. PowerShilla is designed for Indian bodies that demand more at the gym.",
    "Indian diets are often protein-deficient. Our MOVE pillar covers this in depth. We believe in science-backed wellness built for India — not borrowed from other countries."
  ],
  about: [
    "Nirogyn is India's science-backed wellness education platform — and the parent company behind a family of purpose-built wellness brands. We're not neutral observers of the Indian health crisis. We're inside it — researching it, translating it, and writing about it every day.",
    "Every article on Nirogyn is grounded in peer-reviewed research. Every claim has a named source. Every recommendation is specific — not 'eat more vegetables', but why a specific vegetable, what it does in the body, and what happens when you don't eat it."
  ],
  contact: [
    "We are here. Write to us at care@nirogyn.com — we read every message. There is no automated response sitting between you and us. A real person reads it and responds within 72 hours on working days.",
    "You can reach us for content feedback, suggestions, partnerships, media enquiries, privacy & legal, or careers. Every message is read by a member of the Nirogyn team. We do not use automated ticketing systems."
  ],
  hello: [
    "Hello! 👋 I'm Nirogyn AI, your wellness assistant. Ask me anything about sleep, nutrition, supplements, or overall wellbeing. I'm here to help you feel better! If I can't answer, I'll connect you with our team at care@nirogyn.com.",
    "Hi there! 🌟 I'm Nirogyn — India's science-backed wellness platform. I'm still learning, but I'll do my best to help. What brings you here today?"
  ]
};

const quickQuestions = [
  { icon: "😴", text: "Why can't I sleep properly?" },
  { icon: "⚡", text: "How to get more energy?" },
  { icon: "💊", text: "Which supplements suit me?" },
  { icon: "🧠", text: "How to reduce anxiety?" },
  { icon: "🍽️", text: "Foods that help with bloating?" },
  { icon: "💪", text: "Best protein for muscle gain?" },
  { icon: "ℹ️", text: "About Nirogyn" },
  { icon: "📧", text: "Contact Nirogyn" },
];

function getTimeString(): string {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function getBotReply(text: string): string {
  const lower = text.toLowerCase();
  
  // Check for keywords
  if (lower.includes("hello") || lower.includes("hi ") || lower === "hi" || lower.includes("hey")) {
    return botReplies.hello[Math.floor(Math.random() * botReplies.hello.length)];
  }
  if (lower.includes("sleep") || lower.includes("tired") || lower.includes("exhausted") || lower.includes("wake") || lower.includes("night")) {
    return botReplies.sleep[Math.floor(Math.random() * botReplies.sleep.length)];
  }
  if (lower.includes("energy") || lower.includes("tired") || lower.includes("fatigue") || lower.includes("slump")) {
    return botReplies.energy[Math.floor(Math.random() * botReplies.energy.length)];
  }
  if (lower.includes("anxiety") || lower.includes("stress") || lower.includes("worry") || lower.includes("panic") || lower.includes("mind")) {
    return botReplies.anxiety[Math.floor(Math.random() * botReplies.anxiety.length)];
  }
  if (lower.includes("bloat") || lower.includes("gas") || lower.includes("stomach") || lower.includes("digestion") || lower.includes("gut")) {
    return botReplies.bloating[Math.floor(Math.random() * botReplies.bloating.length)];
  }
  if (lower.includes("supplement") || lower.includes("pill") || lower.includes("tablet") || lower.includes("vitamin") || lower.includes("mineral")) {
    return botReplies.supplements[Math.floor(Math.random() * botReplies.supplements.length)];
  }
  if (lower.includes("protein") || lower.includes("muscle") || lower.includes("strength") || lower.includes("gain") || lower.includes("gym")) {
    return botReplies.protein[Math.floor(Math.random() * botReplies.protein.length)];
  }
  if (lower.includes("about") || (lower.includes("nirogyn") && (lower.includes("what") || lower.includes("who") || lower.includes("company")))) {
    return botReplies.about[Math.floor(Math.random() * botReplies.about.length)];
  }
  if (lower.includes("contact") || lower.includes("email") || lower.includes("write") || lower.includes("reach") || lower.includes("care@")) {
    return botReplies.contact[Math.floor(Math.random() * botReplies.contact.length)];
  }
  
  // Default - still learning
  return botReplies.default[Math.floor(Math.random() * botReplies.default.length)];
}

interface Message {
  id: number;
  type: "bot" | "user";
  text: string;
  time: string;
}

export default function AskPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot",
      text: "Hello! 👋 I'm Nirogyn AI, your wellness assistant. Ask me anything about sleep, nutrition, supplements, or overall wellbeing. I'm still learning, so if I can't answer, I'll connect you with our team!",
      time: "", // Empty initially, will be set on client
    },
  ]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Set client-side flag and update initial message time
  useEffect(() => {
    setIsClient(true);
    setMessages((prev) => 
      prev.map((msg) => 
        msg.id === 1 && !msg.time ? { ...msg, time: getTimeString() } : msg
      )
    );
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (text?: string): void => {
    const val = (text ?? inputValue).trim();
    if (!val) return;

    const userMsg: Message = {
      id: Date.now(),
      type: "user",
      text: val,
      time: getTimeString(),
    };
    
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    const delay = 800 + Math.random() * 600;
    setTimeout(() => {
      const reply = getBotReply(val);
      const botMsg: Message = {
        id: Date.now() + 1,
        type: "bot",
        text: reply,
        time: getTimeString(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, delay);
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 md:p-8"
      style={{
        background: "radial-gradient(95% 78% at 12% 0, #a7b98257 0%, #a7b98200 52%), linear-gradient(145deg, #f5f1e8 0%, #eee5d7 45%, #ece8df 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Story Glow effect - exact match from blog post */}
      <div 
        className="blog-pages-module__duUaNG__storyGlow" 
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-10rem",
          top: "-7rem",
          width: "26rem",
          height: "26rem",
          borderRadius: "999px",
          background: "radial-gradient(circle, rgba(33, 76, 42, 0.2), rgba(33, 76, 42, 0))",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      
      <div className="w-full max-w-2xl flex flex-col relative z-10" style={{ height: "min(700px, 90vh)" }}>

        {/* Card - Clean white design */}
        <div className="flex-1 flex flex-col rounded-3xl overflow-hidden border border-white/20 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.08)]">

          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#111] to-[#333] flex items-center justify-center text-white text-sm font-medium tracking-tight">
                  H
                </div>
                {/* Floating green circle animation */}
                <div className="absolute -bottom-0.5 -right-0.5">
                  <div className="relative">
                    <span className="absolute w-5 h-5 bg-emerald-400/30 rounded-full animate-ping" />
                    <span className="relative w-3 h-3 bg-emerald-500 rounded-full border-2 border-white block" />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[15px] font-medium text-[#111] leading-tight tracking-tight">Nirogyn AI</p>
                <p className="text-[11px] text-[#999] mt-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block animate-pulse" />
                  Online · Still learning
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#999] hover:text-[#333] hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.7}>
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#999] hover:text-[#333] hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.7}>
                  <circle cx="12" cy="5" r="1" fill="currentColor" /><circle cx="12" cy="12" r="1" fill="currentColor" /><circle cx="12" cy="19" r="1" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages - Clean white */}
          <div className="flex-1 overflow-y-auto px-6 py-6 bg-white flex flex-col gap-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.type === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-medium flex-shrink-0 mt-0.5 ${
                  msg.type === "bot"
                    ? "bg-gradient-to-br from-[#111] to-[#333] text-white"
                    : "bg-gray-100 text-[#666]"
                }`}>
                  {msg.type === "bot" ? "H" : "U"}
                </div>

                <div className={`flex flex-col gap-1 max-w-[82%] ${msg.type === "user" ? "items-end" : ""}`}>
                  <div className={`px-4 py-3 text-[14px] leading-relaxed ${
                    msg.type === "user"
                      ? "bg-[#111] text-white rounded-2xl rounded-br-[4px]"
                      : "bg-gray-50 text-[#1a1a1a] rounded-2xl rounded-bl-[4px] border border-gray-100"
                  }`}>
                    {msg.text}
                  </div>
                  {/* Only show time on client to avoid hydration mismatch */}
                  {isClient && msg.time && (
                    <span className="text-[11px] text-[#ccc] px-1">{msg.time}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#111] to-[#333] flex items-center justify-center text-[11px] font-medium text-white flex-shrink-0 mt-0.5">H</div>
                <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-bl-[4px] px-4 py-3.5 flex items-center gap-1.5">
                  {[0, 180, 360].map((delay) => (
                    <span
                      key={delay}
                      className="w-1.5 h-1.5 rounded-full bg-gray-400 inline-block"
                      style={{ animation: `bounce 1.2s ${delay}ms infinite ease-in-out` }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions */}
          <div className="px-6 py-3.5 border-t border-gray-100 bg-white flex-shrink-0">
            <p className="text-[10px] font-semibold text-[#bbb] uppercase tracking-widest mb-2.5">Suggested Questions</p>
            <div className="flex gap-2 overflow-x-auto pb-0.5" style={{ scrollbarWidth: "none" }}>
              {quickQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q.text)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 text-[13px] text-[#333] whitespace-nowrap flex-shrink-0 transition-all duration-150"
                >
                  <span className="text-[13px]">{q.icon}</span>
                  {q.text}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="px-4 pt-3 pb-2 border-t border-gray-100 bg-white flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="flex-1 flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2.5 focus-within:border-gray-400 transition-colors">
                <button className="text-[#bbb] hover:text-[#888] transition-colors flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.7}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about your wellbeing…"
                  className="flex-1 bg-transparent text-[14px] text-[#1a1a1a] outline-none placeholder:text-[#bbb]"
                />
              </div>
              <button
                onClick={() => handleSend()}
                disabled={!inputValue.trim()}
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-150 ${
                  inputValue.trim()
                    ? "bg-[#111] hover:bg-[#333] active:scale-95"
                    : "bg-gray-100 cursor-not-allowed"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke={inputValue.trim() ? "#fff" : "#bbb"} viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] text-[#ccc] mt-2.5 pb-1">
              <span>Nirogyn AI is not medical advice</span>
              <span className="hidden sm:inline">·</span>
              <a href="#" className="hover:text-[#999] transition-colors underline underline-offset-2">Privacy Policy</a>
              <span className="hidden sm:inline">·</span>
              <span>Nirogyn.com</span>
              <span className="hidden sm:inline">·</span>
              <a href="#" className="hover:text-[#999] transition-colors underline underline-offset-2">Contact Us</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-4px); }
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}