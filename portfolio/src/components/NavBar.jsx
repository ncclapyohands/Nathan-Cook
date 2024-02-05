import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../styling/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    closeMenu();
    scroll.scrollToTop();
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="navbar-logo" onClick={scrollToTop}>
        Nates Portfolio
      </div>
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={closeMenu}
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="education"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={closeMenu}
        >
          Education
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={closeMenu}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={closeMenu}
        >
          Contact
        </Link>
      </div>
      <div
        className={`hamburger-icon ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default NavBar;
