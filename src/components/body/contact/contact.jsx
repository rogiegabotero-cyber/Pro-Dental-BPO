import { useEffect, useRef, useState } from "react";
import "./contact.css";

const Contact = () => {
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
    <section ref={sectionRef} className={`contact ${show ? "contact--show" : ""}`} id="contact">
      <div className="contactContainer">

        {/* TOP */}
        <div className="contactTop anim anim--1">
          <p className="contactBadge">Contact Us</p>
          <h2 className="contactTitle">Let’s talk about your dental operations.</h2>
          <p className="contactSubtitle">
            Have questions or want to partner with Pro-Dental BPO? Send us a message and we’ll respond quickly.
          </p>
        </div>

        {/* CONTENT */}
        <div className="contactGrid">

          {/* LEFT INFO */}
          <div className="contactInfo anim anim--2">
            <div className="infoCard">
              <div className="infoIcon">📧</div>
              <div>
                <h3>Email</h3>
                <p>prodentalbpo@gmail.com</p>
              </div>
            </div>

            <div className="infoCard">
              <div className="infoIcon">📞</div>
              <div>
                <h3>Phone</h3>
                <p>+63 900 000 0000</p>
              </div>
            </div>

            <div className="infoCard">
              <div className="infoIcon">📍</div>
              <div>
                <h3>Location</h3>
                <p>Philippines (Remote Support Worldwide)</p>
              </div>
            </div>

            <div className="contactNote">
              <h4>Business Hours</h4>
              <p>Mon - Sat: 8:00 AM – 6:00 PM</p>
              <p>24/7 support available for scheduling & calls</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="contactForm anim anim--3">
            <div className="formRow">
              <div className="inputGroup">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>

              <div className="inputGroup">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
            </div>

            <div className="inputGroup">
              <label>Message</label>
              <textarea placeholder="Write your message..."></textarea>
            </div>

            <button type="submit" className="sendBtn">
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
