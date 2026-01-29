import { useEffect, useRef, useState } from "react";
import "./header.css";
import Icon from "../../assets/logo-icon.webp";
import Word from "../../assets/logo-word.webp";

const Header = () => {
  const [active, setActive] = useState("home");
  const activeRef = useRef("home");

  useEffect(() => {
    const ids = ["home", "about", "services", "contact"];
    let observer;

    const setActiveSafe = (id) => {
      if (!id) return;
      if (activeRef.current === id) return;
      activeRef.current = id;
      setActive(id);
    };

    const setupObserver = () => {
      const sections = ids
        .map((id) => document.getElementById(id))
        .filter((el) => el !== null);

      // if services (or others) isn't in DOM yet, retry
      if (sections.length < ids.length) return false;

      observer = new IntersectionObserver(
        (entries) => {
          const best = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

          if (best?.target?.id) setActiveSafe(best.target.id);
        },
        {
          threshold: [0.15, 0.25, 0.4, 0.6, 0.75],
          rootMargin: "-90px 0px -55% 0px",
        }
      );

      sections.forEach((s) => observer.observe(s));
      return true;
    };

    // try now + retry a few times in case sections mount later
    let tries = 0;
    const interval = setInterval(() => {
      tries++;
      const ok = setupObserver();
      if (ok || tries >= 20) clearInterval(interval);
    }, 100);

    // hash support (clicking links)
    const onHashChange = () => {
      const h = window.location.hash.replace("#", "");
      if (h) setActiveSafe(h);
    };
    window.addEventListener("hashchange", onHashChange);

    return () => {
      clearInterval(interval);
      window.removeEventListener("hashchange", onHashChange);
      if (observer) observer.disconnect();
    };
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
          <li><a className={`navLink ${active === "home" ? "active" : ""}`} href="#home">Home</a></li>
          <li><a className={`navLink ${active === "about" ? "active" : ""}`} href="#about">About</a></li>
          <li><a className={`navLink ${active === "services" ? "active" : ""}`} href="#services">Services</a></li>
          <li><a className={`navLink ${active === "contact" ? "active" : ""}`} href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="headerActions">
        <a className="btnPrimary" href="#book">Book Appointment</a>
      </div>
    </header>
  );
};

export default Header;
