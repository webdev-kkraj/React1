import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Tm_section_1 from "./tm_section_1/Tm_section_1";
import Tm_section_2 from "./tm_section_2/Tm_section_2";
import Tm_section_3 from "./tm_section_3/Tm_section_3";
import Tm_section_4 from "./tm_section_4/Tm_section_4";

const Team = () => {
  const location = useLocation();
  useEffect(() => {
    const targetId = location.hash.replace("#", "");
    console.log("===>" + targetId);
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Tm_section_1 />
      <Tm_section_2 />
      <Tm_section_3 />
      <Tm_section_4 />
    </>
  );
};

export default Team;
