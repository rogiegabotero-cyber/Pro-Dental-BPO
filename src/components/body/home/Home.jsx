import { useEffect, useRef, useState } from "react";
import "./home.css";
import Pic1 from "../../../assets/pic1.webp";
import Pic3 from "../../../assets/pic3.webp";
import Pic4 from "../../../assets/pic4.webp";

const Home = () => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);
  const [pageBlurred, setPageBlurred] = useState(false);

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

  useEffect(() => {
    const handleVisibilityChange = () => {
      setPageBlurred(document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
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
            <a href="#services" className="btnPrimary">Explore Services</a>
            <a href="#contact" className="btnSecondary">Talk to Us</a>
          </div>
        </div>

        {/* Right Image */}
        <div className="homeImage anim anim--6">
          <div className="imageStack">
            {/* Top-left behind */}
            <div className="miniCard miniCard--tl" aria-hidden="true">
              <img src={Pic4} alt="" />
            </div>

            {/* Bottom-right behind */}
            <div className="miniCard miniCard--br" aria-hidden="true">
              <img src={Pic3} alt="" />
            </div>

            {/* Main image */}
            <div className="imageCard">
              <img src={Pic1} alt="Dental Team" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
