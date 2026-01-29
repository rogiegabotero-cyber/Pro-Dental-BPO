import { useState } from "react";
import "./footer.css";
import Icon from '../../assets/logo-icon.webp';
import Word from '../../assets/logo-word.webp';

const Footer = () => {

    const [tooltip, setTooltip] = useState({
    show: false,
    text: "",
    left: 0,
    top: 0,
  });

  const handleNotAvailable = (e) => {
    e.preventDefault();

    const rect = e.currentTarget.getBoundingClientRect();

    setTooltip({
      show: true,
      text: "Not available",
      left: rect.left + rect.width / 2,
      top: rect.top,
    });

    setTimeout(() => {
      setTooltip((prev) => ({ ...prev, show: false }));
    }, 1500);
  };
  return (
    <footer className="footer">
      <div className="footerContainer">

        {/* LEFT */}
        <div className="footerBrand">
          <div className="footerLogo">
            <img className="icon" src={Icon} alt="" />
            <img className="word" src={Word} alt="" />
          </div>

          <p className="footerText">
            Smarter back-office support for dental practices — billing, verification,
            scheduling, and patient support designed for growth.
          </p>

            <div className="footerSocials">
                <a href="#" className="socialBtn" onClick={handleNotAvailable}>
                    f
                </a>
                <a href="#" className="socialBtn" onClick={handleNotAvailable}>
                    in
                </a>
                <a href="#" className="socialBtn" onClick={handleNotAvailable}>
                    x
                </a>
            </div>

            {tooltip.show && (
                <div
                className="tooltipBox"
                style={{
                    left: tooltip.left,
                    top: tooltip.top - 12,
                }}
                >
                {tooltip.text}
                </div>
            )}
        </div>

        {/* MIDDLE */}
        <div className="footerLinks">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        {/* RIGHT */}
        <div className="footerContact">
          <h4>Get in touch</h4>
          <p><strong>Email:</strong> prodentalbpo@gmail.com</p>
          <p><strong>Phone:</strong> +63 900 000 0000</p>
          <p><strong>Location:</strong> Philippines (Remote Support Worldwide)</p>

            <form action="" className="newsletter">
                <input type="email" placeholder="Your email" />
                <button>Subscribe</button> 
            </form>
        </div>

      </div>

      <div className="footerBottom">
        <p>© {new Date().getFullYear()} Pro-Dental BPO. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
