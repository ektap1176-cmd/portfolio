import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

const AppRoutes = ({ darkMode }) => {
  return (
    <Routes>
      <Route path="/" element={<Home darkMode={darkMode} />} />
      <Route path="/about" element={<About darkMode={darkMode} />} />
    </Routes>
  );
};

export default AppRoutes;
