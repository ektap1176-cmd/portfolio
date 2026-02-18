import { createElement } from "react";
import { FiCode, FiLayout, FiServer } from "react-icons/fi";

const serviceItems = [
  {
    title: "WEB DEVELOPMENT",
    Icon: FiCode,
    description:
      "I build responsive and functional web applications using modern frontend and backend technologies.",
    className: "services-card-yellow",
  },
  {
    title: "FRONTEND WITH REACT",
    Icon: FiLayout,
    description:
      "I create clean, reusable React components and user-friendly interfaces with strong focus on responsiveness.",
    className: "services-card-teal",
  },
  {
    title: "BACKEND & APIs",
    Icon: FiServer,
    description:
      "I develop REST APIs with Node.js and Express, and connect apps with MongoDB for practical project workflows.",
    className: "services-card-pink",
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section retro-surface">
      <div className="services-header">
        <span className="services-kicker">//</span>
        <h2 className="services-title">SERVICES</h2>
        <span className="services-dot" aria-hidden="true" />
      </div>

      <div className="services-grid">
        {serviceItems.map(({ title, Icon, description, className }) => (
          <article key={title} className={`services-card panel ${className}`}>
            <div className="services-icon" aria-hidden="true">
              {createElement(Icon)}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
