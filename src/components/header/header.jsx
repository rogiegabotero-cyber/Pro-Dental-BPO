import { useEffect, useState } from "react";
import "./header.css";
import Icon from "../../assets/logo-icon.webp";
import Word from "../../assets/logo-word.webp";

const Header = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = ["home", "about", "services", "contact"];

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the section that is most visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActive(visible.target.id);
        }
      },
      {
        // adjust for sticky header height (so it triggers nicely)
        root: null,
        threshold: [0.25, 0.4, 0.6],
        rootMargin: "-90px 0px -60% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="header">
      <a href="#home">
        <div className="logo">
          <img className="icon" src={Icon} alt="" />
          <img className="word" src={Word} alt="" />
        </div>
      </a>

      <nav className="nav">
        <ul className="navList">
          <li>
            <a className={`navLink ${active === "home" ? "active" : ""}`} href="#home">
              Home
            </a>
          </li>
          <li>
            <a className={`navLink ${active === "about" ? "active" : ""}`} href="#about">
              About
            </a>
          </li>
          <li>
            <a className={`navLink ${active === "services" ? "active" : ""}`} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className={`navLink ${active === "contact" ? "active" : ""}`} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="headerActions">
        <a className="btnPrimary" href="#book">
          Book Appointment
        </a>
      </div>
    </header>
  );
};

export default Header;
