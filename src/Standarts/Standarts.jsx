import React from "react";
import "./Standarts.css";

const Standarts = () => {
  return (
    <section className="standarts mb-5">
      <div className="standartContainer">
        <div className="all col-lg-7">
          <h4 className="standartTitle">Standarts</h4>
          <div className="standartDesc">
            There are around 400 codes covering journalistic work around the
            world. While various codes may differ in the detail of their content
            and come from different cultural traditions, most share common
            elements including the principles of{" "}
            <a
              href="https://en.wikipedia.org/wiki/Truth"
              target="_blank"
              rel="noopener noreferrer"
            >
              truthfulness{" "}
            </a>
            ,
            <a
              href="https://en.wikipedia.org/wiki/Accuracy"
              target="_blank"
              rel="noopener noreferrer"
            >
              accuracy{" "}
            </a>{" "}
            and fact-based communications, independence, objectivity,
            impartiality, fairness, respect for others and public
            accountability, as these apply to the gathering, editing and
            dissemination of newsworthy information to the public.
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Standarts;
