import { createElement, useState } from "react";
import {
  FaEnvelope,
  FaFolderOpen,
  FaGraduationCap,
  FaHouse,
  FaBars,
  FaMoon,
  FaSun,
  FaToolbox,
  FaUser,
  FaBriefcase,
  FaBookOpen,
  FaXmark,
} from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", Icon: FaHouse, sectionId: "home" },
  { to: "/about", label: "About", Icon: FaUser, sectionId: "about" },
  { to: "/services", label: "Services", Icon: FaBriefcase, sectionId: "services" },
  { to: "/tech-stack", label: "Tech Stack", Icon: FaToolbox, sectionId: "tech" },
  { to: "/experience", label: "Experience", Icon: FaGraduationCap, sectionId: "experience" },
  { to: "/works", label: "Recent Works", Icon: FaFolderOpen, sectionId: "works" },
  { to: "/blog", label: "Blog", Icon: FaBookOpen, sectionId: "blog" },
  { to: "/contact", label: "Contact", Icon: FaEnvelope, sectionId: "contact" },
];

const Sidebar = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const baseNavItemStyle = {
    width: "48px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "18px",
    color: "inherit",
    border: darkMode ? "1px solid #2a3a5d" : "1px solid #ccd5ea",
    boxShadow: darkMode ? "0 10px 20px rgba(2, 6, 23, 0.35)" : "0 8px 16px rgba(24, 39, 75, 0.14)",
    background: darkMode ? "rgba(17, 27, 51, 0.7)" : "rgba(248, 250, 255, 0.75)",
  };

  const activeNavItemStyle = {
    outline: darkMode ? "2px solid #7f9ad9" : "2px solid #8aa2dc",
    backgroundColor: darkMode ? "#273554" : "#eaf0ff",
  };

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) return;
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <>
      <button
        className="sidebar-hamburger"
        type="button"
        onClick={() => setIsMobileOpen((prev) => !prev)}
        aria-label={isMobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileOpen}
        aria-controls="primary-sidebar"
      >
        {isMobileOpen ? createElement(FaXmark) : createElement(FaBars)}
      </button>

      <aside
        id="primary-sidebar"
        className={`sidebar ${isMobileOpen ? "sidebar-mobile-open" : ""}`}
        data-theme={darkMode ? "dark" : "light"}
        style={{
          width: "96px",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 20,
          background: darkMode
            ? "linear-gradient(180deg, rgba(11,18,37,0.94), rgba(12,26,52,0.92))"
            : "linear-gradient(180deg, rgba(247, 241, 227, 0.94), rgba(241, 246, 255, 0.92))",
          color: darkMode ? "#fff" : "#000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRight: darkMode ? "1px solid #334872" : "1px solid #ced7ea",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            marginTop: "20px",
            marginBottom: "40px",
            fontWeight: "900",
            fontSize: "18px",
            border: darkMode ? "2px solid #8ca0d4" : "2px solid #1a2040",
            background: darkMode ? "#1d2c4d" : "#f7db4f",
            boxShadow: darkMode ? "5px 5px 0 #030712" : "5px 5px 0 #1a2040",
            borderRadius: "10px",
            padding: "10px 11px",
          }}
        >
          EP
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
                } else {
                  setTimeout(() => scrollToSection(item.sectionId), 0);
                }
                setIsMobileOpen(false);
              }}
            >
              {createElement(item.Icon)}
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
          {darkMode ? createElement(FaSun) : createElement(FaMoon)}
        </button>
      </aside>

      {isMobileOpen ? <button className="sidebar-backdrop" type="button" onClick={() => setIsMobileOpen(false)} aria-label="Close menu" /> : null}
    </>
  );
};

export default Sidebar;
