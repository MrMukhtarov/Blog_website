import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Contact.css";
import Subscribe from "../../components/Subscribe/Subscribe.jsx";

const Contact = () => {
    useEffect(() => {
        document.title = 'Contact';
      });
  return (
    <section className="contact">
      <div className="container">
        <div className="row all">
          <div className="contactleft col-lg-5">
            <h1 className="contactLeftTitle mb-5">
              We’d love to connect with you.
            </h1>
            <NavLink to="#" className="contactLeftLink">
              hello@thedailywork.us
            </NavLink>
            <div className="mt-5">
              <strong>
                59 West 46th Street, <br /> New York City, NY 10036
              </strong>
            </div>
          </div>
          <div className="contactright col-lg-6">
            <div className="form row">
              <div className="fname col-lg-6">
                <label htmlFor="firstname">FIRST NAME</label>
                <input type="text" id="firstname" />
              </div>
              <div className="lname col-lg-6">
                <label htmlFor="lastname">FIRST NAME</label>
                <input type="text" id="lastname" />
              </div>
              <div className="email">
                <label htmlFor="email">EMAIL</label>
                <input type="email" id="email" />
              </div>
              <div className="msg">
                <label htmlFor="message">MESSAGE</label>
                <textarea name="" id="messageF" cols="48" rows="5"></textarea>
              </div>
            </div>
            <button>SEND</button>
          </div>
        </div>
      </div>
      <Subscribe />
    </section>
  );
};

export default Contact;
