import { useState, useRef, useEffect } from "react";
import { IconChat, IconSend, IconLeaf } from "./Icons.jsx";
import { localAnswer } from "../data/chatKb.js";

const SUGGESTIONS = [
  "What services do you offer?",
  "Tell me about NABET",
  "CEQMS product",
  "Get a proposal",
];

const GREETING = {
  who: "bot",
  text:
    "Hi there! 👋 I'm RGPL's AI assistant. Ask me about our environmental services, NABET accreditation, the CEQMS & air-quality products, or how to request a proposal.",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showSuggest, setShowSuggest] = useState(true);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const history = useRef([]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, typing]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 120);
    // flag on <body> so the other floating buttons (WhatsApp / back-to-top)
    // can hide themselves and not collide with the open chat panel.
    document.body.classList.toggle("chat-open", open);
    return () => document.body.classList.remove("chat-open");
  }, [open]);

  async function send(text) {
    const value = text.trim();
    if (!value) return;
    setMessages((m) => [...m, { who: "user", text: value }]);
    history.current.push({ role: "user", content: value });
    setShowSuggest(false);
    setTyping(true);

    let reply;
    try {
      const API_URL = import.meta.env.VITE_API_URL || "";
      const res = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: value, history: history.current }),
      });
      if (!res.ok) throw new Error("api");
      const data = await res.json();
      reply = data.reply;
    } catch {
      // No backend (e.g. static GitHub Pages build) — answer from the local KB.
      reply = localAnswer(value);
    }
    setMessages((m) => [...m, { who: "bot", text: reply }]);
    history.current.push({ role: "assistant", content: reply });
    setTyping(false);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const v = input;
    setInput("");
    send(v);
  };

  return (
    <>
      <button className="chat-fab" aria-label="Chat with RGPL assistant" onClick={() => setOpen((o) => !o)}>
        <IconChat size={26} />
      </button>

      <div className={`chat-panel ${open ? "open" : ""}`}>
        <div className="chat-head">
          <span className="avatar"><IconLeaf size={20} /></span>
          <div>
            <b>RGPL Assistant</b>
            <small><span className="status-dot" />Online · replies instantly</small>
          </div>
          <button className="chat-close" aria-label="Close" onClick={() => setOpen(false)}>×</button>
        </div>

        <div className="chat-body" ref={bodyRef}>
          {messages.map((m, i) => (
            <div key={i} className={`msg ${m.who}`}>{m.text}</div>
          ))}
          {typing && (
            <div className="msg bot typing"><span /><span /><span /></div>
          )}
        </div>

        {showSuggest && (
          <div className="chat-suggest">
            {SUGGESTIONS.map((s) => (
              <button key={s} onClick={() => send(s)}>{s}</button>
            ))}
          </div>
        )}

        <form className="chat-input" onSubmit={onSubmit}>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question…"
            autoComplete="off"
          />
          <button type="submit" aria-label="Send"><IconSend size={18} /></button>
        </form>
      </div>
    </>
  );
}
