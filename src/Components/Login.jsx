import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = ({ showModal, onClose }) => {
  const [loginData, setLoginData] = React.useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Logging in with:", loginData);
    onClose(); // Close the modal after submitting
  };

  const handleCreateAccount = () => {
    // Note: Adjust the "to" attribute based on your route configuration
    // In this example, it assumes the AccountCreationForm is at "/account-creation"
  };

  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleLoginSubmit}>
          <Form.Group controlId="formLogin">
            <Form.Label>Login:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your login name"
              name="username"
              value={loginData.username}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>

          <p className="mt-3">
            Don't have an account?{" "}
            <Link to="/account-creation" className="link create-account-link">
              Create one
            </Link>
          </p>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
