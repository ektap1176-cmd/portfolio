import { createElement, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Services from "../pages/service/Services";
import TechStack from "../pages/techStack/TechStack";
import Experience from "../pages/experience/Experience";
import RecentWorks from "../pages/recentWorks/RecentWorks";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import Recommendation from "../pages/recommendation/Recommendation";

const sections = [
  { id: "home", Component: Home },
  { id: "about", Component: About },
  { id: "services", Component: Services },
  { id: "tech", Component: TechStack },
  { id: "experience", Component: Experience },
  { id: "works", Component: RecentWorks },
  { id: "blog", Component: Blog },
  { id: "recommend", Component: Recommendation },
  { id: "contact", Component: Contact },
];

const routes = [
  { path: "/", sectionId: "home" },
  { path: "/about", sectionId: "about" },
  { path: "/services", sectionId: "services" },
  { path: "/tech-stack", sectionId: "tech" },
  { path: "/experience", sectionId: "experience" },
  { path: "/works", sectionId: "works" },
  { path: "/blog", sectionId: "blog" },
  { path: "/contact", sectionId: "contact" },
];

const SectionedPage = ({ darkMode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const navEntry = performance.getEntriesByType("navigation")[0];
    const isReload =
      navEntry?.type === "reload" ||
      (performance.navigation && performance.navigation.type === 1);

    if (isReload && location.pathname !== "/") {
      navigate("/", { replace: true });
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    const match = routes.find((route) => route.path === location.pathname);
    const targetId = match ? match.sectionId : "home";
    const target = document.getElementById(targetId);

    if (!target) return;

    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.pathname]);

  return (
    <div>
      {sections.map(({ id, Component: SectionComponent }) => (
        <section key={id} id={id}>
          {createElement(SectionComponent, { darkMode })}
        </section>
      ))}
    </div>
  );
};

const AppRoutes = ({ darkMode }) => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<SectionedPage darkMode={darkMode} />}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;


