import { useEffect, useRef, useState } from "react";
import "./about.css";
import Pic2 from "../../../assets/pic2.webp"

const About = () => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

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

  return (
    <section ref={sectionRef} className={`about ${show ? "about--show" : ""}`} id="about">
      <div className="aboutContainer">

        {/* Left Image */}
        <div className="aboutImage anim anim--1">
          <div className="aboutImageCard">
            <img
              src={Pic2}
              alt="Dental Office"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="aboutContent">
          <p className="aboutBadge anim anim--2">About Pro-Dental BPO</p>

          <h2 className="aboutTitle anim anim--3">
            We simplify dental operations — so practices can focus on patients.
          </h2>

          <p className="aboutText anim anim--4">
            Pro-Dental BPO helps dental clinics grow by outsourcing non-clinical
            administrative work like billing, insurance verification, scheduling,
            and patient support. Our goal is to reduce overhead, increase accuracy,
            and improve overall efficiency.
          </p>

          <div className="aboutHighlights anim anim--5">
            <h3>What we handle for you:</h3>
            <ul>
              <li>Dental Billing & Revenue Cycle Management (RCM)</li>
              <li>Insurance Eligibility & Verification</li>
              <li>Patient Scheduling & Appointment Support</li>
              <li>Administrative Support & After-hours Calls</li>
            </ul>
          </div>

          <a href="#services" className="aboutBtn anim anim--6">
            Learn More
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
