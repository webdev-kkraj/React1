import React from "react";
import Contact from "../contact/Contact";
import "./listcustomer.css";

const Listcustomer = ({ customer }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Serial no</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {customer &&
            customer.map((vl, idx) => (
              <tr key={{ idx }}>
                <td>{idx + 1}</td>
                <td>{vl}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Listcustomer;
