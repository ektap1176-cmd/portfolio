const techItems = [
  { label: "HTML5", icon: "HTML" },
  { label: "CSS3", icon: "CSS" },
  { label: "JavaScript", icon: "JS" },
  { label: "React.js", icon: "RE" },
  { label: "Node.js", icon: "ND" },
  { label: "Express.js", icon: "EX" },
  { label: "MongoDB", icon: "DB" },
  { label: "MySQL", icon: "SQL" },
  { label: "Git", icon: "GIT" },
  { label: "GitHub", icon: "GH" },
  { label: "Tailwind CSS", icon: "TW" },
  { label: "Figma", icon: "FG" },
];

const TechStack = () => {
  return (
    <section id="tech" className="tech-stack-section">
      <div className="panel tech-stack-panel">
        <div className="tech-stack-header">
          <span className="tech-stack-kicker">//</span>
          <h2 className="tech-stack-title">MY TECH STACK</h2>
          <span className="tech-stack-dot" aria-hidden="true" />
        </div>

        <div className="tech-stack-grid">
          {techItems.map((item) => (
            <div key={item.label} className="panel tech-stack-card">
              <div className="tech-stack-icon" aria-hidden="true">
                {item.icon}
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
