import { createElement } from "react";
import { FiAward, FiCode, FiLayers, FiUsers } from "react-icons/fi";

const skillChips = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git & GitHub",
  "Responsive UI",
];

const stats = [
  { value: "01+", label: "Years Learning Web Dev", Icon: FiAward },
  { value: "15+", label: "Practice Projects", Icon: FiCode },
  { value: "10+", label: "Technologies Used", Icon: FiLayers },
  { value: "01", label: "Major Training Program", Icon: FiUsers },
];

const About = () => {
  return (
    <section id="about" className="about-section retro-surface">
      <div className="about-header">
        <span className="about-kicker">//</span>
        <h2 className="about-title">ABOUT ME</h2>
        <span className="about-dot" aria-hidden="true" />
      </div>

      <div className="about-main-grid">
        <aside className="about-left">
          <div className="about-photo panel">EP</div>
          <button type="button" className="about-cv panel">
            DOWNLOAD CV
          </button>
        </aside>

        <article className="about-copy panel">
          <p>
            I am Ekta Poonia, a B.A. student and aspiring Full-Stack Web Developer.
            I am currently pursuing Full Stack Web Development and building projects
            consistently to improve real-world development skills.
          </p>
          <p>
            I focus on writing clean frontend code with React and building backend
            APIs with Node.js and Express. My goal is to start with internships or
            entry-level roles and grow as a reliable software developer.
          </p>

          <h3>Expertise Areas</h3>
          <div className="about-chip-grid">
            {skillChips.map((chip) => (
              <span key={chip} className="about-chip panel">
                {chip}
              </span>
            ))}
          </div>
        </article>
      </div>

      <div className="about-stats">
        {stats.map(({ value, label, Icon }) => (
          <article key={label} className="about-stat panel">
            <div className="about-stat-icon" aria-hidden="true">
              {createElement(Icon)}
            </div>
            <p className="about-stat-value">{value}</p>
            <p className="about-stat-label">{label}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default About;
