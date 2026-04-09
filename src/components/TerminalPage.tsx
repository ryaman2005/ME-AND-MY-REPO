import MacWindow from "./MacWindow";
import { useState, useEffect, useRef } from "react";

const commands: Record<string, string> = {
  help: `Available commands:
  neofetch    - Display system info
  ls          - List projects
  cat about   - Read about me
  skills      - Show skills
  clear       - Clear terminal
  help        - Show this help`,
  neofetch: `
  ::::::::       ::::::::     aryaman@portfolio-os
  :+:    :+:     :+:    :+:   ─────────────────
  +:+    +:+     +:+    +:+   OS: PortfolioOS v2.0
  +#+    +#+     +#+    +#+   Host: MacBook Pro 14"
  +#+    +#+     +#+    +#+   Kernel: React 18
  #+#    #+#     #+#    #+#   Shell: TypeScript 5.0
  ########       ########     DE: Tailwind CSS 3
                               WM: Vite 5
  PORTFOLIO OPERATING SYSTEM   Terminal: JetBrains Mono
                               CPU: Creative Mind @ 4.2GHz
                               GPU: Three.js & WebGL
                               Memory: Infinite Curiosity`,
  ls: `📁 projects/
├── online-attendance-portal/
├── dsa-chatbot/
├── syllabus-repository/
└── cnn-protein-structure/`,
  "cat about": `{
  "name": "Aryaman Bohra",
  "role": "B.Tech CSE Student",
  "focus": ["AI/ML", "Frontend Dev"],
  "status": "Open for opportunities",
  "stack": ["React.js", "Node.js", "Python", "MySQL"]
}`,
  skills: `
┌──────────────┬──────────┐
│ Skill        │ Level    │
├──────────────┼──────────┤
│ React.js     │ ████████ │
│ Node.js      │ ███████░ │
│ Python       │ ███████░ │
│ C/C++        │ ██████░░ │
│ MySQL        │ █████░░░ │
│ Tailwind CSS │ █████░░░ │
└──────────────┴──────────┘`,
};

const TerminalPage = () => {
  const [history, setHistory] = useState<{ cmd: string; output: string }[]>([
    { cmd: "neofetch", output: commands.neofetch },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output = commands[cmd] || `command not found: ${cmd}. Type 'help' for available commands.`;
    setHistory((prev) => [...prev, { cmd: input, output }]);
    setInput("");
  };

  return (
    <div className="min-h-[calc(100vh-7rem)] p-6 pb-24 flex justify-center overflow-auto">
      <div className="w-full max-w-3xl animate-scale-up" style={{ opacity: 0, animationDelay: "0.1s" }}>
        <MacWindow title="ARYAMAN — ZSH — 80×24">
          <div className="bg-foreground text-secondary p-5 font-mono text-xs leading-relaxed min-h-[400px] max-h-[60vh] overflow-auto">
            {history.map((entry, i) => (
              <div key={i} className="mb-3">
                <div>
                  <span className="text-green-400">aryaman@portfolio-os</span>
                  <span className="text-muted-foreground"> : </span>
                  <span className="text-blue-300">~</span>
                  <span> $ {entry.cmd}</span>
                </div>
                <pre className="whitespace-pre-wrap mt-1 text-secondary/80">{entry.output}</pre>
              </div>
            ))}

            <form onSubmit={handleSubmit} className="flex items-center">
              <span className="text-green-400">aryaman@portfolio-os</span>
              <span className="text-muted-foreground"> : </span>
              <span className="text-blue-300">~</span>
              <span> $ </span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none ml-1 caret-green-400"
                autoFocus
              />
            </form>
            <div ref={bottomRef} />
          </div>
        </MacWindow>

        {/* Hint */}
        <div className="glass-window rounded-xl p-4 mt-4 max-w-xs ml-auto">
          <div className="flex items-start gap-2">
            <span>💡</span>
            <div>
              <p className="text-xs font-semibold">EXPERT HINT</p>
              <p className="text-xs text-muted-foreground mt-1">
                The terminal is where the magic happens. Type <code className="text-primary">help</code> to see more commands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalPage;
