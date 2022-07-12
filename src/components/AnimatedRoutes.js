import { Route, Routes, useLocation } from "react-router-dom";
import Banner from "./banner/Banner";
import Project from "./project/Project";
import { AnimatePresence } from "framer-motion";
import About from "./about/About";
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Banner />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
