import React, { useState, useEffect } from "react";
import Customer from "./Customer";
import { getCustomers } from "../ApiCalls/CustomerApiCalls";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    const customersFromServer = await getCustomers();
    setCustomers(customersFromServer);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <>
      <h1 className="mt-3 text-center">Customer List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>API id</th>
            <th>Name</th>
            <th>Street Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
            <th>Phone Number</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            //console.log("Customer ID:", customer.customerId);
            return (
              <Customer
                customer={customer}
                key={customer.customerId}
                setCustomers={setCustomers}
                fetchCustomers={fetchCustomers}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CustomerList;
