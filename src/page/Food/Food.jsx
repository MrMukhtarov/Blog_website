import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Food.css'

const Food = () => {
  useEffect(() => {
    document.title = 'Food';
  });
  return (
    <section className="food mb-5">
    <div className="foodContainer">
      <div className="all">
        <div className="foodName">FOOD</div>
        <div className="foodBoxes row">
          <div className="foodBox col-lg-3">
            <img
              src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dfda96a34b9f830e0f7f7e_emy-XoByiBymX20-unsplash-1-p-500.jpg"
              alt="img"
              className="img-fluid"
            />
            <NavLink to="/" className='foodTitle'>Exploring Culinary Corridor</NavLink>
            <p className="foodDesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="foodDate">
              <span className="foodyear">10/7/2022</span>
              <span className="fooddot"> - </span>
              <NavLink to='/' className='foodperson'>Martha Collins</NavLink>
              <hr />
            </div>
          </div>
          <div className="foodBox col-lg-3">
            <img
              src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dea6da1d266f322559d6ae_jonathan-pielmayer-ecbZ5gEE-60-unsplash-1-p-500.jpg"
              alt="img"
              className="img-fluid"
            />
            <NavLink to="/" className='foodTitle'>Amazed With Tastes</NavLink>
            <p className="foodDesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="foodDate">
              <span className="foodyear">7/6/2022</span>
              <span className="fooddot"> - </span>
              <NavLink to='/' className='foodperson'>Thomas Newman</NavLink>
              <hr />
            </div>
          </div>
          <div className="foodBox col-lg-3">
            <img
              src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dea721487e20438d8e9d75_sahand-babali-q1SQqb9zEF8-unsplash-1-p-500.jpg"
              alt="img"
              className="img-fluid"
            />
            <NavLink to="/" className='foodTitle'>The Compassionate Road</NavLink>
            <p className="foodDesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="foodDate">
              <span className="foodyear">9/22/2021</span>
              <span className="fooddot"> - </span>
              <NavLink to='/' className='foodperson'>Thomas Newman</NavLink>
              <hr />
            </div>
          </div>
          <div className="foodBox col-lg-3">
            <img
              src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dfcda256b8041b7ceab72d_vita-marija-murenaite-eSeo6IzOV00-unsplash-1-p-500.jpg"
              alt="img"
              className="img-fluid"
            />
            <NavLink to="/" className='foodTitle'>Eating My Empire</NavLink>
            <p className="foodDesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="foodDate">
              <span className="foodyear">3/3/2021</span>
              <span className="fooddot"> - </span>
              <NavLink to='/' className='foodperson'>Thomas Newman</NavLink>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Food