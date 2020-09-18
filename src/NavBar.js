import React, { useEffect, useState } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <img
        className="navbar__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_Netflix.png/1200px-Logo_Netflix.png"
        alt="netflix logo"
      />
      <img
        className="navbar__avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Navbar avatar"
      />
    </div>
  );
}
