import MacWindow from "./MacWindow";
import rentkaroImg from "@/assets/rentkaro.png";
import dsaChatbotImg from "@/assets/dsa_chatbot.png";
import proteinCnnImg from "@/assets/protein_cnn.png";

const projects = [
  {
    name: "RentKaro (Rental Platform)",
    desc: "Premium Trust-Centric MERN Platform",
    image: rentkaroImg,
    tech: ["React.js", "Node.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/ryaman2005",
    demo: "#"
  },
  {
    name: "DSA-CHATBOT",
    desc: "RAG-based AI Bot",
    image: dsaChatbotImg,
    tech: ["Ollama", "Mistral", "Gen AI"],
    github: "https://github.com/ryaman2005",
    demo: "#"
  },
  {
    name: "Protein Structure CNN",
    desc: "Secondary Structure Prediction",
    image: proteinCnnImg,
    tech: ["Python", "CNN", "Deep Learning"],
    github: "https://github.com/ryaman2005",
    demo: "https://drive.google.com/drive/folders/1TU6n1Rm0rvOrYz8F83Kzm_Kar0wayRpM"
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-[calc(100vh-7rem)] p-6 pb-24 overflow-auto">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-up" style={{ opacity: 0, animationDelay: "0.1s" }}>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Selected Works 2024
            </span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight">
            <span className="text-primary">Projects.</span>
          </h1>
          <p className="mt-3 text-muted-foreground max-w-lg text-sm leading-relaxed">
            Exploring the intersection of high-fidelity interfaces and functional
            engineering through a curated collection of projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="project-card animate-fade-up"
              style={{ opacity: 0, animationDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={640}
                  height={512}
                />
              </div>
              <div className="p-4 flex flex-col gap-3">
                <div>
                  <h3 className="font-semibold text-sm">{project.name}</h3>
                  <p className="text-xs text-muted-foreground">{project.desc}</p>
                </div>
                <div className="flex gap-1.5 flex-wrap">
                  {project.tech.map(t => <span key={t} className="text-[10px] bg-secondary px-2 py-0.5 rounded-full">{t}</span>)}
                </div>
                <div className="flex gap-2 mt-2 pt-3 border-t border-border/50">
                   <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 text-center py-1.5 text-xs bg-secondary hover:bg-secondary/80 rounded-md font-medium transition-colors">GitHub</a>
                   <a href={project.demo} target="_blank" rel="noreferrer" className="flex-1 text-center py-1.5 text-xs bg-primary text-primary-foreground hover:opacity-90 rounded-md font-medium transition-colors">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
