import React, { useState } from "react";
import Listcustomer from "../listcustomer/listcustomer";
import "./contact.css";

const Contact = () => {
  const [customer, setcustomer] = useState("");
  const [customerlist, setcustomerlist] = useState([]);
  function assigncustomer() {
    if (customer) setcustomerlist((prev) => [...prev, customer]);
    console.log(customerlist);
    setcustomer("");
  }

  return (
    <>
      <section className="contsecns">
        <div className="container">
          <div>Add Customer List</div>
          <input
            type="text"
            value={customer}
            onChange={(e) => setcustomer(e.target.value)}
          />
          <button onClick={assigncustomer}>Add Me</button>
        </div>
        <div className="container">
          <Listcustomer customer={customerlist} />
        </div>
      </section>
    </>
  );
};

export default Contact;
