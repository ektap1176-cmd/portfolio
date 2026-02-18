import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", shortLabel: "🏠", sectionId: "home" },
  { to: "/about", label: "About", shortLabel: "👤", sectionId: "about" },
  { to: "/services", label: "Services", shortLabel: "💼", sectionId: "services" },
  { to: "/tech-stack", label: "Tech Stack", shortLabel: "🧰", sectionId: "tech" },
  { to: "/experience", label: "Experience", shortLabel: "🎓", sectionId: "experience" },
  { to: "/works", label: "Recent Works", shortLabel: "🗂️", sectionId: "works" },
];

const Sidebar = ({ darkMode, setDarkMode }) => {
  const location = useLocation();

  const baseNavItemStyle = {
    width: "44px",
    height: "44px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "16px",
    color: "inherit",
  };

  const activeNavItemStyle = {
    outline: darkMode ? "2px solid #334155" : "2px solid #cbd5f5",
    backgroundColor: darkMode ? "#1e293b" : "#e8eaf6",
  };

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) return;
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <aside
      className="sidebar"
      data-theme={darkMode ? "dark" : "light"}
      style={{
        width: "90px",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 20,
        backgroundColor: darkMode ? "#0f172a" : "#f5f1e8",
        color: darkMode ? "#fff" : "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRight: darkMode ? "1px solid #1e293b" : "1px solid #ddd",
      }}
    >
      <div
        style={{
          marginTop: "20px",
          marginBottom: "40px",
          fontWeight: "900",
          fontSize: "18px",
          border: "2px solid currentColor",
          padding: "10px",
        }}
      >
        KW
      </div>

      <nav
        aria-label="Primary"
        style={{ display: "flex", flexDirection: "column", gap: "18px", flex: 1 }}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            aria-label={item.label}
            className="sidebar-nav-link"
            style={({ isActive }) => ({
              ...baseNavItemStyle,
              ...(isActive ? activeNavItemStyle : null),
            })}
            onClick={(event) => { 
              if (location.pathname === item.to) {
                event.preventDefault();
                scrollToSection(item.sectionId);
                return;
              }
              setTimeout(() => scrollToSection(item.sectionId), 0);
            }}
          >
            {item.shortLabel}
          </NavLink>
        ))}
      </nav>

      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          marginBottom: "20px",
          fontSize: "20px",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "inherit",
        }}
        aria-label="Toggle theme"
        title="Toggle theme"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </aside>
  );
};

export default Sidebar;
