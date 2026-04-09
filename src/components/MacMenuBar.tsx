import { useState, useEffect } from "react";
import { Search, Wifi, Battery, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const MacMenuBar = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const dateStr = now.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className="glass-menubar h-7 flex items-center justify-between px-4 text-xs font-medium select-none z-50 relative">
      <div className="flex items-center gap-5">
        <span className="font-semibold">Portfolio OS</span>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Go</span>
        <span>Window</span>
        <span>Help</span>
      </div>
      <div className="flex items-center gap-3 text-muted-foreground">
        <button 
          onClick={() => setTheme(isDark ? "light" : "dark")} 
          className="hover:text-foreground transition-colors outline-none"
        >
          {!mounted ? <div className="w-3.5 h-3.5" /> : isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
        </button>
        <Battery className="w-4 h-4" />
        <Wifi className="w-3.5 h-3.5" />
        <Search className="w-3.5 h-3.5" />
        <span className="text-foreground">{dateStr} {timeStr}</span>
      </div>
    </div>
  );
};

export default MacMenuBar;
