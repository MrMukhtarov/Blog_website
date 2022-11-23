import React from "react";
import "./Advertisement.css";

const Advertisement = () => {
  return (
    <section className="advertisement">
      <div className="all">
        <div className="advName mb-3">ADVERTISEMENT</div>
        <div className="advimg text-center">
          <img
            src="https://assets.website-files.com/62961e0b9edf3034fa4a43b2/630e139206aa2bf8d3821c26_Webflow-ad-banner%20(1)-p-1600.jpg"
            alt="img"
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default Advertisement;
