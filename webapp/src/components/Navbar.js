import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  // State for menu button
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ref for menu element
  const menuRef = useRef();

  // Ref for button element
  const buttonRef = useRef();

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu if clicked outside
  const closeMenu = (e) => {
    // Check if e.target is a valid DOM node
    const targetNode = e.target instanceof Node ? e.target : null;

    if (
      buttonRef.current &&
      !buttonRef.current.contains(targetNode) &&
      menuRef.current &&
      !menuRef.current.contains(targetNode)
    ) {
      setIsMenuOpen(false);
    }
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener("resize", closeMenu);
    window.addEventListener("click", closeMenu);

    // Remove event listeners
    return () => {
      window.removeEventListener("resize", closeMenu);
      window.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img
            src={require("../assets/open-book.png")}
            alt="Logo"
            style={{
              width: "50%",
              height: "auto",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Link>
      </div>
      <div>
        <h1 class="text-[#A00000] font-serif text-4xl">
          DigitalBookHub: Public e-library 📕
        </h1>
      </div>
      <ul className="navbar-links" ref={menuRef}>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="navbar-button" ref={buttonRef}>
        <button onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
