import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import HeaderImage from "../../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

//Icons
import { ArrowRightCircle } from "react-bootstrap-icons";
function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Frontend Developer.",
    "Backend Developer.",
    "FullStack Developer.",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <TrackVisibility>
      {({ isVisible }) => (
        <section className="banner" id="home">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={6} xl={7}>
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="banner__tagline">
                    Welcome To my Portfolio!
                  </span>
                  <h1>
                    {"Hi i'm Hassen Ben Hadj Hassen "}
                    <span className="banner__wrap">a {text}</span>
                  </h1>
                  <p>
                    This is my portfolio website, where you can find all my work
                    and projects.
                  </p>
                  <button>
                    <a href="#contact">
                      Let's Connect <ArrowRightCircle size={25} />
                    </a>
                  </button>
                </div>
              </Col>

              <Col
                className="animate__animated animate__zoomIn"
                xs={12}
                md={6}
                xl={5}
              >
                <img src={HeaderImage} alt="Header" />
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </TrackVisibility>
  );
}

export default Banner;
