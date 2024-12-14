import React from "react";
import "./home_section_3.css";
import { Link } from "react-router-dom";
const Home_section_3 = () => {
  return (
    <>
      <section className="hmscn3">
        <h1>Home Section 3</h1>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <a>
          <Link to="/team#section3">Test Click</Link>
        </a>
      </section>
    </>
  );
};

export default Home_section_3;
