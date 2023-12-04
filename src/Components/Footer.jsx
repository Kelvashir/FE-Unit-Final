import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="mt-5">
      <Container>
        <Row>
          <Col>
            <h3>Contact Us</h3>
            <p>
              123 Main Street
              <br />
              City, State 12345
              <br />
              Email: info@example.com
              <br />
              Phone: (123) 456-7890
            </p>
          </Col>
          <Col>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h3>Follow Us</h3>
            <p>Stay connected on social media:</p>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3 bg-dark text-light">
        &copy; 2023 Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
