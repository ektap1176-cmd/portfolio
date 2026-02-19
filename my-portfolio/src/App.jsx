import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/layout/Sidebar";
import AppRoutes from "./routes/AppRoutes";
import Prism from "./backgrounds/Prism";
import DarkBg from "./backgrounds/DarkBg";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const targets = document.querySelectorAll(
      ".panel, .home-sticker, .about-stat, .works-card, .blog-card, .tech-stack-card, .experience-item, .recommend-card"
    );
    if (!targets.length) return;

    targets.forEach((node, index) => {
      node.classList.add("motion-ready");
      node.style.transitionDelay = `${(index % 9) * 55}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("motion-in");
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -9% 0px" }
    );

    targets.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app" data-theme={darkMode ? "dark" : "light"}>
      {/* BACKGROUND (fixed) */}
      <div className="app-background" aria-hidden="true">
        {darkMode ? <DarkBg /> : <Prism />}
        <div className="bg-ambient">
          <span className="bg-blob bg-blob-a" />
          <span className="bg-blob bg-blob-b" />
          <span className="bg-blob bg-blob-c" />
        </div>
      </div>

      {/* SIDEBAR */}
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* MAIN CONTENT */}
      <main className="app-content">
        <AppRoutes darkMode={darkMode} />
      </main>
    </div>
  );
}

export default App;
