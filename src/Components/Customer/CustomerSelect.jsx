import React, { useState, useEffect } from "react";
import { getCustomers } from "../ApiCalls/CustomerApiCalls";

const CustomerSelect = ({ value, onChange, showDropdown }) => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await getCustomers();
        setCustomers(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching customers:", error);
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (showDropdown) {
    return (
      <>
        <select
          className="form-control"
          id="customer"
          placeholder="Customer"
          value={value}
          onChange={onChange}
        >
          <option value="" disabled>
            Select a customer
          </option>
          {customers.map((customer) => (
            <option key={customer.customerId} value={customer.customerId}>
              {customer.customerName}
            </option>
          ))}
        </select>
      </>
    );
  }

  // If showDropdown is false, only display the customer name
  const selectedCustomer = customers.find(
    (customer) => customer.customerId === value
  );

  return <span>{selectedCustomer ? selectedCustomer.customerName : ""}</span>;
};

export default CustomerSelect;
