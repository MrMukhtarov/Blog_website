import React from "react";
import { NavLink } from "react-router-dom";
import "./Spotlight.css";

const Spotlight = () => {
  return (
    <section className="spotlight">
      <div className="spotlightContainer">
        <div className="all">
          <h1 className="spotHeader text-center">Spotlight</h1>
          <div className="spotName text-center">food</div>
          <div className="boxes row">
            <div className="box col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dfda96a34b9f830e0f7f7e_emy-XoByiBymX20-unsplash-1-p-500.jpg"
                alt=""
                className="img-fluid"
              />
              <NavLink className='sptlink' to='/'>Exploring Culinary Corridor</NavLink>
              <hr />
            </div>
            <div className="box col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dea6da1d266f322559d6ae_jonathan-pielmayer-ecbZ5gEE-60-unsplash-1-p-500.jpg"
                alt=""
                className="img-fluid"
              />
              <NavLink className='sptlink' to='/'>Amazed With Tastes</NavLink>
              <hr />
            </div>
            <div className="box col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dea721487e20438d8e9d75_sahand-babali-q1SQqb9zEF8-unsplash-1.jpg"
                alt=""
                className="img-fluid"
              />
              <NavLink className='sptlink' to='/'>The Compassionate Road</NavLink>
              <hr />
            </div>
            <div className="box col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dfcda256b8041b7ceab72d_vita-marija-murenaite-eSeo6IzOV00-unsplash-1-p-500.jpg"
                alt=""
                className="img-fluid"
              />
              <NavLink className='sptlink' to='/'>Eating My Empire</NavLink>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
