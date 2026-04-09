import MacWindow from "./MacWindow";
import { Mail, Send, Paperclip, Image, Smile, Loader2 } from "lucide-react";
import { useState } from "react";
import avatarImg from "@/assets/avatar.jpg";
import { toast } from "sonner";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!name || !email || !message) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }
    
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message })
      });
      
      const data = await response.json();
      if (data.success) {
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        toast.error(data.message || "Failed to send message.");
      }
    } catch (err) {
      toast.error("Error connecting to server. Is the backend running?");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-7rem)] p-6 pb-24 flex justify-center items-start overflow-auto">
      <div className="w-full max-w-4xl flex gap-6 items-start">
        {/* Main mail window */}
        <div className="flex-1 animate-scale-up" style={{ opacity: 0, animationDelay: "0.1s" }}>
          <MacWindow title="New Message — Contact" icon={<Mail className="w-4 h-4" />}>
            <div className="flex flex-col md:flex-row">
              {/* Sidebar */}
              <div className="md:w-48 p-4 md:border-r border-border/50">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Mailboxes</p>
                <div className="space-y-1">
                  {["Inbox", "Sent", "Drafts", "Trash"].map((item, i) => (
                    <button
                      key={item}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 ${i === 0 ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-secondary"}`}
                    >
                      {item === "Inbox" && "💬"}
                      {item === "Sent" && "➤"}
                      {item === "Drafts" && "📝"}
                      {item === "Trash" && "🗑️"}
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mail form */}
              <div className="flex-1 p-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-muted-foreground w-12">To:</span>
                    <span className="px-3 py-1 bg-secondary rounded-md font-mono text-xs">baryaman022@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm border-t border-border/50 pt-3">
                    <span className="text-muted-foreground w-12">Name:</span>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="flex items-center gap-3 text-sm border-t border-border/50 pt-3">
                    <span className="text-muted-foreground w-12">From:</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="flex items-center gap-3 text-sm border-t border-border/50 pt-3">
                    <span className="text-muted-foreground w-12">Subject:</span>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Project Discussion"
                      className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                <div className="mt-4 border-t border-border/50 pt-4">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                    className="w-full h-48 bg-transparent text-sm outline-none resize-none placeholder:text-muted-foreground/50"
                  />
                </div>

                <div className="flex items-center justify-between border-t border-border/50 pt-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Paperclip className="w-4 h-4 cursor-pointer hover:text-foreground transition-colors" />
                    <Image className="w-4 h-4 cursor-pointer hover:text-foreground transition-colors" />
                    <Smile className="w-4 h-4 cursor-pointer hover:text-foreground transition-colors" />
                  </div>
                  <button onClick={handleSend} disabled={isLoading} className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50">
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    {isLoading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </div>
          </MacWindow>
        </div>

        {/* Side card */}
        <div className="hidden lg:block w-52 animate-fade-up" style={{ opacity: 0, animationDelay: "0.3s" }}>
          <div className="glass-window rounded-xl p-5 text-center">
            <img
              src={avatarImg}
              alt="Aryaman"
              className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-border"
              width={512}
              height={512}
              loading="lazy"
            />
            <h3 className="font-semibold mt-3 text-sm">Aryaman Bohra</h3>
            <p className="text-xs text-muted-foreground">B.Tech Student</p>
            <div className="flex justify-center gap-2 mt-3">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">🐙</span>
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">✉️</span>
            </div>
          </div>
          <div className="glass-window rounded-xl p-4 mt-3">
            <p className="text-xs italic text-muted-foreground leading-relaxed">
              "I usually respond within 24 hours. Looking forward to hearing about your next big idea!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
