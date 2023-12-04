import React, { useState, useEffect } from "react";
import PartsOrder from "./PartsOrder";
import { getPartsOrders } from "../ApiCalls/PartsOrderApiCalls";

const PartsOrderList = () => {
  const [partsOrders, setPartsOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPartsOrders = async () => {
    try {
      const partsOrdersFromServer = await getPartsOrders();
      setPartsOrders(partsOrdersFromServer);
    } catch (error) {
      console.error("Error fetching parts orders:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPartsOrders();
  }, []);

  return (
    <>
      <h1 className="mt-3 text-center">Open Parts Orders</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>API id</th>
            <th>Control Number</th>
            <th>Customer</th>
            <th>Date Ordered</th>
            <th>Order Build Status</th>
            <th>Rack Location</th>
            <th>Sales Clerk</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {partsOrders.map((partsOrder) => {
            return (
              <PartsOrder
                partsOrder={partsOrder}
                key={partsOrder.partsOrderId}
                setPartsOrders={setPartsOrders}
                fetchPartsOrders={fetchPartsOrders}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default PartsOrderList;
