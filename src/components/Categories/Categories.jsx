import React from "react";
import { NavLink } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  return (
    <section className="categories">
      <div className="ctgContainer">
        <div className="all">
          <div className="ctgName mb-3">All categories</div>
          <div className="ctgBoxes row">
            <div className="ctgBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/63035dbdc5a73eb524987f64_sharan-pagadala-bWQPgLMJ7sg-unsplash-1-p-800.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className='ctgTitle'>Manual Informative Place</NavLink>
              <p className="ctgDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="ctgDate">
                <span className="ctgyear">9/9/2022</span>
                <span className="ctgdot"> - </span>
                <NavLink to='/' className='ctgperson'>Enzo Romano</NavLink>
                <hr />
              </div>
            </div>
            <div className="ctgBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dfda96a34b9f830e0f7f7e_emy-XoByiBymX20-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className='ctgTitle'>Exploring Culinary Corridor</NavLink>
              <p className="ctgDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="ctgDate">
                <span className="ctgyear">9/9/2022</span>
                <span className="ctgdot"> - </span>
                <NavLink to='/' className='ctgperson'>Martha Collins</NavLink>
                <hr />
              </div>
            </div>
            <div className="ctgBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fb8939225141bf84029385_jukan-tateisi-bJhT_8nbUA0-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className='ctgTitle'>The First Time To Be Me</NavLink>
              <p className="ctgDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="ctgDate">
                <span className="ctgyear">9/9/2022</span>
                <span className="ctgdot"> - </span>
                <NavLink to='/' className='ctgperson'>Martha Collins</NavLink>
                <hr />
              </div>
            </div>
            <div className="ctgBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/6303550738e59e4e53262604_jose-aljovin-JZMdGltAHMo-unsplash-1.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className='ctgTitle'>Green Transition Is Happening Fast</NavLink>
              <p className="ctgDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="ctgDate">
                <span className="ctgyear">9/9/2022</span>
                <span className="ctgdot"> - </span>
                <NavLink to='/' className='ctgperson'>Liv Gunther</NavLink>
                <hr />
              </div>
            </div>
            <div className="ctgBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62d80701f42d0c14a9032233_daniel-schludi-mbGxz7pt0jM-unsplash-1-p-1600.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className='ctgTitle'>Believing Their Own Hype</NavLink>
              <p className="ctgDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="ctgDate">
                <span className="ctgyear">9/9/2022</span>
                <span className="ctgdot"> - </span>
                <NavLink to='/' className='ctgperson'>Thomas Newman</NavLink>
                <hr />
              </div>
            </div>
            <div className="ctgBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fb85065c5d9883969e7d23_arnel-hasanovic-Nl-SXO4FAHw-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className='ctgTitle'>Online Travel Planning</NavLink>
              <p className="ctgDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="ctgDate">
                <span className="ctgyear">9/9/2022</span>
                <span className="ctgdot"> - </span>
                <NavLink to='/' className='ctgperson'>Thomas Newman</NavLink>
                <hr />
              </div>
            </div>
            <div className="ctgBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fbad0697df1606246f3a32_aaron-burden-cEukkv42O40-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className='ctgTitle'>Heat Waves Are Changing</NavLink>
              <p className="ctgDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="ctgDate">
                <span className="ctgyear">9/9/2022</span>
                <span className="ctgdot"> - </span>
                <NavLink to='/' className='ctgperson'>Thomas Newman</NavLink>
                <hr />
              </div>
            </div>
            <div className="ctgBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62d807764444514ab2f45967_francesco-WznI2IRqxZA-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className='ctgTitle'>Let’s Go Invent Tomorrow</NavLink>
              <p className="ctgDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="ctgDate">
                <span className="ctgyear">9/9/2022</span>
                <span className="ctgdot"> - </span>
                <NavLink to='/' className='ctgperson'>Liv Gunther</NavLink>
                <hr />
              </div>
            </div>
            <div className="ctgBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fb83d538096236558fdbc4_niklas-ohlrogge-EFIvaYLABmU-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className='ctgTitle'>What To Do With Your Life</NavLink>
              <p className="ctgDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="ctgDate">
                <span className="ctgyear">9/9/2022</span>
                <span className="ctgdot"> - </span>
                <NavLink to='/' className='ctgperson'>Martha Collins</NavLink>
                <hr />
              </div>
            </div>
            <div className="ctgBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/630386b3d2d07a01c197af1d_raamin-ka-0qJBEzudn5E-unsplash-1-p-800.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className='ctgTitle'>Find Out Why This Is The Right</NavLink>
              <p className="ctgDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="ctgDate">
                <span className="ctgyear">9/9/2022</span>
                <span className="ctgdot"> - </span>
                <NavLink to='/' className='ctgperson'>Enzo Romano</NavLink>
                <hr />
              </div>
            </div>
            <div className="ctgBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dea6da1d266f322559d6ae_jonathan-pielmayer-ecbZ5gEE-60-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className='ctgTitle'>Amazed With Tastes</NavLink>
              <p className="ctgDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="ctgDate">
                <span className="ctgyear">9/9/2022</span>
                <span className="ctgdot"> - </span>
                <NavLink to='/' className='ctgperson'>Thomas Newman</NavLink>
                <hr />
              </div>
            </div>
            <div className="ctgBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dffa21c6e00c3079113d1f_jurica-koletic-oLU63uzhT88-unsplash-1-p-500.jpg"
                alt="img"
                className="img-fluid"
              />
              <NavLink to="/" className='ctgTitle'>No Fear Of Perfection</NavLink>
              <p className="ctgDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div className="ctgDate">
                <span className="ctgyear">9/9/2022</span>
                <span className="ctgdot"> - </span>
                <NavLink to='/' className='ctgperson'>Martha Collins</NavLink>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
