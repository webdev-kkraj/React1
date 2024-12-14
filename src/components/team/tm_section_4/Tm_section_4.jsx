import React from "react";
import "./Tm_section_4.css";
import { teamlist } from "../teamlist";
const Tm_section_4 = () => {
  return (
    <>
      <section className="tmscn4">
        <div className="container">
          <h1>Team Section 4</h1>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          {teamlist.map((vlu, idx) => (
            <div key={idx}>
              ID:{vlu.id}
              <br></br>
              Title:{vlu.title}
              <br></br>
              Content:{vlu.content}
              <br></br>
              <a href={`/team/${vlu.id}`}>ReadMore</a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Tm_section_4;
