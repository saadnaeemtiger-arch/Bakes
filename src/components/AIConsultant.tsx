import { useState, useRef, useEffect } from "react";
import { Sparkles, Send, X, MessageSquare, ArrowRight, CornerDownLeft, Loader2, RefreshCw } from "lucide-react";
import { ChatMessage } from "../types";

interface AIConsultantProps {
  isOpen: boolean;
  onClose: () => void;
  onTriggerOrderPrefill: (cakeName: string, category: string) => void;
}

export default function AIConsultant({ isOpen, onClose, onTriggerOrderPrefill }: AIConsultantProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "m1",
      role: "model",
      text: "Hello, darling! I am **BakeBot**, MomBakes9's sweet virtual baking companion. 🌸\n\nI am here to help you recommend the perfect cake flavors, estimate sizing for your guest count, explain our ingredient standards, or help you brainstorm custom decoration concepts.\n\nWhat kind of delicious masterpiece are we designing today?"
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sampleQuestions = [
    "What core cake flavors are available?",
    "How many guests does an 8-inch cake serve?",
    "Do you offer eggless or gluten-free sponge cake bases?",
    "How much notice is needed for a custom birthday design?"
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: "user-" + Date.now(),
      role: "user",
      text: textToSend
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    try {
      // Map message history to the structure Gemini expects on the backend
      const historyPayload = messages.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }));

      const response = await fetch("/api/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: historyPayload
        })
      });

      const data = await response.json();
      
      const botMsg: ChatMessage = {
        id: "bot-" + Date.now(),
        role: "model",
        text: data.reply || "I apologize, sweet friend. I ran into a tiny baking hiccup while preparing my reply. Could you try asking again?"
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      const errorMsg: ChatMessage = {
        id: "error-" + Date.now(),
        role: "model",
        text: "My apologies! It seems I lost connection to the mixing bowl. Please verify your connection or click below to manually start a custom inquiry with Mom!"
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: "m1",
        role: "model",
        text: "Hello, darling! I am **BakeBot**, MomBakes9's sweet virtual baking companion. 🌸\n\nI am here to help you recommend the perfect cake flavors, estimate sizing for your guest count, explain our ingredient standards, or help you brainstorm custom decoration concepts.\n\nWhat kind of delicious masterpiece are we designing today?"
      }
    ]);
  };

  // Safe helper to render basic markdown bold/bullets
  const renderFormattedText = (text: string) => {
    return text.split("\n").map((line, lineIdx) => {
      // Check if it's a bullet point
      const isBullet = line.trim().startsWith("* ") || line.trim().startsWith("- ");
      let cleanLine = line;
      if (isBullet) {
        cleanLine = line.trim().substring(2);
      }

      // Simple regex replacement for bold (**text**)
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = boldRegex.exec(cleanLine)) !== null) {
        if (match.index > lastIndex) {
          parts.push(cleanLine.substring(lastIndex, match.index));
        }
        parts.push(<strong key={match.index} className="font-bold text-choco underline decoration-gold/30">{match[1]}</strong>);
        lastIndex = boldRegex.lastIndex;
      }

      if (lastIndex < cleanLine.length) {
        parts.push(cleanLine.substring(lastIndex));
      }

      if (isBullet) {
        return (
          <li key={lineIdx} className="list-disc ml-5 font-sans text-xs text-choco/80 mt-1 leading-relaxed">
            {parts.length > 0 ? parts : cleanLine}
          </li>
        );
      }

      return (
        <p key={lineIdx} className="font-sans text-xs text-choco/80 leading-relaxed mb-2 min-h-[1px]">
          {parts.length > 0 ? parts : cleanLine}
        </p>
      );
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-y-0 right-0 w-full sm:w-[450px] bg-ivory/95 backdrop-blur-md shadow-2xl z-50 border-l border-blush/30 flex flex-col justify-between"
      id="ai-consultant-sidebar"
    >
      {/* Header Panel */}
      <div className="p-6 bg-choco text-cream border-b border-blush/20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold">
            <Sparkles className="w-5 h-5 text-gold animate-pulse" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold">BakeBot Consultant</h3>
            <span className="font-sans text-[10px] tracking-wider text-gold uppercase font-semibold">
              MomBakes9 Virtual Expert
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleClearChat}
            className="p-1.5 rounded-full hover:bg-white/10 text-cream/70 hover:text-cream transition-colors"
            title="Reset Conversation"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-cream/70 hover:text-cream transition-colors cursor-pointer"
            id="close-bot-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Message Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4" id="chat-messages-container">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl p-4 shadow-sm border ${
                msg.role === "user"
                  ? "bg-choco/10 border-choco/20 text-choco"
                  : "bg-white border-blush/20 text-choco"
              }`}
            >
              {/* Profile name tag */}
              <div className="flex items-center justify-between mb-1.5 text-[9px] uppercase tracking-wider font-bold opacity-60">
                <span>{msg.role === "user" ? "You" : "BakeBot"}</span>
              </div>
              <div className="space-y-1">{renderFormattedText(msg.text)}</div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-blush/20 rounded-2xl p-4 shadow-sm flex items-center space-x-2">
              <span className="font-sans text-[9px] uppercase tracking-wider font-bold opacity-60">BakeBot is thinking</span>
              <Loader2 className="w-3.5 h-3.5 animate-spin text-gold" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Bottom control & inputs */}
      <div className="p-6 bg-white border-t border-blush/20 space-y-4">
        {/* Helper quick suggestion buttons if history is small */}
        {messages.length < 5 && (
          <div className="space-y-1.5">
            <span className="font-sans text-[9px] uppercase tracking-wider font-semibold text-choco/50 block">
              Suggested Questions
            </span>
            <div className="flex flex-col gap-1">
              {sampleQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="text-left font-sans text-[11px] text-choco hover:text-gold hover:bg-blush/10 border border-blush/20 rounded-lg p-2 transition-all cursor-pointer"
                  id={`suggested-question-${idx}`}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Text Input area */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend(inputText);
              }
            }}
            placeholder="Ask about flavors, servings size, GF options..."
            className="flex-1 px-4 py-3 bg-ivory text-choco text-sm rounded-xl border border-blush/30 focus:outline-none focus:border-gold placeholder:text-choco/45"
            id="bot-input-field"
          />
          <button
            onClick={() => handleSend(inputText)}
            disabled={!inputText.trim()}
            className="w-11 h-11 rounded-xl bg-choco hover:bg-gold hover:text-white text-cream flex items-center justify-center transition-all cursor-pointer disabled:opacity-40"
            id="bot-send-btn"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="font-sans text-[10px] text-center text-choco/50">
          Powered by Gemini AI Studio • Estimates may vary depending on recipe weight
        </p>
      </div>
    </div>
  );
}
