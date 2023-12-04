import React, { useState } from "react";
import { deleteCustomer } from "../ApiCalls/CustomerApiCalls";
import EditCustomerForm from "./EditCustomerForm";

const Customer = ({ customer, setCustomers, fetchCustomers }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const deleteCustomerHandler = async () => {
    try {
      await deleteCustomer(customer.customerId);
      await fetchCustomers();
    } catch (error) {
      console.error("Error deleting customer:", error.message);
    }
  };

  const displayModal = () => {
    if (showModal) {
      return (
        <EditCustomerForm
          customer={customer}
          closeModal={closeModal}
          setCustomers={setCustomers}
          fetchCustomers={fetchCustomers}
        />
      );
    }
    return null;
  };

  return (
    <>
      <tr>
        <td>{customer.customerId}</td>
        <td>{customer.customerName}</td>
        <td>{customer.customerStreetAddress}</td>
        <td>{customer.customerCity}</td>
        <td>{customer.customerState}</td>
        <td>{customer.customerZip}</td>
        <td>{customer.customerPhoneNumber}</td>
        <td>
          <button type="button" className="btn btn-primary" onClick={openModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="edit customer"
              viewBox="0 0 16 16"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
          </button>
          {displayModal()}
        </td>
        <td>
          {
            <button
              type="button"
              className="btn btn-danger"
              onClick={deleteCustomerHandler}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="delete customer"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
              </svg>
            </button>
          }
        </td>
      </tr>
    </>
  );
};

export default Customer;
