import React, { useState } from "react";
import { Button } from "react-bootstrap";
import NewPartsOrderForm from "../PartsOrder/NewPartsOrderForm";
import PartsOrderList from "../PartsOrder/PartsOrderList";

const PartsOrders = () => {
  const navLinks = [
    { to: "/parts-orders/new", text: "Enter New Parts Order" },
    { to: "/parts-orders/existing", text: "Update Existing Parts Order" },
    { to: "/parts-orders/completed", text: "View Completed Parts Orders" },
  ];

  const [currentView, setCurrentView] = useState("/parts-orders/new");

  const handlePartsOrderMenuSelection = (to) => {
    setCurrentView(to);
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        {navLinks.map((link, index) => (
          <div className="d-flex" key={(link.to, index)}>
            <Button
              className="partsOrderButton"
              variant="primary"
              onClick={() => handlePartsOrderMenuSelection(link.to)}
            >
              {link.text}
            </Button>
          </div>
        ))}
      </div>
      <div>
        {currentView === "/parts-orders/new" && <NewPartsOrderForm />}
        {currentView === "/parts-orders/existing" && <PartsOrderList />}
        {currentView === "/parts-orders/completed" && <PartsOrderList />}
      </div>
    </>
  );
};

export default PartsOrders;
