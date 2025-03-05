"use client";

import { useState, useEffect } from "react";
import {
  GithubIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/assets/icons";
import Link from "next/link";
import "../styles/sidebars.css";

export default function Sidebars() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 2450);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {shouldRender && (
        <ul className="left_bar">
          <li className="github hover_effect">
            <Link
              href="https://github.com/ani1609"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </Link>
          </li>
          <li className="discord hover_effect">
            <Link
              href="https://discordapp.com/users/754188469764358264"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </Link>
          </li>
          <li className="linkedin hover_effect">
            <Link
              href="https://www.linkedin.com/in/ankit-kr-chowdhury-1b1690218/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </Link>
          </li>
          <li className="instagram hover_effect">
            <Link
              href="https://www.instagram.com/ankit.chdry/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </Link>
          </li>
          <li className="twitter hover_effect">
            <Link
              href="https://twitter.com/AnkitCh03046966"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </Link>
          </li>
          <li className="left_line"></li>
        </ul>
      )}

      {shouldRender && (
        <ul className="right_bar">
          <li className="email hover_effect">
            <Link href="mailto:ankitparallax@gmail.com">
              ankitparallax@gmail.com
            </Link>
          </li>
          <li className="right_line"></li>
        </ul>
      )}
    </div>
  );
}
