import MacWindow from "./MacWindow";
import { Github, Linkedin, Instagram, ExternalLink, MessageCircle } from "lucide-react";

const connections = [
  {
    name: "GitHub",
    username: "@ryaman2005",
    icon: Github,
    description: "Source code, contributions and side projects.",
    link: "https://github.com/ryaman2005",
    color: "bg-zinc-800"
  },
  {
    name: "LinkedIn",
    username: "aryaman-bohra",
    icon: Linkedin,
    description: "Professional networking and career updates.",
    link: "https://www.linkedin.com/in/aryaman-bohra/",
    color: "bg-blue-600"
  },
  {
    name: "Instagram",
    username: "@aryamanbohra11",
    icon: Instagram,
    description: "Personal life, travel and captures.",
    link: "https://www.instagram.com/aryamanbohra11/",
    color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500"
  },
];

const ConnectionsPage = () => {
  return (
    <div className="min-h-[calc(100vh-7rem)] p-6 pb-24 flex items-center justify-center overflow-auto">
      <div className="w-full max-w-2xl animate-scale-up">
        <MacWindow title="Find Me At">
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Connections.</h2>
              <p className="text-muted-foreground text-sm">Where engineering curiosity meets social exploration.</p>
            </div>

            <div className="grid gap-4">
              {connections.map((social, i) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl border border-border hover:bg-secondary/50 transition-all duration-300 hover:border-primary/50"
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                >
                  <div className={`w-12 h-12 rounded-lg ${social.color} flex items-center justify-center text-white`}>
                    <social.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5 font-semibold text-sm">
                      {social.name}
                      <span className="text-xs text-muted-foreground font-normal ml-auto flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Follow <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{social.username}</p>
                    <p className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                      {social.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5" />
                DMs are open
              </span>
              <span>Available globally</span>
            </div>
          </div>
        </MacWindow>
      </div>
    </div>
  );
};

export default ConnectionsPage;
