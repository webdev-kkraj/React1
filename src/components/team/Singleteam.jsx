import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Singleteam = () => {
  const { sid } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (isNaN(sid)) {
      navigate("/404");
    }
  }, [sid, navigate]);
  return (
    <>
      <section id="section3" className="tmscn3">
        <div class="container">
          <h1>Single Page {sid}</h1>
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
        </div>
      </section>
    </>
  );
};

export default Singleteam;
