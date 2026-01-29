import { useEffect, useRef, useState } from "react";
import "./home.css";
import Pic1 from "../../../assets/pic1.webp";

const Home = () => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);
  const [pageBlurred, setPageBlurred] = useState(false);

  // Scroll reveal animation
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Page focus / blur animation (fade in/out)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setPageBlurred(true); // fade out
      } else {
        setPageBlurred(false); // fade in
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`home ${show ? "home--show" : ""} ${
        pageBlurred ? "home--blurred" : ""
      }`}
      id="home"
    >
      <div className="homeContainer">
        {/* Left Content */}
        <div className="homeContent">
          <p className="badge anim anim--1">Dental Business Process Outsourcing</p>

          <h1 className="heroTitle anim anim--2">
            Pro-Dental BPO
            <span>
              <br />— Smarter Support for Dental Practices.
            </span>
          </h1>

          <p className="heroSubtitle anim anim--3">
            We help dental clinics grow by outsourcing non-clinical tasks like billing,
            insurance verification, scheduling, and patient support — so your team can
            focus on what matters most: patient care.
          </p>

          <div className="heroStats anim anim--4">
            <div className="statBox">
              <h3>4%–10%</h3>
              <p>Typical billing cost savings</p>
            </div>
            <div className="statBox">
              <h3>24/7</h3>
              <p>Patient support availability</p>
            </div>
            <div className="statBox">
              <h3>RCM</h3>
              <p>Revenue cycle management</p>
            </div>
          </div>

          <div className="heroButtons anim anim--5">
            <a href="#services" className="btnPrimary">
              Explore Services
            </a>
            <a href="#contact" className="btnSecondary">
              Talk to Us
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="homeImage anim anim--6">
          <div className="imageCard">
            <img src={Pic1} alt="Dental Team" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
