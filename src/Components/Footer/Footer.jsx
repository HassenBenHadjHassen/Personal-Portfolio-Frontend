import React from "react";
import MailChimpForm from "../MailChimp/MailChimpForm";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

//Images
import Logo from "../../assets/img/logo.png";
import Linkedin from "../../assets/img/nav-icon1.svg";
import Facebook from "../../assets/img/nav-icon2.svg";
import GitHub from "../../assets/img/nav-icon3.svg";

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col>
            <MailChimpForm />
            <Col sm={6}>
              <img className="footer__logo" src={Logo} alt="Logo" />
            </Col>

            <Col className="text-center text-sm-end" sm={6}>
              <div className="footer__socialIcons">
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
              <p>Copyright {year}. All Rights Reserved</p>
            </Col>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
