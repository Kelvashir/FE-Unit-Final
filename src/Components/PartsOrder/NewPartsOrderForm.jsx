import React, { useState } from "react";
import { createPartsOrder } from "../ApiCalls/PartsOrderApiCalls";
import CustomerSelect from "../Customer/CustomerSelect";

const NewPartsOrderForm = () => {
  const [controlNumber, setControlNumber] = useState("");
  const [salesClerk, setSalesClerk] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [dateOrdered, setDateOrdered] = useState(() => {
    const today = new Date();

    // Required for input type="date"
    const formattedDate = today.toISOString().split("T")[0];

    return formattedDate;
  });

  const [buildStatus, setBuildStatus] = useState("");
  const [rackLocation, setRackLocation] = useState("");

  const controlNumberHandler = (event) => {
    setControlNumber(event.target.value);
  };

  const salesClerkHandler = (event) => {
    setSalesClerk(event.target.value);
  };

  const customerIdHandler = (event) => {
    setCustomerId(event.target.value);
  };

  const dateOrderedHandler = (event) => {
    setDateOrdered(event.target.value);
  };
  const buildStatusHandler = (event) => {
    setBuildStatus(event.target.value);
  };
  const rackLocationHandler = (event) => {
    setRackLocation(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const dateParts = dateOrdered.split("-").map(Number);

    let newPartsOrder = {
      controlNumber,
      customerId,
      dateOrdered: dateParts,
      buildStatus,
      rackLocation,
      salesClerk,
    };

    try {
      await createPartsOrder(newPartsOrder);
      resetForm();
    } catch (error) {
      console.error("Error creating parts order:", error.message);
    }
    resetForm();
  };

  const resetForm = () => {
    setControlNumber("");
    setCustomerId("");
    setDateOrdered("");
    setBuildStatus("");
    setRackLocation("");
    setSalesClerk("");
  };

  return (
    <>
      <div className="container">
        <h1 className="mt-3 text-center">Enter New Parts Order</h1>

        <form className="row g-3">
          <div className="col-md-2">
            <label htmlFor="controlNumber" className="form-label">
              Control #
            </label>
            <input
              type="number"
              className="form-control"
              id="controlNumber"
              placeholder="Control #"
              value={controlNumber}
              onChange={controlNumberHandler}
            />
          </div>

          <div className="col-md-8">
            <label htmlFor="customer" className="form-label">
              Customer
            </label>

            <CustomerSelect
              value={customerId}
              showDropdown={true}
              onChange={customerIdHandler}
            />
          </div>

          <div className="col-md-2">
            <label htmlFor="dateOrdered" className="form-label">
              Date Ordered
            </label>
            <input
              type="date"
              className="form-control"
              id="dateOrdered"
              placeholder="Date Ordered"
              value={dateOrdered}
              onChange={dateOrderedHandler}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="buildStatus" className="form-label">
              Build Status
            </label>
            <input
              type="text"
              className="form-control"
              id="buildStatus"
              placeholder="Build Status"
              value={buildStatus}
              onChange={buildStatusHandler}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="rackLocation" className="form-label">
              Rack Location
            </label>
            <input
              type="text"
              className="form-control"
              id="rackLocation"
              placeholder="Rack Location"
              value={rackLocation}
              onChange={rackLocationHandler}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="salesClerk" className="form-label">
              Sales Clerk
            </label>
            <input
              type="text"
              className="form-control"
              id="salesClerk"
              placeholder="Sales Clerk"
              value={salesClerk}
              onChange={salesClerkHandler}
            />
          </div>

          <div className="col-12">
            <button
              id="submitOrderBtn"
              type="submit"
              className="btn btn-primary w-100"
              onClick={submitHandler}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewPartsOrderForm;
