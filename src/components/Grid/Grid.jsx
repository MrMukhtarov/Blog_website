import React from "react";
import { NavLink } from "react-router-dom";
import "./Grid.css";

const Grid = () => {
  return (
    <section className="grid mt-5">
      <div className="gridContainer">
        <div className="row all">
          <div className="col-lg-3 gridLeft">
            <div className="mb-3 gridDesign">DESIGN</div>
            <div className="gridLeftItem">
              <div className="left col-lg-6">
                <img
                  src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/63035dbdc5a73eb524987f64_sharan-pagadala-bWQPgLMJ7sg-unsplash-1-p-800.jpg"
                  alt=""
                />
              </div>
              <div className="right col-lg-5">
                <NavLink to="/">
                  Manual <br /> Informative <br /> Place
                </NavLink>
                <span>21/05/2008</span>
              </div>
            </div>
            <hr className="mt-5 gridHr" />
            <div className="gridLeftItem">
              <div className="left col-lg-6">
                <img
                  src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dffa21c6e00c3079113d1f_jurica-koletic-oLU63uzhT88-unsplash-1-p-500.jpg"
                  alt=""
                />
              </div>
              <div className="right col-lg-5">
                <NavLink to="/">No Fear Of Perfection</NavLink>
                <span>21/05/2008</span>
              </div>
            </div>
            <hr className="mt-5 gridHr" />
            <div className="gridLeftItem">
              <div className="left col-lg-6">
                <img
                  src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62da97f718f65c2169b78a5c_yuichi-kageyama-iGompEDkVV8-unsplash-1-p-500.jpg"
                  alt=""
                />
              </div>
              <div className="right col-lg-5">
                <NavLink to="/">The Light Goes Out</NavLink>
                <span>21/05/2008</span>
              </div>
            </div>
            <hr className="mt-5 gridHr" />
            <div className="gridLeftItem">
              <div className="left col-lg-6">
                <img
                  src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62da97c847f6452eb020aaa1_fredrika-carlsson-xEQpc-who84-unsplash-1-p-500.jpg"
                  alt=""
                />
              </div>
              <div className="right col-lg-5">
                <NavLink to="/">Your Comfort Zone</NavLink>
                <span>21/05/2008</span>
              </div>
            </div>
            <hr className="mt-5 gridHr" />
          </div>

          <div className="col-lg-5 gridCenter">
            <img
              src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62d80701f42d0c14a9032233_daniel-schludi-mbGxz7pt0jM-unsplash-1-p-1600.jpg"
              alt=""
              className="mb-3"
            />
            <NavLink to="/" className="first">
              Believing Their Own Hype
            </NavLink>
            <div className="status mt-3 mb-3">Temporibus modi voluptate</div>
            <span>By</span>
            <NavLink to="/" className="second">
              Thomas Newman
            </NavLink>
          </div>
          <div className="col-lg-4 gridRight">
            <div className="top row">
              <div className="opinion">OPINION</div>
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/6303550738e59e4e53262604_jose-aljovin-JZMdGltAHMo-unsplash-1.jpg"
                alt=""
                className="gridrighimg"
              />
              <NavLink to="/" className="first">
                Green Transition Is Happening Fast
              </NavLink>
              <NavLink to="/" className="second">
                Liv Gunther
              </NavLink>
            </div>
            <hr />
            <div className="bottom row">
              <div className="girdbottomleft col-lg-6">
                <img
                  src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fb6f9d9facc873b2f3e884_ana-flavia-kR5VQr3-L9w-unsplash-1-p-1600.jpg"
                  alt="img"
                  className="img-fluid"
                />
                <div className="row"><NavLink to='/' className='first'>2 Wrongs Makes a Right</NavLink>
                <NavLink to='/' className='second'>Thomas Newman</NavLink></div>
              </div>
              <div className="gridbottomleft col-lg-6">
              <img
                  src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62fb6e7a6b97cae240a937e1_patrick-tomasso-Oaqk7qqNh_c-unsplash-1.jpg"
                  alt="img"
                  className="img-fluid"
                />
                <div className="row"><NavLink to='/' className='first'>Is There Any End</NavLink>
                <NavLink to='/' className='second'>Liv Gunther</NavLink></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
