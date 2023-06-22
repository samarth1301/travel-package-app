import React from "react";
import logo from '../img/logo-100.png'

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-mm">
          <div className="footer-link">
            <div className="footer-link-div">
              <h2><img className="me-2" width = "50" height = "50" src = {logo}/>TourEase</h2>
              <div id="des">
              Discover the world's wonders with our immersive and tailored travel experiences
              </div>
            </div>
            <div className="footer-link-div">
                <h4>Explore</h4>
                <a href="/home">
                    <p>Home</p>
                </a>
                <a href="/faq">
                    <p>FaQ</p>
                </a>
                <a href="/register">
                    <p>Register</p>
                </a>
                <a href="/login">
                    <p>Sign in</p>
                </a>
            </div>

            <div className="footer-link-div">
              <h4>Company</h4>
              <a href="/about">
                <p>About</p>
              </a>
              <a href="/home">
                <p>Career</p>
              </a>
              <a href="/contact">
                <p>Contact</p>
              </a>
            </div>

            <div className="footer-link-div">
              <h4>Social Media</h4>
              <div className="social-media">
                <a href="https://www.linkedin.com/">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/">
                  <i className="fa-brands fa-square-twitter"></i>
                </a>
                <a href="https://instagram.com/">
                  <i className="fa-brands fa-square-instagram"></i>
                </a>
                <a href="https://github.com/">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="below-links">
        <a href="/terms">
          <div>
            <p>Terms & Conditions</p>
          </div>
        </a>
        <a href="/privacy">
          <div>
            <p>Privacy</p>
          </div>
        </a>
        <a href="/security">
          <div>
            <p>Security</p>
          </div>
        </a>
        <a href="/cookie">
          <div>
            <p>Cookie</p>
          </div>
        </a>
      </div>
    </>
  );
}
export default Footer;