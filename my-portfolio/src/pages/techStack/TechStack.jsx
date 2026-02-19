const techItems = [
  { label: "HTML5", icon: "HTML", track: "Core" },
  { label: "CSS3", icon: "CSS", track: "Core" },
  { label: "JavaScript", icon: "JS", track: "Core" },
  { label: "React.js", icon: "RE", track: "Frontend" },
  { label: "Node.js", icon: "ND", track: "Backend" },
  { label: "Express.js", icon: "EX", track: "Backend" },
  { label: "MongoDB", icon: "DB", track: "Database" },
  { label: "MySQL", icon: "SQL", track: "Database" },
  { label: "Git", icon: "GIT", track: "Tools" },
  { label: "GitHub", icon: "GH", track: "Tools" },
  { label: "Tailwind CSS", icon: "TW", track: "Frontend" },
  { label: "Figma", icon: "FG", track: "Design" },
];

const TechStack = () => {
  return (
    <section id="tech" className="tech-stack-section">
      <span className="tech-stack-sticker tech-stack-sticker-one" aria-hidden="true" />
      <span className="tech-stack-sticker tech-stack-sticker-two" aria-hidden="true" />
      <span className="tech-stack-sticker tech-stack-sticker-three" aria-hidden="true" />

      <div className="tech-stack-header">
        <span className="tech-stack-kicker">//</span>
        <h2 className="tech-stack-title">TECH SKILLS</h2>
        <span className="tech-stack-dot" aria-hidden="true" />
      </div>

      <div className="panel tech-stack-panel">
        <div className="tech-stack-meta">
          <span className="tech-stack-meta-chip panel">12 Technologies</span>
          <span className="tech-stack-meta-chip panel">Frontend + Backend + Tools</span>
        </div>

        <div className="tech-stack-grid">
          {techItems.map((item) => (
            <div key={item.label} className="panel tech-stack-card">
              <div className="tech-stack-card-top">
                <div className="tech-stack-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <span className="tech-stack-track">{item.track}</span>
              </div>
              <div className="tech-stack-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
