import { useState, useEffect } from "react";
import "./header.css";
import Icon from '../../assets/logo-icon.webp';
import Word from '../../assets/logo-word.webp';

const Header = () => {
  const [activeLink, setActiveLink] = useState("#home");

  const handleActive = (hash) => {
    setActiveLink(hash);
  };

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#home", "#about", "#services", "#contact"];
      
      let currentSection = "#home";
      
      sections.forEach((section) => {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in the viewport (top of section within 100px of top)
          if (rect.top <= 100 && rect.bottom > 100) {
            currentSection = section;
          }
        }
      });
      
      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">

      <a href="#home" onClick={() => handleActive("#home")}>
        <div className="logo">
          <img className="icon" src={Icon} alt="" />
          <img className="word" src={Word} alt="" />
        </div>
      </a>

      <nav className="nav">
        <ul className="navList">
          <li>
            <a
              className={`navLink ${activeLink === "#home" ? "active" : ""}`}
              href="#home"
              onClick={() => handleActive("#home")}
            >
              Home
            </a>
          </li>

          <li>
            <a
              className={`navLink ${activeLink === "#about" ? "active" : ""}`}
              href="#about"
              onClick={() => handleActive("#about")}
            >
              About
            </a>
          </li>

          <li>
            <a
              className={`navLink ${activeLink === "#services" ? "active" : ""}`}
              href="#services"
              onClick={() => handleActive("#services")}
            >
              Services
            </a>
          </li>

          <li>
            <a
              className={`navLink ${activeLink === "#contact" ? "active" : ""}`}
              href="#contact"
              onClick={() => handleActive("#contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="headerActions">
        <a className="btnPrimary" href="#book">Book Appointment</a>
      </div>
    </header>
  );
};

export default Header;
