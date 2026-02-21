import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/layout/Sidebar";
import AppRoutes from "./routes/AppRoutes";
import Prism from "./backgrounds/Prism";
import DarkBg from "./backgrounds/DarkBg";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLiteMode, setIsLiteMode] = useState(false);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const smallScreenQuery = window.matchMedia("(max-width: 768px)");

    const updateLiteMode = () => {
      const saveData = Boolean(navigator.connection?.saveData);
      const lowCpu = typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 4;
      setIsLiteMode(reducedMotionQuery.matches || smallScreenQuery.matches || saveData || lowCpu);
    };

    updateLiteMode();

    reducedMotionQuery.addEventListener?.("change", updateLiteMode);
    smallScreenQuery.addEventListener?.("change", updateLiteMode);
    reducedMotionQuery.addListener?.(updateLiteMode);
    smallScreenQuery.addListener?.(updateLiteMode);

    return () => {
      reducedMotionQuery.removeEventListener?.("change", updateLiteMode);
      smallScreenQuery.removeEventListener?.("change", updateLiteMode);
      reducedMotionQuery.removeListener?.(updateLiteMode);
      smallScreenQuery.removeListener?.(updateLiteMode);
    };
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll(
      ".panel, .home-sticker, .about-stat, .works-card, .blog-card, .tech-stack-card, .experience-item, .recommend-card"
    );
    if (!targets.length) return;

    if (isLiteMode) {
      targets.forEach((node) => {
        node.classList.remove("motion-ready");
        node.classList.add("motion-in");
        node.style.transitionDelay = "0ms";
      });
      return;
    }

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
  }, [isLiteMode]);

  return (
    <div className="app" data-theme={darkMode ? "dark" : "light"} data-performance={isLiteMode ? "lite" : "full"}>
      {/* BACKGROUND (fixed) */}
      <div className="app-background" aria-hidden="true">
        {isLiteMode ? (
          <div className="app-background-lite" />
        ) : (
          <>
            {darkMode ? <DarkBg /> : <Prism />}
            <div className="bg-ambient">
              <span className="bg-blob bg-blob-a" />
              <span className="bg-blob bg-blob-b" />
              <span className="bg-blob bg-blob-c" />
            </div>
          </>
        )}
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
