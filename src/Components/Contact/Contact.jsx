import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";

import ContactImage from "../../assets/img/contact-img.svg";
import TrackVisibility from "react-on-screen";
import "animate.css";

function Contact() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Submit");
  const [status, setStatus] = useState({});

  function onFormUpdate(category, value) {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setButtonText("Submitting...");
    let response = await fetch(
      "https://hassens-personal-portfolio.onrender.com/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      }
    );
    setButtonText("Submited");
    let result = await response.json();
    setFormDetails(formInitialDetails);

    if (result.status === "Message Sent") {
      setStatus({
        type: "success",
        message: "Message Sent Successfully",
      });
    } else {
      setStatus({
        type: "danger",
        message: "Message Failed to Send",
      });
    }
  };

  return (
    <TrackVisibility>
      {({ isVisible }) => (
        <section
          className="contact animate__animated animate__heartBeat"
          id="contact"
        >
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <img src={ContactImage} alt="" />
              </Col>

              <Col md={6}>
                <h2>Get in Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col className="px-1" sm={6}>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={(e) =>
                          onFormUpdate("firstName", e.target.value)
                        }
                        value={formDetails.firstName}
                        required
                      />
                    </Col>
                    <Col className="px-1" sm={6}>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={(e) =>
                          onFormUpdate("lastName", e.target.value)
                        }
                        value={formDetails.lastName}
                        required
                      />
                    </Col>

                    <Col className="px-1" sm={6}>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={(e) => onFormUpdate("email", e.target.value)}
                        value={formDetails.email}
                        required
                      />
                    </Col>

                    <Col>
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        onChange={(e) => onFormUpdate("phone", e.target.value)}
                        value={formDetails.phone}
                      />
                    </Col>
                    <Row>
                      <Col>
                        <textarea
                          row="6"
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                          value={formDetails.message}
                          required
                        />
                      </Col>
                    </Row>

                    <Col>
                      <button
                        type="submit"
                        disabled={buttonText === "Submited"}
                      >
                        <span>{buttonText}</span>
                      </button>
                    </Col>
                    {status.message && (
                      <Col>
                        <p className={status.type}>{status.message}</p>
                      </Col>
                    )}
                  </Row>
                </form>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </TrackVisibility>
  );
}

export default Contact;
