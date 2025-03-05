"use client";

import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/assets/icons";
import Link from "next/link";
import "../styles/footer.css";

export default function Footer() {
  const githubLink = "https://github.com/ani1609";
  const discordLink = "https://discordapp.com/users/754188469764358264";
  const linkedinLink =
    "https://www.linkedin.com/in/ankit-kumar-chowdhury-1b1690218";
  const instagramLink = "https://www.instagram.com/ankit.chdry/";
  const twitterLink = "https://twitter.com/AnkitCh03046966";

  const handleLinkClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <section className="footer_container">
      <ul>
        <li onClick={() => handleLinkClick(githubLink)}>
          <GithubIcon />
        </li>
        <li onClick={() => handleLinkClick(discordLink)}>
          <GithubIcon />
        </li>
        <li onClick={() => handleLinkClick(linkedinLink)}>
          <LinkedinIcon />
        </li>
        <li onClick={() => handleLinkClick(instagramLink)}>
          <InstagramIcon />
        </li>
        <li onClick={() => handleLinkClick(twitterLink)}>
          <TwitterIcon />
        </li>
      </ul>

      <p>
        Designed by
        <Link
          href="https://github.com/bchiang7"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Brittany Chiang{" "}
        </Link>
        & Built by
        <Link
          href="https://github.com/ani1609/resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Ankit Kr. Chowdhury
        </Link>
      </p>
    </section>
  );
}
