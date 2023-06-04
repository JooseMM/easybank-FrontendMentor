import bankLogo from "../../Assets/images/logo-footer.svg";
import facebook from "../../Assets/images/icon-facebook.svg";
import instagram from "../../Assets/images/icon-instagram.svg";
import twitter from "../../Assets/images/icon-twitter.svg";
import pinterest from "../../Assets/images/icon-pinterest.svg";
import youtube from "../../Assets/images/icon-youtube.svg";
import "./footer.css";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-link-container">
        <div className="social-media-container">
          <a href="/">
            <img src={bankLogo} alt="logo" />
          </a>
          <div className="social-media-icon">
            <a href="#Facebook">
              <img src={facebook} alt="facebook link" />
            </a>
            <a href="#Instagram">
              <img src={instagram} alt="instagram link" />
            </a>
            <a href="#twitter">
              <img src={twitter} alt="twitter link" />
            </a>
            <a href="#pinterest">
              <img src={pinterest} alt="pinterest link" />
            </a>
            <a href="#youtube">
              <img src={youtube} alt="youtube link" />
            </a>
          </div>
        </div>
        <nav className="footer-nav-links">
          <a href="#AboutUS">About us</a>
          <a href="#Contact">Contact</a>
          <a href="#Blog">Blog</a>
        </nav>
        <nav className="footer-nav-links">
          <a href="#Careers">Careers</a>
          <a href="#Support">Support</a>
          <a href="#PrivacyPolicy">Privacy Policy</a>
        </nav>
      </div>
      <div className="footer-btn-right-container">
        <Button />
        <p>©Easybank. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
