import React, { useState } from "react";
import { Button } from "react-bootstrap";
import NewCustomerForm from "../Customer/NewCustomerForm";
import CustomerList from "../Customer/CustomerList";

const Customers = () => {
  const navLinks = [
    { to: "/customers/new", text: "Enter New Customer" },
    { to: "/customers/existing", text: "Update Existing Customer" },
    { to: "/customers/all", text: "View All Customers" },
  ];

  const [currentView, setCurrentView] = useState("/customers/new");

  const handleCustomerMenuSelection = (to) => {
    setCurrentView(to);
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        {navLinks.map((link, index) => (
          <div className="d-flex" key={(link.to, index)}>
            <Button
              className="customerButton"
              variant="primary"
              onClick={() => handleCustomerMenuSelection(link.to)}
            >
              {link.text}
            </Button>
          </div>
        ))}
      </div>
      <div>
        {currentView === "/customers/new" && <NewCustomerForm />}
        {currentView === "/customers/existing" && <CustomerList />}
        {currentView === "/customers/all" && <CustomerList />}
      </div>
    </>
  );
};

export default Customers;
