import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Life.css";

const Life = () => {
  useEffect(() => {
    document.title = 'Life';
  });
  return (
    <section className="life mb-5">
      <div className="lifeContainer">
        <div className="all">
          <div className="lifeName">LIFE</div>
          <div className="lifeBoxes row">
            <div className="lifeBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fb8939225141bf84029385_jukan-tateisi-bJhT_8nbUA0-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className="lifeTitle">
                The First Time To Be Me{" "}
              </NavLink>
              <p className="lifeDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="lifeDate">
                <span className="lifeyear">10/7/2022</span>
                <span className="lifedot"> - </span>
                <NavLink to="/" className="lifeperson">
                  Martha Collins
                </NavLink>
                <hr />
              </div>
            </div>
            <div className="lifeBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/630386b3d2d07a01c197af1d_raamin-ka-0qJBEzudn5E-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className="lifeTitle">
                Find Out Why This Is The Right
              </NavLink>
              <p className="lifeDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="lifeDate">
                <span className="lifeyear">7/6/2022</span>
                <span className="lifedot"> - </span>
                <NavLink to="/" className="lifeperson">
                  Thomas Newman
                </NavLink>
                <hr />
              </div>
            </div>
            <div className="lifeBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fb6f14c273de85323a8443_aideal-hwa-OYzbqk2y26c-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className="lifeTitle">
                Be Better Than Yourself
              </NavLink>
              <p className="lifeDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="lifeDate">
                <span className="lifeyear">9/22/2021</span>
                <span className="lifedot"> - </span>
                <NavLink to="/" className="lifeperson">
                  Thomas Newman
                </NavLink>
                <hr />
              </div>
            </div>
            <div className="lifeBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fb6e536a8a271f97c23cf4_randy-fath-I0C1zdto_YA-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className="lifeTitle">
                Just Getting Started
              </NavLink>
              <p className="lifeDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="lifeDate">
                <span className="lifeyear">3/3/2021</span>
                <span className="lifedot"> - </span>
                <NavLink to="/" className="lifeperson">
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

export default Life;
