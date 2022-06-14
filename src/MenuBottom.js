import React, { useState, useEffect } from "react";
import "./MenuBottom.css";
export default function MenuBottom() {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const [navPosition, setnavPosition] = useState("absolute");
  const [navTop, setnavTop] = useState("800px");

  const listenScrollEvent = () => {
    window.scrollY > 800 ? setnavColor("#252734") : setnavColor("transparent");
    window.scrollY > 800 ? setnavSize("7rem") : setnavSize("10rem");
    window.scrollY > 800 ? setnavPosition("fixed") : setnavPosition("absolute");
    window.scrollY > 800 ? setnavTop("0px") : setnavTop("800px");

  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  

  return (
    <div id="nav" className="nav">
      <nav className="container"
        style={{
          backgroundColor: navColor,
          height: navSize,
          position:navPosition,
          top:navTop
        }}
      >
        <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>Services</li>
            <li>Works</li>
            <li>Support</li>
            <li>Contact us</li>
        </ul>
      </nav>
    </div>
  );
}

