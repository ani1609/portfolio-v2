"use client";

import { useState, useEffect } from "react";
import Upward from "@/public/images/upwardArrow.png";
import Image from "next/image";
import "../styles/top-button.css";

export default function TopButton() {
  const [showButton, setShowButton] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Top_Button_Container">
      {showButton && (
        <button onClick={handleClick}>
          <Image src={Upward} alt="upward arrow" />
        </button>
      )}
    </div>
  );
}
