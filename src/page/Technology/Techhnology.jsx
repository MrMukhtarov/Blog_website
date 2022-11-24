import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Texhnology.css";

const Techhnology = () => {
    useEffect(() => {
        document.title = 'Technology';
      });
  return (
    <section className="technology mb-5">
      <div className="techContainer">
        <div className="all">
          <div className="techName">TECHNOLOGY</div>
          <div className="techBoxes row">
            <div className="techBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62d80701f42d0c14a9032233_daniel-schludi-mbGxz7pt0jM-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className="techTitle">
                Believing Their Own Hype{" "}
              </NavLink>
              <p className="techtechc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="techDate">
                <span className="techyear">10/7/2022</span>
                <span className="techdot"> - </span>
                <NavLink to="/" className="techperson">
                  Martha Collins
                </NavLink>
                <hr />
              </div>
            </div>
            <div className="techBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62d807764444514ab2f45967_francesco-WznI2IRqxZA-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className="techTitle">
                Let’s Go Invent Tomorrow
              </NavLink>
              <p className="techtechc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="techDate">
                <span className="techyear">7/6/2022</span>
                <span className="techdot"> - </span>
                <NavLink to="/" className="techperson">
                  Thomas Newman
                </NavLink>
                <hr />
              </div>
            </div>
            <div className="techBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62d8079cf77d817f17ae902c_bernd-dittrich-n0iZRPiYWuA-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className="techTitle">
                Generations Are To Remember
              </NavLink>
              <p className="techtechc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="techDate">
                <span className="techyear">9/22/2021</span>
                <span className="techdot"> - </span>
                <NavLink to="/" className="techperson">
                  Thomas Newman
                </NavLink>
                <hr />
              </div>
            </div>
            <div className="techBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62d807b379990a547e11b774_shubham-dhage-WzKi0E3ZFRc-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className="techTitle">
                Next Wave Of Industry
              </NavLink>
              <p className="techtechc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="techDate">
                <span className="techyear">3/3/2021</span>
                <span className="techdot"> - </span>
                <NavLink to="/" className="techperson">
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

export default Techhnology;
