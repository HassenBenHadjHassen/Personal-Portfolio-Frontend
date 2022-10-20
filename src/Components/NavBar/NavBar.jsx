/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/img/logo.png";
import Linkedin from "../../assets/img/nav-icon1.svg";
import Facebook from "../../assets/img/nav-icon2.svg";
import GitHub from "../../assets/img/nav-icon3.png";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.screenY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (name) => {
    setActiveLink(name);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="navbar__socialIcons">
                <a
                  href="https://www.linkedin.com/in/hassen-ben-hadj-hassen-993b58237/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Linkedin} alt="LinkedIn" />
                </a>
                <a
                  href="https://www.facebook.com/HassenBenHadjHassen/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Facebook} alt="Facebook" />
                </a>
                <a
                  href="https://github.com/HassenBenHadjHassen/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={GitHub} alt="GitHub" />
                </a>
              </div>
              <HashLink to="#contact">
                <button className="navbar__button">
                  <span>Let's Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}

export default NavBar;
