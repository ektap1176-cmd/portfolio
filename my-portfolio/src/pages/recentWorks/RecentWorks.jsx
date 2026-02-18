import { useMemo, useState } from "react";
import ecommerceImage from "../../assets/ecommerce.png";
import rythmixImage from "../../assets/rythmix.png";
import formImage from "../../assets/form.png";

const filters = ["Everything", "Web Apps", "UI Design"];

const projects = [
  {
    title: "Personal Portfolio",
    subtitle:
      "Multi-section developer portfolio with dark mode, animated UI, and project showcase.",
    category: "Web Apps",
    tag: "React",
    image: null,
    url: "https://github.com/ektap1176-cmd/portfolio",
  },
  {
    title: "Exclusive E-Commerce",
    subtitle:
      "Responsive e-commerce landing page with product highlights, sections, and clean UI structure.",
    category: "Web Apps",
    tag: "React",
    image: ecommerceImage,
    url: "https://github.com/ektap1176-cmd/ecommerce-",
  },
  {
    title: "RythmiX Music Player",
    subtitle:
      "Interactive music app interface with playlist views, controls, and reusable component layout.",
    category: "Web Apps",
    tag: "React",
    image: rythmixImage,
    url: "https://github.com/ektap1176-cmd/myRythmiX",
  },
  {
    title: "Create Account Form",
    subtitle:
      "Modern sign-up form UI focused on validation-ready structure and user-friendly flow.",
    category: "UI Design",
    tag: "UI",
    image: formImage,
    url: "https://github.com/ektap1176-cmd/Form",
  },
];

const RecentWorks = () => {
  const [activeFilter, setActiveFilter] = useState("Everything");
  const [brokenImages, setBrokenImages] = useState({});

  const visibleProjects = useMemo(() => {
    if (activeFilter === "Everything") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="works" className="works-section">
      <div className="panel works-panel">
        <div className="works-header">
          <span className="works-kicker">//</span>
          <h2 className="works-title">RECENT WORKS</h2>
          <span className="works-dot" aria-hidden="true" />
        </div>

        <div className="works-filters">
          {filters.map((filterName) => (
            <button
              key={filterName}
              type="button"
              className={`works-filter ${activeFilter === filterName ? "active" : ""}`}
              onClick={() => setActiveFilter(filterName)}
            >
              {filterName}
            </button>
          ))}
        </div>

        <div className="works-grid">
          {visibleProjects.map((project) => (
            <article key={project.title} className="panel works-card">
              <div
                className={`works-preview ${brokenImages[project.title] ? "no-image" : ""}`}
              >
                <span className="works-chip">{project.tag}</span>
                <a
                  className="works-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title}`}
                  title="GitHub repository"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M10.6 13.4a1 1 0 0 1 0-1.4l3.4-3.4a3 3 0 1 1 4.2 4.2l-2 2a3 3 0 0 1-4.2 0 1 1 0 1 1 1.4-1.4 1 1 0 0 0 1.4 0l2-2a1 1 0 0 0-1.4-1.4L12 13.4a1 1 0 0 1-1.4 0Z" />
                    <path d="M13.4 10.6a1 1 0 0 1 0 1.4L10 15.4a3 3 0 0 1-4.2-4.2l2-2a3 3 0 0 1 4.2 0 1 1 0 0 1-1.4 1.4 1 1 0 0 0-1.4 0l-2 2a1 1 0 0 0 1.4 1.4l3.4-3.4a1 1 0 0 1 1.4 0Z" />
                  </svg>
                </a>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="works-image"
                    loading="lazy"
                    onError={() =>
                      setBrokenImages((prev) => ({ ...prev, [project.title]: true }))
                    }
                    style={{ display: brokenImages[project.title] ? "none" : "block" }}
                  />
                ) : null}
                <span className="works-preview-title">{project.title}</span>
              </div>
              <div className="works-content">
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
