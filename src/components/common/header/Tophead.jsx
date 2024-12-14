import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./header.css";
//import logoTop from "../../../../public/logotop.png";

const Tophead = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 left-toplogo-secn">
            <img src="/logotop.png" />
          </div>
          <div className="col-6 right-toplogo-secn">
            <div className="social">
              <i className="fab fa-facebook-f icon"></i>
              <i className="fab fa-instagram icon"></i>
              <i className="fab fa-twitter icon"></i>
              <i className="fab fa-youtube icon"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tophead;
