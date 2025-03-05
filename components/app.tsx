"use client";

import { useEffect } from "react";
import Maintenance from "./maintenance";
import Navbar from "./navbar";
import Header from "./header";
import Sidebars from "./sidebars";
import About from "./about";
import ExperienceSection from "./experience";
import MajorProjects from "./major-projects";
import MinorProjects from "./minor-projects";
import Contact from "./contact";
import Footer from "./footer";
import TopButton from "./top-button";
import "../styles/app.css";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isMaintenanceMode = false;

  if (isMaintenanceMode) {
    return (
      <div className="App">
        <Maintenance />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <TopButton />
        <Sidebars />
        <About />
        <ExperienceSection />
        <MajorProjects />
        <MinorProjects />
        <Contact />
        <Footer />
      </div>
    );
  }
}
