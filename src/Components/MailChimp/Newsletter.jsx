/* eslint-disable no-restricted-globals */
import React, { useEffect } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import "./Newsletter.css";

function Newsletter({ onValidated, status, message }) {
  const [email, setEmail] = React.useState("");

  useEffect(() => {
    if (status === "success") {
      clearField();
    }
  }, [status]);

  function handleSubmit(e) {
    e.preventDefault();

    email && email.indexOf("@") > -1 && onValidated({ EMAIL: email });
  }

  const clearField = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter__box">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to my Newsletter</h3>
            {status === "sending" && <Alert variant="info">Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              {innerWidth > 768 ? (
                <div className="newsletter__emailBox">
                  <input
                    type="email"
                    name="EMAIL"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    value={email}
                    required
                  />
                  <button type="submit">Subscribe</button>
                </div>
              ) : (
                <div className="newsletter__emailBox">
                  <Row>
                    <Col>
                      <input
                        type="email"
                        name="EMAIL"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        value={email}
                        required
                      />
                    </Col>
                    <Col>
                      <button type="submit">Subscribe</button>
                    </Col>
                  </Row>
                </div>
              )}
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
}

export default Newsletter;
