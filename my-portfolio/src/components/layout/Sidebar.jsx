import { useNavigate } from "react-router-dom";

const Sidebar = ({ darkMode, setDarkMode }) => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      style={{
        width: "90px",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        backgroundColor: darkMode ? "#0f172a" : "#f5f1e8",
        color: darkMode ? "#ffffff" : "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRight: darkMode ? "1px solid #1e293b" : "1px solid #ddd",
        zIndex: 20,
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
          cursor: "pointer",
        }}
        onClick={() => scrollToSection("home")}
      >
        KW
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "28px",
          flex: 1,
          fontSize: "22px",
        }}
      >
        {/* HOME */}
        <span
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection("home")}
        >
          🏠
        </span>

        {/* ABOUT */}
        <span
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection("about")}
        >
          👤
        </span>

        <span>💼</span>
        <span>🎓</span>
        <span>📦</span>
        <span>💬</span>
      </div>

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
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </aside>
  );
};

export default Sidebar;
