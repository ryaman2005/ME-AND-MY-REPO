import { ReactNode } from "react";

interface MacWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

const MacWindow = ({ title, children, className = "", icon }: MacWindowProps) => {
  return (
    <div className={`glass-window rounded-xl overflow-hidden ${className}`}>
      {/* Title bar */}
      <div className="flex items-center h-11 px-4 gap-2 border-b border-border/50">
        <div className="flex items-center gap-1.5">
          <div className="mac-dot mac-dot-red" />
          <div className="mac-dot mac-dot-yellow" />
          <div className="mac-dot mac-dot-green" />
        </div>
        <div className="flex-1 flex items-center justify-center gap-2">
          {icon && <span className="text-muted-foreground">{icon}</span>}
          <span className="text-sm font-medium text-muted-foreground">{title}</span>
        </div>
        <div className="w-14" /> {/* Balance the dots */}
      </div>
      {/* Content */}
      <div>{children}</div>
    </div>
  );
};

export default MacWindow;
