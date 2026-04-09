import { useState } from "react";
import MacMenuBar from "../components/MacMenuBar";
import Dock from "../components/Dock";
import HomePage from "../components/HomePage";
import ProjectsPage from "../components/ProjectsPage";
import ResumePage from "../components/ResumePage";
import ContactPage from "../components/ContactPage";
import TerminalPage from "../components/TerminalPage";
import ConnectionsPage from "../components/ConnectionsPage";
import desktopBg from "@/assets/desktop-bg.jpg";

const pages: Record<string, React.FC<any>> = {
  home: HomePage,
  projects: ProjectsPage,
  resume: ResumePage,
  contact: ContactPage,
  terminal: TerminalPage,
  connections: ConnectionsPage,
};

const Index = () => {
  const [activePage, setActivePage] = useState("home");
  const ActiveComponent = pages[activePage];

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Desktop background */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${desktopBg})` }}
      />

      <MacMenuBar />

      <div className="flex-1 overflow-auto">
        <ActiveComponent onNavigate={setActivePage} />
      </div>

      <Dock activePage={activePage} onNavigate={setActivePage} />
    </div>
  );
};

export default Index;
