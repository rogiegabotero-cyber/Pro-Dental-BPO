import { useEffect, useRef, useState } from "react";
import "./services.css";

const Services = () => {
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

  const items = [
    {
      title: "Dental Billing & Revenue Management",
      desc: "Claim scrubbing, accurate submissions, follow-ups, and reduced A/R to improve cash flow.",
      icon: "💳",
    },
    {
      title: "Insurance Verification",
      desc: "Real-time eligibility checks, benefits verification, and coverage confirmation before visits.",
      icon: "✅",
    },
    {
      title: "Patient Scheduling & Support",
      desc: "Appointment booking, reminders, reschedules, and responsive patient communication.",
      icon: "📅",
    },
    {
      title: "Call Center Support",
      desc: "Inbound/outbound calls, follow-ups, and after-hours assistance to improve patient experience.",
      icon: "📞",
    },
    {
      title: "Administrative Support",
      desc: "Records management, dental transcription, data entry, and general back-office tasks.",
      icon: "🗂️",
    },
    {
      title: "Remote Staffing / Virtual Assistants",
      desc: "Dedicated remote team members who work with your systems to support daily operations.",
      icon: "🧑‍💻",
    },
  ];

  return (
    <section ref={sectionRef} className={`services ${show ? "services--show" : ""}`} id="services">
      <div className="servicesContainer">
        <div className="servicesTop anim anim--1">
          <p className="servicesBadge">Our Services</p>
          <h2 className="servicesTitle">
            Dental BPO services built for speed, accuracy, and growth.
          </h2>
          <p className="servicesSubtitle">
            Pro-Dental BPO handles your non-clinical operations so your team can stay focused
            on patient care and production.
          </p>
        </div>

        <div className="servicesGrid anim anim--2">
          {items.map((s, idx) => (
            <div className="serviceCard" key={idx}>
              <div className="serviceIcon">{s.icon}</div>
              <h3 className="serviceTitle">{s.title}</h3>
              <p className="serviceDesc">{s.desc}</p>
              <a className="serviceLink" href="#contact">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
