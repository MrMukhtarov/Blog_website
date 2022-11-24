import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Opinion.css";

const Opinion = () => {
  useEffect(() => {
    document.title = 'Opinion';
  });
  return (
    <section className="opinion mb-5">
      <div className="opiContainer">
        <div className="all">
          <div className="opiName">OPINION</div>
          <div className="opiBoxes row">
            <div className="opiBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/6303550738e59e4e53262604_jose-aljovin-JZMdGltAHMo-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className="opiTitle">
                Green Transition{" "}
              </NavLink>
              <p className="opiDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="opiDate">
                <span className="opiyear">10/7/2022</span>
                <span className="opidot"> - </span>
                <NavLink to="/" className="opiperson">
                  Martha Collins
                </NavLink>
                <hr />
              </div>
            </div>
            <div className="opiBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fb83d538096236558fdbc4_niklas-ohlrogge-EFIvaYLABmU-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className="opiTitle">
                What To Do With Your Life
              </NavLink>
              <p className="opiDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="opiDate">
                <span className="opiyear">7/6/2022</span>
                <span className="opidot"> - </span>
                <NavLink to="/" className="opiperson">
                  Thomas Newman
                </NavLink>
                <hr />
              </div>
            </div>
            <div className="opiBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fb6f9d9facc873b2f3e884_ana-flavia-kR5VQr3-L9w-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className="opiTitle">
                2 Wrongs Makes a Right
              </NavLink>
              <p className="opiDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="opiDate">
                <span className="opiyear">9/22/2021</span>
                <span className="opidot"> - </span>
                <NavLink to="/" className="opiperson">
                  Thomas Newman
                </NavLink>
                <hr />
              </div>
            </div>
            <div className="opiBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fb6e7a6b97cae240a937e1_patrick-tomasso-Oaqk7qqNh_c-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className="opiTitle">
                Is There Any End
              </NavLink>
              <p className="opiDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="opiDate">
                <span className="opiyear">3/3/2021</span>
                <span className="opidot"> - </span>
                <NavLink to="/" className="opiperson">
                  Thomas Newman
                </NavLink>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opinion;
