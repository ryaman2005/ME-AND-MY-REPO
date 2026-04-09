import MacWindow from "./MacWindow";
import avatarImg from "@/assets/avatar.jpg";
import { FileText, Mail, MapPin, Link as LinkIcon, Download } from "lucide-react";

const groupedSkills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", level: 90 },
      { name: "Tailwind CSS", level: 85 }
    ]
  },
  {
    category: "Backend & DB",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 85 },
      { name: "MySQL", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "C/C++", level: 80 }
    ]
  },
  {
    category: "Tools & ML",
    items: [
      { name: "NumPy & Pandas", level: 80 },
      { name: "Scikit-learn", level: 75 },
      { name: "Git/GitHub", level: 85 }
    ]
  }
];

const experience = [
  {
    title: "B.Tech in Computer Science",
    company: "JK Lakshmipat University, Jaipur",
    period: "07/2023 — 07/2027",
    active: true,
    bullets: [
      "Current CGPA: 7.5",
      "Coursework in Data Structures, Algorithms, Operating Systems.",
    ],
  },
  {
    title: "High School Education",
    company: "Euro International School, Rewari",
    period: "2021 — 2023",
    active: false,
    bullets: [
      "12th Standard: 80%",
      "10th Standard: 90%",
    ],
  },
  {
    title: "Achievements & Highlights",
    company: "Various",
    period: "2024",
    active: false,
    bullets: [
      "Solved 100+ problems on LeetCode",
      "Runner-up in Photography Competition (2024)",
      "Certifications: Machine Learning & Data Structures (Coursera)",
    ],
  },
];

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

const ResumePage = () => {
  const downloadCV = (type: 'pdf' | 'docx') => {
    window.open(`${API_URL}/api/download-cv/${type}`, '_blank');
  };

  return (
    <div className="min-h-[calc(100vh-7rem)] p-6 pb-24 flex justify-center overflow-auto">
      <div className="w-full max-w-4xl animate-scale-up" style={{ opacity: 0, animationDelay: "0.1s" }}>
        <MacWindow title="Resume" icon={<FileText className="w-4 h-4" />}>
          <div className="flex flex-col md:flex-row">
            {/* Left sidebar */}
            <div className="md:w-72 p-6 md:border-r border-border/50">
              <div className="flex flex-col items-center md:items-start">
                <img
                  src={avatarImg}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover border-2 border-border mb-4"
                  width={512}
                  height={512}
                />
                <h2 className="text-xl font-bold">Aryaman Bohra</h2>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mt-1">
                  B.TECH CSE STUDENT
                </p>
              </div>

              <div className="mt-6 space-y-3 text-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Contact</p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>baryaman022@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <LinkIcon className="w-4 h-4" />
                  <span>github.com/ryaman2005</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Bhiwadi, India</span>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Core Skills</p>
                <div className="space-y-4">
                  {groupedSkills.map(group => (
                    <div key={group.category}>
                      <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-1.5">{group.category}</p>
                      <div className="space-y-2">
                        {group.items.map(skill => (
                          <div key={skill.name} className="group relative">
                            <div className="flex justify-between text-xs mb-1">
                              <span>{skill.name}</span>
                              <span className="text-muted-foreground text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">{skill.level}% Proficiency</span>
                            </div>
                            <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary transition-all duration-1000 ease-out animate-pulse"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <button onClick={() => downloadCV('pdf')} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
                  <Download className="w-4 h-4" />
                  Download Resume (PDF)
                </button>
                <button onClick={() => downloadCV('docx')} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card text-foreground font-medium text-sm hover:bg-secondary transition-colors">
                  <FileText className="w-4 h-4" />
                  Download Resume (DOCX)
                </button>
              </div>
            </div>

            {/* Right content */}
            <div className="flex-1 p-6">
              <div className="bg-secondary/50 rounded-xl p-5 mb-6">
                <p className="text-sm leading-relaxed">
                  B.Tech Computer Science student with hands-on experience building
                  scalable web applications. Focused on the intersection of{" "}
                  <strong>Clean Engineering</strong> and <strong>Beautiful Design</strong>.
                </p>
              </div>

              <h3 className="text-lg font-semibold mb-4">Education & Achievements</h3>

              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.title} className="flex gap-3">
                    <div className="flex flex-col items-center pt-1">
                      <div className={`timeline-dot ${exp.active ? "" : "inactive"}`} />
                      <div className="w-px flex-1 bg-border mt-2" />
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-sm">{exp.title}</h4>
                          <p className="text-xs text-muted-foreground">{exp.company}</p>
                        </div>
                        <span className="tag-badge text-[10px]">{exp.period}</span>
                      </div>
                      <ul className="mt-2 space-y-1">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                            <span className="mt-1">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MacWindow>
      </div>
    </div>
  );
};

export default ResumePage;
