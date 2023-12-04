import React, { useState } from "react";
import { updateCustomer } from "../ApiCalls/CustomerApiCalls";
import { Modal, Button } from "react-bootstrap";

const EditCustomerForm = ({ customer, closeModal, fetchCustomers }) => {
  const [customerName, setCustomerName] = useState(customer.customerName);
  const [customerStreetAddress, setCustomerStreetAddress] = useState(
    customer.customerStreetAddress
  );
  const [customerCity, setCustomerCity] = useState(customer.customerCity);
  const [customerState, setCustomerState] = useState(customer.customerState);
  const [customerZip, setCustomerZip] = useState(customer.customerZip);
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState(
    customer.customerPhoneNumber
  );

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

  const commitChangesHandler = async (event) => {
    event.preventDefault();

    let updatedCustomer = {
      customerId: customer.customerId,
      customerName,
      customerStreetAddress,
      customerCity,
      customerState,
      customerZip,
      customerPhoneNumber,
    };

    try {
      await updateCustomer(customer.customerId, updatedCustomer);

      await fetchCustomers();
      closeModal();
    } catch (error) {
      console.error("Error updating parts order:", error.message);
    }
  };

  return (
    <>
      <Modal show={true} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="col-md-6">
              <label htmlFor="customerName" className="form-label">
                Customer Name
              </label>
              <input
                type="text"
                className="form-control"
                id="modalCustomerName"
                placeholder="Customer Name"
                value={customerName}
                onChange={customerNameHandler}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="customerStreetAddress" className="form-label">
                Street Address
              </label>
              <input
                type="text"
                className="form-control"
                id="modalCustomerStreetAddress"
                placeholder="Street Address"
                value={customerStreetAddress}
                onChange={customerStreetAddressHandler}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="customerCity" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="modalCustomerCity"
                placeholder="City"
                value={customerCity}
                onChange={customerCityHandler}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="customerState" className="form-label">
                State
              </label>
              <input
                type="text"
                className="form-control"
                id="modalCustomerState"
                placeholder="State"
                value={customerState}
                onChange={customerStateHandler}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="customerZip" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                id="modalCustomerZip"
                placeholder="Zip"
                value={customerZip}
                onChange={customerZipHandler}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="customerPhoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="modalCustomerPhoneNumber"
                placeholder="Phone Number"
                value={customerPhoneNumber}
                onChange={customerPhoneNumberHandler}
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
    </>
  );
};

export default EditCustomerForm;
