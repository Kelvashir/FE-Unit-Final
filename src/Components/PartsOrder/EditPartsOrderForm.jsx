import React, { useState, useEffect } from "react";
import { updatePartsOrder } from "../ApiCalls/PartsOrderApiCalls";
import { Button, Modal } from "react-bootstrap";
import CustomerSelect from "../Customer/CustomerSelect";

const EditPartsOrderForm = ({ closeModal, fetchPartsOrders, partsOrder }) => {
  const [partsOrderControlNumber, setPartsOrderControlNumber] = useState(
    partsOrder.partsOrderControlNumber
  );
  const [partsOrderSalesClerk, setPartsOrderSalesClerk] = useState(
    partsOrder.partsOrderSalesClerk
  );
  const [partsOrderCustomerId, setPartsOrderCustomerId] = useState(
    partsOrder.customerId
  );

  const [partsOrderDateOrdered, setPartsOrderDateOrdered] = useState("");
  const [originalDateArray, setOriginalDateArray] = useState(
    partsOrder.partsOrderDateOrdered
  );

  const [partsOrderBuildStatus, setPartsOrderBuildStatus] = useState(
    partsOrder.partsOrderBuildStatus
  );
  const [partsOrderRackLocation, setPartsOrderRackLocation] = useState(
    partsOrder.partsOrderRackLocation
  );

  useEffect(() => {
    // Set the original date array to state
    setOriginalDateArray(partsOrder.partsOrderDateOrdered);

    // Convert the original date array to a string format "YYYY-MM-DD"
    const dateString = new Date(partsOrder.partsOrderDateOrdered.join("-"))
      .toISOString()
      .split("T")[0];
    setPartsOrderDateOrdered(dateString);
  }, [partsOrder.partsOrderDateOrdered]);

  const controlNumberHandler = (event) => {
    setPartsOrderControlNumber(event.target.value);
  };

  const salesClerkHandler = (event) => {
    setPartsOrderSalesClerk(event.target.value);
  };

  const customerIdHandler = (event) => {
    console.log("Old Customer ID:", partsOrderCustomerId);
    console.log("New Customer ID:", event.target.value);
    setPartsOrderCustomerId(event.target.value);
  };

  const dateOrderedHandler = (event) => {
    setPartsOrderDateOrdered(event.target.value);
  };

  const buildStatusHandler = (event) => {
    setPartsOrderBuildStatus(event.target.value);
  };

  const rackLocationHandler = (event) => {
    setPartsOrderRackLocation(event.target.value);
  };

  const commitChangesHandler = async (event) => {
    event.preventDefault();

    let updatedPartsOrder = {
      partsOrderControlNumber,
      partsOrderCustomerId,
      partsOrderDateOrdered: partsOrderDateOrdered.split("-").map(Number), // Convert the string back to an array before updating
      partsOrderBuildStatus,
      partsOrderRackLocation,
      partsOrderSalesClerk,
    };

    console.log("Updating with Customer ID:", partsOrderCustomerId);

    try {
      // Wait for the updatePartsOrder function to complete
      await updatePartsOrder(partsOrder.partsOrderId, updatedPartsOrder);

      // Then fetch the updated parts orders after the update is successful
      await fetchPartsOrders();

      closeModal();
    } catch (error) {
      console.error("Error updating parts order:", error.message);
      // Figure out how to show error you user
    }
  };

  console.log("Current Customer ID:", partsOrderCustomerId);

  return (
    <Modal show={true} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Update Parts Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="col-md-6">
            <label htmlFor="controlNumber" className="form-label">
              Control Number
            </label>
            <input
              type="text"
              className="form-control"
              id="modalControlNumber"
              placeholder="Control Number"
              value={partsOrderControlNumber}
              onChange={controlNumberHandler}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="salesClerk" className="form-label">
              Sales Clerk
            </label>
            <input
              type="text"
              className="form-control"
              id="modalSalesClerk"
              placeholder="Sales Clerk"
              value={partsOrderSalesClerk}
              onChange={salesClerkHandler}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="customer" className="form-label">
              Customer
            </label>

            <CustomerSelect
              value={partsOrderCustomerId}
              showDropdown={true}
              onChange={customerIdHandler}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="dateOrdered" className="form-label">
              Date Ordered
            </label>
            <input
              type="date"
              className="form-control"
              id="modalDateOrdered"
              value={partsOrderDateOrdered}
              onChange={dateOrderedHandler}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="modalBuildStatus" className="form-label">
              Parts Order Build Status
            </label>
            <input
              type="text"
              className="form-control"
              id="modalBuildStatus"
              placeholder="Build Status"
              value={partsOrderBuildStatus}
              onChange={buildStatusHandler}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="modalRackLocation" className="form-label">
              Rack Location
            </label>
            <input
              type="text"
              className="form-control"
              id="modalRackLocation"
              placeholder="Rack Location"
              value={partsOrderRackLocation}
              onChange={rackLocationHandler}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button variant="primary" onClick={commitChangesHandler}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditPartsOrderForm;
