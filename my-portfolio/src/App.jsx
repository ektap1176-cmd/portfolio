import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Prism from "./backgrounds/Prism";
import DarkBg from "./backgrounds/DarkBg";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      {/* BACKGROUND (fixed) */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {darkMode ? <DarkBg /> : <Prism />}
      </div>

      {/* SIDEBAR */}
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* SCROLL CONTAINER */}
      <div
        style={{
         marginLeft: "90px",
    width: "calc(100% - 90px)",
    overflowX: "hidden",
    position: "relative",
    zIndex: 10,
        }}
      >
        <Home darkMode={darkMode} />
        <About darkMode={darkMode} />
      </div>
    </>
  );
}

export default App;
