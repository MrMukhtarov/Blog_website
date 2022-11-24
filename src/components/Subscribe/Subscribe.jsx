import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <section className="subscribe">
        <div className="Suball">
            <h1>Subscribe to The Newsletters</h1>
            <p>Connected to the Most Critical Events</p>
            <form>
              <input type="email" placeholder='Email'/>
              <button>Subscribe</button>
            </form>
        </div>
    </section>
  )
}

export default Subscribe