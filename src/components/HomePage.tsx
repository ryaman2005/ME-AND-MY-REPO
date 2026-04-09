import MacWindow from "./MacWindow";
import avatarImg from "@/assets/avatar.jpg";
import { useState, useEffect } from "react";

const Typewriter = ({ text, delay = 100 }: { text: string; delay?: number }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}<span className="animate-pulse opacity-50">|</span></span>;
};

interface HomePageProps {
  onNavigate?: (page: string) => void;
}

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

const HomePage = ({ onNavigate }: HomePageProps) => {
  const downloadCV = (type: 'pdf' | 'docx') => {
    window.open(`${API_URL}/api/download-cv/${type}`, '_blank');
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-7rem)] p-4">
      <div className="w-full max-w-xl animate-scale-up" style={{ opacity: 0, animationDelay: "0.1s" }}>
        <MacWindow title="Welcome">
          <div className="p-8">
            <div className="flex items-start gap-6">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <img
                  src={avatarImg}
                  alt="Profile"
                  className="w-24 h-24 rounded-xl object-cover border-2 border-border"
                  width={512}
                  height={512}
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h1 className="text-3xl font-bold tracking-tight text-foreground h-10">
                  <Typewriter text="Aryaman Bohra." delay={80} />
                </h1>
                <div className="flex gap-2 mt-2">
                  <span className="tag-badge">B.TECH CSE</span>
                  <span className="tag-badge">AI/ML ENTHUSIAST</span>
                  <span className="tag-badge">FRONTEND DEV</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Enthusiastic B.Tech Computer Science student passionate about AI/ML and frontend development.
                  I build immersive web applications that bridge the gap between
                  engineering precision and beautiful interfaces.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <button onClick={() => downloadCV('pdf')} className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                    Download CV (PDF)
                  </button>
                  <button onClick={() => downloadCV('docx')} className="px-5 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm font-medium hover:bg-secondary transition-colors">
                    Download CV (DOCX)
                  </button>
                  <button onClick={() => onNavigate?.("projects")} className="px-5 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm font-medium hover:bg-secondary transition-colors">
                    View Projects
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="px-8 py-3 border-t border-border/50 flex justify-between text-xs text-muted-foreground">
            <span>Updated recently</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Open for opportunities
            </span>
          </div>
        </MacWindow>
      </div>

      {/* Desktop icons */}
      <div className="fixed right-6 top-16 flex flex-col gap-5 z-10">
        {[
          { icon: "📁", label: "Projects", id: "projects" },
          { icon: "📄", label: "Resume", id: "resume" },
          { icon: "✉️", label: "Contact", id: "contact" },
        ].map((item) => (
          <div key={item.label} onClick={() => onNavigate?.(item.id)} className="flex flex-col items-center cursor-pointer group">
            <div className="w-14 h-14 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
              {item.icon}
            </div>
            <span className="text-xs mt-1 font-medium text-foreground/80">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
