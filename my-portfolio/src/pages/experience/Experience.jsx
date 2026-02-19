import { createElement } from "react";
import { FiBookOpen, FiBriefcase } from "react-icons/fi";

const educationItems = [
  {
    title: "Class XII (Completed)",
    subtitle: "Academic",
    details: ["Completed higher secondary education"],
  },
  {
    title: "B.A. (Pursuing)",
    subtitle: "Undergraduate",
    details: ["Currently continuing graduation"],
  },
  {
    title: "Full Stack Web Development (Pursuing)",
    subtitle: "Technical Training",
    details: ["Hands-on learning with frontend and backend projects"],
  },
];

const workItems = [
  {
    title: "Open to Internship / Entry-Level Roles",
    subtitle: "Career Goal",
    details: [
      "Building practical portfolio projects",
      "Ready to contribute and learn in real teams",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <span className="experience-sticker experience-sticker-one" aria-hidden="true" />
      <span className="experience-sticker experience-sticker-two" aria-hidden="true" />
      <span className="experience-sticker experience-sticker-three" aria-hidden="true" />

      <div className="experience-header">
        <span className="experience-kicker">//</span>
        <h2 className="experience-title">EXPERIENCE</h2>
        <span className="experience-dot" aria-hidden="true" />
      </div>

      <div className="panel experience-panel">
        <div className="experience-grid">
          <div className="experience-column panel">
            <div className="experience-column-title">Education & Training</div>
            <div className="experience-timeline">
              {educationItems.map((item) => (
                <article key={item.title} className="experience-item panel">
                  <div className="experience-item-head">
                    <div className="experience-icon" aria-hidden="true">
                      {createElement(FiBookOpen)}
                    </div>
                    <div>
                      <div className="experience-date">{item.subtitle}</div>
                      <div className="experience-role">{item.title}</div>
                    </div>
                  </div>
                  <div className="experience-content">
                    {item.details.map((line) => (
                      <div key={line} className="experience-text">
                        {line}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="experience-column panel">
            <div className="experience-column-title">Work</div>
            <div className="experience-timeline">
              {workItems.map((item) => (
                <article key={item.title} className="experience-item panel">
                  <div className="experience-item-head">
                    <div className="experience-icon" aria-hidden="true">
                      {createElement(FiBriefcase)}
                    </div>
                    <div>
                      <div className="experience-date">{item.subtitle}</div>
                      <div className="experience-role">{item.title}</div>
                    </div>
                  </div>
                  <div className="experience-content">
                    {item.details.map((line) => (
                      <div key={line} className="experience-text">
                        {line}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
