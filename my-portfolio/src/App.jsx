import { useState } from "react";
import "./App.css";
import Sidebar from "./components/layout/Sidebar";
import AppRoutes from "./routes/AppRoutes";
import Prism from "./backgrounds/Prism";
import DarkBg from "./backgrounds/DarkBg";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="app" data-theme={darkMode ? "dark" : "light"}>
      {/* BACKGROUND (fixed) */}
      <div className="app-background" aria-hidden="true">
        {darkMode ? <DarkBg /> : <Prism />}
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
