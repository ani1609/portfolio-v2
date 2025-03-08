"use client";

import { useState, useEffect } from "react";
import {
  GithubIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  DiscordIcon,
} from "@/assets/icons";
import Link from "next/link";
import "../styles/sidebars.css";

interface SidebarItem {
  name: string;
  link: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const sidebarItems: SidebarItem[] = [
  {
    name: "Github",
    link: "https://github.com/ani1609",
    icon: GithubIcon,
  },
  {
    name: "Discord",
    link: "https://discordapp.com/users/754188469764358264",
    icon: DiscordIcon,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/ankit-kumar-chowdhury-1b1690218",
    icon: LinkedinIcon,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ankit.chdry/",
    icon: InstagramIcon,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/AnkitCh03046966",
    icon: TwitterIcon,
  },
];

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
          {sidebarItems.map((sidebarItem, index) => (
            <li key={index} className="github hover_effect">
              <Link
                href={sidebarItem.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <sidebarItem.icon className="size-5" />
              </Link>
            </li>
          ))}

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
