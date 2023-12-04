import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Login from "./Components/Login";
import PublicLayout from "./Components/Layouts/PublicLayout";
import Home from "./Components/Pages/Home";
import PartsOrders from "./Components/Pages/PartsOrders";
import Customers from "./Components/Pages/Customers";
import AccountCreationForm from "./Components/AccountCreationForm";

export default function App() {
  return (
    <BrowserRouter>
      <PublicLayout>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="parts-orders" element={<PartsOrders />} />
          <Route path="customers" element={<Customers />} />
          {/* <Route path="/orders/new" element={() => <NewOrderForm />} />
            <Route path="/orders/existing" element={() => <EditOrderForm />} />
            <Route path="/orders/completed" element={() => <OrderList />} /> */}
          {/* <Route path="/products/:productId" element={<ProductDetails />} /> */}
        </Routes>
      </PublicLayout>
      <Routes>
        <Route
          path="account-creation"
          element={
            <>
              <AccountCreationForm />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

{
  /* <Route path="/orders/new" element={() => <NewOrderForm />} />
            <Route path="/orders/existing" element={() => <EditOrderForm />} />
            <Route path="/orders/completed" element={() => <OrderList />} /> */
}
{
  /* <Route path="/products/:productId" element={<ProductDetails />} /> */
}
