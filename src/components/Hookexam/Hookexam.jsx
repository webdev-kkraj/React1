import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import toast, { Toaster } from "react-hot-toast";
import "../../assets/Menu.css";
const start = 0;

const Hookexam = (props) => {
  const obj = {
    name: "aaa",
    age: 35,
    address: "wwww",
  };
  const [va1, setvalue] = useState(obj);
  useEffect(() => {
    setvalue((prvdata) => {
      const updt = { ...prvdata, location: "xxxx" };
      console.log(updt);
      return updt;
    });
  }, []);

  return (
    <div>
      <p>Locations: {va1.location}</p>
    </div>
  );
};

export default Hookexam;
