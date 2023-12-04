import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const PublicLayout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
