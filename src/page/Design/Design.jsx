import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Design.css";

const Design = () => {
  useEffect(() => {
    document.title = 'Design';
  });
  return (
    <section className="design mb-5">
      <div className="desContainer">
        <div className="all">
          <div className="desName">DESIGN</div>
          <div className="desBoxes row">
            <div className="desBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/63035dbdc5a73eb524987f64_sharan-pagadala-bWQPgLMJ7sg-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className="desTitle">
                Manual Informative Place{" "}
              </NavLink>
              <p className="desDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="desDate">
                <span className="desyear">10/7/2022</span>
                <span className="desdot"> - </span>
                <NavLink to="/" className="desperson">
                  Martha Collins
                </NavLink>
                <hr />
              </div>
            </div>
            <div className="desBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dffa21c6e00c3079113d1f_jurica-koletic-oLU63uzhT88-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className="desTitle">
                No Fear Of Perfection
              </NavLink>
              <p className="desDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="desDate">
                <span className="desyear">7/6/2022</span>
                <span className="desdot"> - </span>
                <NavLink to="/" className="desperson">
                  Thomas Newman
                </NavLink>
                <hr />
              </div>
            </div>
            <div className="desBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62da97f718f65c2169b78a5c_yuichi-kageyama-iGompEDkVV8-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className="desTitle">
                The Light Goes Out
              </NavLink>
              <p className="desDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="desDate">
                <span className="desyear">9/22/2021</span>
                <span className="desdot"> - </span>
                <NavLink to="/" className="desperson">
                  Thomas Newman
                </NavLink>
                <hr />
              </div>
            </div>
            <div className="desBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62da97c847f6452eb020aaa1_fredrika-carlsson-xEQpc-who84-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className="desTitle">
                Just Getting Started
              </NavLink>
              <p className="desDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="desDate">
                <span className="desyear">3/3/2021</span>
                <span className="desdot"> - </span>
                <NavLink to="/" className="desperson">
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

export default Design;
