import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Travel.css";

const Travel = () => {
  useEffect(() => {
    document.title = 'Travel';
  });
  return (
    <section className="travel mb-5">
      <div className="trvContainer">
        <div className="all">
          <div className="trvName">TRAVEL</div>
          <div className="trvBoxes row">
            <div className="trvBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fb85065c5d9883969e7d23_arnel-hasanovic-Nl-SXO4FAHw-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className='trvTitle'>Online Travel Planning</NavLink>
              <p className="trvDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="trvDate">
                <span className="trvyear">1/6/2023</span>
                <span className="trvdot"> - </span>
                <NavLink to='/' className='trvperson'>Thomas Newman</NavLink>
                <hr />
              </div>
            </div>
            <div className="trvBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fbad0697df1606246f3a32_aaron-burden-cEukkv42O40-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className='trvTitle'>Heat Waves Are Changing</NavLink>
              <p className="trvDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="trvDate">
                <span className="trvyear">4/13/2022</span>
                <span className="trvdot"> - </span>
                <NavLink to='/' className='trvperson'>Thomas Newman</NavLink>
                <hr />
              </div>
            </div>
            <div className="trvBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fb856631a23e47b7b6dc88_jack-anstey-XVoyX7l9ocY-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className='trvTitle'>The Sound Of Adventure</NavLink>
              <p className="trvDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="trvDate">
                <span className="trvyear">6/8/2022</span>
                <span className="trvdot"> - </span>
                <NavLink to='/' className='trvperson'>Liv Gunther</NavLink>
                <hr />
              </div>
            </div>
            <div className="trvBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fb6ea576bf7644a7fd69b2_dino-reichmuth-A5rCN8626Ck-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className='trvTitle'>A Backpacker’s Guide</NavLink>
              <p className="trvDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="trvDate">
                <span className="trvyear">5/12/2023</span>
                <span className="trvdot"> - </span>
                <NavLink to='/' className='trvperson'>Enzo Romano</NavLink>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travel;
