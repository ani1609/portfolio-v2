"use client";

import { useEffect } from "react";
import "../styles/header.css";

export default function Header() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <header>
      <h4>Hi, my name is </h4>
      <h1>Ankit Kr. Chowdhury.</h1>
      <h2>I build things for the web.</h2>
      <p>
        Enthusiastic student web developer with a keen interest in learning and
        applying front-end and back-end technologies. Dedicated to honing skills
        creating web solutions that captivate users solve real-world challenges.
      </p>
      <a href="mailto:ankitparallax@gmail.com">Hire me!</a>
    </header>
  );
}
