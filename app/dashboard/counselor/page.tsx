"use client";

import { createClient } from "@/lib/supabase";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };
type Session = { id: string; title: string; updated_at: string };

const STARTERS = [
  {
    category: "Summer Programs",
    prompts: [
      "What selective summer programs should I apply to this year?",
      "What research opportunities can I do this summer?",
    ],
  },
  {
    category: "Competitions",
    prompts: [
      "What competitions should I be doing right now given my interests?",
      "How do I get started with USACO / AMC / Science Olympiad?",
    ],
  },
  {
    category: "Courses",
    prompts: [
      "What AP or advanced courses should I take next year?",
      "How do I go beyond my school's curriculum in my intended field?",
    ],
  },
  {
    category: "Application Strategy",
    prompts: [
      "Is my school list balanced? What's missing?",
      "What should I be doing RIGHT NOW based on my grade?",
    ],
  },
  {
    category: "Profile & Activities",
    prompts: [
      "What activities would strengthen my application the most?",
      "How do I get research experience as a high schooler?",
    ],
  },
  {
    category: "Essays",
    prompts: [
      "What should my Common App essay be about?",
      "How do I approach supplemental essays for my reach schools?",
    ],
  },
];

export default function CounselorPage() {
  const supabase = useMemo(() => createClient(), []);

  const [hasProfile, setHasProfile] = useState<boolean | null>(null);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    async function init() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      setUserId(user.id);

      const { data: profile } = await supabase
        .from("profiles")
        .select("grade, intended_major, interests")
        .eq("user_id", user.id)
        .single();
      setHasProfile(Boolean(profile?.grade || profile?.intended_major || profile?.interests));

      const { data: sessionRows } = await supabase
        .from("chat_sessions")
        .select("id, title, updated_at")
        .eq("user_id", user.id)
        .order("updated_at", { ascending: false });
      setSessions((sessionRows ?? []) as Session[]);
    }
    void init();
  }, [supabase]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function loadSession(id: string) {
    setActiveSessionId(id);
    setInput("");
    const { data } = await supabase
      .from("chat_messages")
      .select("role, content")
      .eq("session_id", id)
      .order("created_at", { ascending: true });
    setMessages((data ?? []) as Message[]);
  }

  function startNewChat() {
    setActiveSessionId(null);
    setMessages([]);
    setInput("");
    textareaRef.current?.focus();
  }

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || streaming || !userId) return;

    setInput("");
    setStreaming(true);

    // Create session on first message
    let sessionId = activeSessionId;
    if (!sessionId) {
      const title = trimmed.length > 60 ? trimmed.slice(0, 57) + "…" : trimmed;
      const { data: newSession } = await supabase
        .from("chat_sessions")
        .insert({ user_id: userId, title })
        .select("id, title, updated_at")
        .single();
      if (!newSession) { setStreaming(false); return; }
      sessionId = newSession.id;
      setActiveSessionId(sessionId);
      setSessions((prev) => [newSession as Session, ...prev]);
    }

    // Save user message
    await supabase.from("chat_messages").insert({
      session_id: sessionId,
      role: "user",
      content: trimmed,
    });

    const history = messages;
    setMessages((prev) => [
      ...prev,
      { role: "user", content: trimmed },
      { role: "assistant", content: "" },
    ]);

    let assistantContent = "";

    try {
      const res = await fetch("/api/counselor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: trimmed, history }),
      });

      if (!res.ok || !res.body) {
        const errText = await res.text();
        setMessages((prev) => {
          const next = [...prev];
          next[next.length - 1] = { role: "assistant", content: `Error: ${errText || res.statusText}` };
          return next;
        });
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        assistantContent += chunk;
        setMessages((prev) => {
          const next = [...prev];
          next[next.length - 1] = { role: "assistant", content: assistantContent };
          return next;
        });
      }
    } catch {
      setMessages((prev) => {
        const next = [...prev];
        next[next.length - 1] = { role: "assistant", content: "Something went wrong. Please try again." };
        return next;
      });
      return;
    } finally {
      setStreaming(false);
    }

    // Save assistant message and bump session updated_at
    if (assistantContent && sessionId) {
      await Promise.all([
        supabase.from("chat_messages").insert({
          session_id: sessionId,
          role: "assistant",
          content: assistantContent,
        }),
        supabase
          .from("chat_sessions")
          .update({ updated_at: new Date().toISOString() })
          .eq("id", sessionId),
      ]);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void send(input);
    }
  }

  async function deleteSession(id: string, e: React.MouseEvent) {
    e.stopPropagation();
    await supabase.from("chat_sessions").delete().eq("id", id);
    setSessions((prev) => prev.filter((s) => s.id !== id));
    if (activeSessionId === id) startNewChat();
  }

  return (
    <div className="flex h-full" style={{ background: "var(--bg-base)" }}>
      {/* Conversation list */}
      <div className="flex w-52 shrink-0 flex-col border-r border-stone-200/60 dark:border-stone-700/50" style={{ background: "var(--bg-card)" }}>
        <div className="border-b border-stone-200/60 dark:border-stone-700/50 p-3">
          <button
            type="button"
            onClick={startNewChat}
            className="w-full rounded-lg border border-stone-200 dark:border-stone-700 px-3 py-2 text-left text-sm font-medium text-stone-700 dark:text-stone-300 shadow-sm transition-colors hover:bg-stone-50 dark:hover:bg-stone-800"
            style={{ background: "var(--bg-base)" }}
          >
            + New chat
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-0.5">
          {sessions.length === 0 && (
            <p className="px-2 py-4 text-center text-xs text-stone-400 dark:text-stone-500">No conversations yet</p>
          )}
          {sessions.map((s) => (
            <div
              key={s.id}
              onClick={() => void loadSession(s.id)}
              className={`group flex cursor-pointer items-center justify-between gap-1 rounded-lg px-3 py-2 text-sm transition-colors ${
                activeSessionId === s.id
                  ? "font-medium text-stone-900 dark:text-stone-100 shadow-sm ring-1 ring-stone-200/80 dark:ring-stone-700/60"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              }`}
              style={activeSessionId === s.id ? { background: "var(--bg-base)" } : undefined}
            >
              <span className="min-w-0 truncate">{s.title}</span>
              <button
                type="button"
                onClick={(e) => void deleteSession(s.id, e)}
                className="shrink-0 rounded p-0.5 text-stone-300 dark:text-stone-600 opacity-0 transition-opacity hover:text-red-500 group-hover:opacity-100"
                title="Delete"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="border-b border-stone-200/60 dark:border-stone-700/50 px-8 py-6" style={{ background: "var(--bg-card)" }}>
          <h1 className="font-heading text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
            AI Counselor
          </h1>
          <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
            Specific programs, competitions, and next steps — based on your actual profile.
          </p>
        </header>

        {hasProfile === false && (
          <div className="border-b border-amber-200 bg-amber-50 px-8 py-3">
            <p className="text-sm text-amber-900">
              Add your grade and interests in{" "}
              <Link
                href="/dashboard/settings"
                className="font-medium underline underline-offset-2 hover:text-amber-700"
              >
                Settings
              </Link>{" "}
              for personalized recommendations.
            </p>
          </div>
        )}

        <div className="flex-1 overflow-y-auto px-8 py-4" style={{ background: "var(--bg-base)" }}>
          {messages.length === 0 ? (
            <div className="mx-auto max-w-2xl py-3">
              <p className="mb-3 text-xs text-stone-400 dark:text-stone-500">Try asking:</p>
              <div className="grid gap-2 sm:grid-cols-3">
                {STARTERS.map((group) => (
                  <div key={group.category} className="rounded-lg border border-stone-200 dark:border-stone-700/60 p-3" style={{ background: "var(--bg-card)" }}>
                    <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-stone-400 dark:text-stone-500">
                      {group.category}
                    </p>
                    <div className="space-y-1">
                      {group.prompts.map((q) => (
                        <button
                          key={q}
                          type="button"
                          onClick={() => void send(q)}
                          className="block w-full rounded px-2 py-1 text-left text-xs text-stone-600 dark:text-stone-400 transition-colors hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-100"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-2xl space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "bg-stone-900 dark:bg-stone-700 text-white"
                        : "border border-stone-200 dark:border-stone-700/60 text-stone-800 dark:text-stone-200 shadow-[0_1px_2px_rgba(15,23,42,0.04)] dark:shadow-none"
                    }`}
                    style={msg.role === "assistant" ? { background: "var(--bg-card)" } : undefined}
                  >
                    {msg.content}
                    {msg.role === "assistant" &&
                      streaming &&
                      i === messages.length - 1 &&
                      msg.content === "" && (
                        <span className="inline-block h-4 w-0.5 animate-pulse bg-neutral-400" />
                      )}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
          )}
        </div>

        <div className="border-t border-stone-200/60 dark:border-stone-700/50 px-8 py-4" style={{ background: "var(--bg-card)" }}>
          <div className="mx-auto flex max-w-2xl items-end gap-3">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={streaming}
              rows={2}
              placeholder="Ask your counselor…"
              className="flex-1 resize-none rounded-xl border border-stone-200 dark:border-stone-700 px-3 py-2 text-sm text-stone-900 dark:text-stone-100 outline-none placeholder:text-stone-400 dark:placeholder:text-stone-600 focus:border-orange-400 dark:focus:border-orange-500 focus:ring-2 focus:ring-orange-400/20 disabled:opacity-50"
              style={{ maxHeight: "8rem", overflowY: "auto", background: "var(--bg-base)" }}
            />
            <button
              type="button"
              onClick={() => void send(input)}
              disabled={streaming || !input.trim()}
              className="shrink-0 rounded-xl bg-orange-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {streaming ? "…" : "Send"}
            </button>
          </div>
          <p className="mt-2 text-center text-xs text-stone-400 dark:text-stone-500">
            Press Enter to send, Shift+Enter for a new line.
          </p>
        </div>
      </div>
    </div>
  );
}
