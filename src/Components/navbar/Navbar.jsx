import bankLogo from "../../Assets/images/logo.svg";
import mobileMenu from "../../Assets/images/icon-hamburger.svg";
import closeMenu from "../../Assets/images/icon-close.svg";
import Button from "../../Components/Button/Button";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [Menu, setShowMenu] = useState(false);

  const setCloseMenu = () => setShowMenu(!Menu);

  return (
    <>
      <nav className="navbar-container">
        <a href="#Inicio">
          <img src={bankLogo} alt="Logo" className="logo" />
        </a>
        <div className="desktop-links">
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Contact">Contact</a>
          <a href="#Blog">Blog</a>
          <a href="#Careers">Careers</a>
        </div>
        <Button className="btn-mobile" />
        <img
          src={Menu ? closeMenu : mobileMenu}
          alt="Menu"
          className="mobile-menu-btn"
          onClick={() => setShowMenu(!Menu)}
        />
      </nav>

      <div className={Menu ? "menu-background" : "display-none"}>
        <div className="menu-open">
          <a href="#Home" onClick={setCloseMenu}>
            Home
          </a>
          <a href="#About" onClick={setCloseMenu}>
            About
          </a>
          <a href="#Contact" onClick={setCloseMenu}>
            Contact
          </a>
          <a href="#Blog" onClick={setCloseMenu}>
            Blog
          </a>
          <a href="#Careers" onClick={setCloseMenu}>
            Careers
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
