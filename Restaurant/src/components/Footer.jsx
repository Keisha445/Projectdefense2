import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaUtensils,
} from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* LEFT */}
        <div className="footer-left">
          <h3>
            <FaUtensils /> Spice Palace Restaurant
          </h3>
          <p>
            <FaMapMarkerAlt /> Accra, Ghana
          </p>
          <p>
            <FaPhone /> +233 53 664 4978
          </p>
        </div>

        {/* CENTER */}
        <div className="footer-center">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Gallery</a></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* SUBSCRIBE SECTION */}
      <div className="subscribe-section">
        <h2>Get 15% Off Your First Order!</h2>
        <form className="subscribe-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe Now</button>
        </form>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2025 Spice Palace. All rights reserved.</p>
        <p>
          Designed By <span className="designer">Joel Quartey</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
