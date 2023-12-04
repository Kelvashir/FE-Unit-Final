import React, { useState } from "react";
import { createCustomer } from "../ApiCalls/CustomerApiCalls";

const NewCustomerForm = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerStreetAddress, setCustomerStreetAddress] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  const [customerState, setCustomerState] = useState("");
  const [customerZip, setCustomerZip] = useState("");
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");

  const customerNameHandler = (event) => {
    setCustomerName(event.target.value);
  };

  const customerStreetAddressHandler = (event) => {
    setCustomerStreetAddress(event.target.value);
  };

  const customerCityHandler = (event) => {
    setCustomerCity(event.target.value);
  };

  const customerStateHandler = (event) => {
    setCustomerState(event.target.value);
  };

  const customerZipHandler = (event) => {
    setCustomerZip(event.target.value);
  };

  const customerPhoneNumberHandler = (event) => {
    setCustomerPhoneNumber(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let newCustomer = {
      customerName,
      customerStreetAddress,
      customerCity,
      customerState,
      customerZip,
      customerPhoneNumber,
    };

    createCustomer(newCustomer);

    resetForm();
  };

  const resetForm = () => {
    setCustomerName("");
    setCustomerStreetAddress("");
    setCustomerCity("");
    setCustomerState("");
    setCustomerZip("");
    setCustomerPhoneNumber("");
  };

  return (
    <>
      {/* New Customer Entry Form */}
      <div className="container">
        <h1 className="mt-3 text-center">Enter New Customer</h1>

        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="customerName" className="form-label">
              Customer Name
            </label>
            <input
              type="text"
              className="form-control"
              id="customerName"
              placeholder="Customer Name"
              value={customerName}
              onChange={customerNameHandler}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="customerPhoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="customerPhoneNumber"
              placeholder="Phone Number"
              value={customerPhoneNumber}
              onChange={customerPhoneNumberHandler}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="customerStreetAddress" className="form-label">
              Street Address
            </label>
            <input
              type="text"
              className="form-control"
              id="customerStreetAddress"
              placeholder="Street Address"
              value={customerStreetAddress}
              onChange={customerStreetAddressHandler}
            />
          </div>

          <div className="col-md-2">
            <label htmlFor="customerCity" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="customerCity"
              placeholder="City"
              value={customerCity}
              onChange={customerCityHandler}
            />
          </div>

          <div className="col-md-2">
            <label htmlFor="customerState" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="customerState"
              placeholder="State"
              value={customerState}
              onChange={customerStateHandler}
            />
          </div>

          <div className="col-md-2">
            <label htmlFor="customerZip" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control"
              id="customerZip"
              placeholder="Zip"
              value={customerZip}
              onChange={customerZipHandler}
            />
          </div>

          <div className="col-12">
            <button
              id="submitCustomerBtn"
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

export default NewCustomerForm;
