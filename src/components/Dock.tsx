import { Home, FolderOpen, FileText, Mail, Settings } from "lucide-react";

interface DockProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const dockItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "projects", icon: FolderOpen, label: "Projects" },
  { id: "resume", icon: FileText, label: "Resume" },
  { id: "contact", icon: Mail, label: "Contact" },
  { id: "terminal", icon: Settings, label: "Terminal" },
];

const Dock = ({ activePage, onNavigate }: DockProps) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="glass-dock rounded-2xl px-3 py-2 flex items-center gap-2">
        {dockItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`dock-icon ${activePage === item.id ? "active" : ""}`}
            title={item.label}
          >
            <item.icon className="w-5 h-5" />
          </button>
        ))}
      </div>
      {/* Dot indicator */}
      <div className="flex justify-center mt-1">
        <div className="w-1 h-1 rounded-full bg-foreground/30" />
      </div>
    </div>
  );
};

export default Dock;
