import { useEffect, useState } from "react";
import "./mobileNav.css";

const NavItem = ({ href, label, icon, active, setActive }) => (
  <a
    href={href}
    className={`mnavItem ${active === href ? "active" : ""}`}
    onClick={() => setActive(href)}
  >
    <span className="mnavIcon">{icon}</span>
    <span className="mnavLabel">{label}</span>
  </a>
);

const MobileNav = () => {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = ["#home", "#about", "#services", "#contact"];

    const handler = () => {
      let current = "#home";

      for (const id of sections) {
        const el = document.querySelector(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          current = id;
          break;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler();

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className="mobileNav" aria-label="Mobile navigation">
      <NavItem
        href="#home"
        label="Home"
        active={active}
        setActive={setActive}
        icon={
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
            <path
              d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10.5Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        }
      />

      <NavItem
        href="#about"
        label="About"
        active={active}
        setActive={setActive}
        icon={
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
            <path
              d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm7 9a7 7 0 0 0-14 0"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        }
      />

      <NavItem
        href="#services"
        label="Services"
        active={active}
        setActive={setActive}
        icon={
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
            <path
              d="M4 12h16M12 4v16"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M6 6h12v12H6z"
              stroke="currentColor"
              strokeWidth="1.8"
              opacity="0.35"
            />
          </svg>
        }
      />

      <NavItem
        href="#contact"
        label="Contact"
        active={active}
        setActive={setActive}
        icon={
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
            <path
              d="M21 8l-9 6L3 8V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M3 8v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8"
              stroke="currentColor"
              strokeWidth="1.8"
            />
          </svg>
        }
      />
    </nav>
  );
};

export default MobileNav;
