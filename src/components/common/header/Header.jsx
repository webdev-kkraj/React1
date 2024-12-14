import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tophead from "./Tophead";
const Header = () => {
  const [smenu, setsmenu] = useState({
    def: true,
    active: true,
  });
  useEffect(() => {
    console.log("testttt");
    const handleMediaChange = (event) => {
      alert("test");
    };

    window
      .matchMedia("(max-width: 600px)")
      .addEventListener("change", handleMediaChange);
  }, []);
  return (
    <>
      <section className="tpfullsecn">
        <Tophead />
        <nav>
          <ul className={` navul-list ${smenu.def ? "aaaa" : "bbbb"}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/journal">Journal</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        {window.matchMedia("(max-width: 600px)").matches && (
          <button
            className="toggle"
            onClick={() => setsmenu((prev) => ({ ...prev, def: !prev.def }))}
          >
            {smenu.def ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        )}
      </section>
    </>
  );
};

export default Header;
