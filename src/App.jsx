import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./sections/AboutMe/AboutMe";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Navbar from "./sections/Navbar/Navbar";
import WorkExperience from "./sections/WorkExperience/WorkExperience";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutMe />
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<WorkExperience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
