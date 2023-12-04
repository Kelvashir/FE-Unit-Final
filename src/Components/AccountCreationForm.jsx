import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AccountCreationForm = ({ onCreateAccount }) => {
  const [accountData, setAccountData] = useState({
    username: "",
    password: "",
    email: "",
    // Add other necessary fields for account creation
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccountData({ ...accountData, [name]: value });
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Add logic to create the account
    console.log("Creating account with:", accountData);
    // Pass the account data to the parent component
    onCreateAccount(accountData);
  };

  return (
    <div>
      <h2>Create Account</h2>
      <Form onSubmit={handleCreateAccount}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            name="username"
            value={accountData.username}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={accountData.password}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={accountData.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        {/* Add other necessary fields for account creation */}

        <Button variant="primary" type="submit">
          Create Account
        </Button>
      </Form>
    </div>
  );
};

export default AccountCreationForm;
