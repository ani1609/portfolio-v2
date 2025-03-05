"use client";

import { useRef, useEffect } from "react";
import "../styles/contact.css";

export default function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showContact");
      }
    }, options);

    const currentContactRef = contactRef.current;

    if (currentContactRef) observer.observe(currentContactRef);

    return () => {
      if (currentContactRef) observer.unobserve(currentContactRef);
    };
  }, []);

  return (
    <section className="contact_container" ref={contactRef}>
      <h4>04.</h4>
      <h1>Get In Touch</h1>
      <p>
        Feel free to reach out to me through the contact button below. I&apos;m
        excited to connect and discuss any web development opportunities or
        projects you have in mind. Let&apos;s build something great together!
      </p>
      <a href="mailto:ankitparallax@gmail.com">Let&apos;s Connect</a>
    </section>
  );
}
