import React from "react";
import "./AboutSub.css";

const AboutSub = () => {
  return (
    <section className="aboutSub mb-5">
      <div className="aboutSubContainer">
        <div className="allItemSub row">
          <div className="subLeft col-lg-5">
            <h3>Suscribe to The Daily Work</h3>
          </div>
          <div className="subCenter col-lg-1">
            <div className="xett"></div>
          </div>
          <div className="subRight col-lg-5">
            <h5 className="subrighttext">
              Added to the rich text element using the "When <br /> inside of"
              nested selector system.
            </h5>
            <form className="mt-5">
              <input type="email" placeholder="Email" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSub;
