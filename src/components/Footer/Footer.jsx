import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="row align-items-center">
          <div className="ftLeft col-lg-4">
            <NavLink to="/">
              {" "}
              <img
                src="https://assets.website-files.com/62961e0b9edf3034fa4a43b2/630f376f43db29ae1240bdc3_white-The-daily-work-logo.svg"
                alt="img"
                className="w-75"
              />
            </NavLink>
            <div className="ftleftbottom">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/">About</NavLink>
              <NavLink to="/">Contact</NavLink>
              <NavLink to="/">Image Licensing</NavLink>
            </div>
          </div>
          <div className="ftCenter col-lg-4 text-center">
            <div className="ftcentertext mb-3">Socials</div>
            <div className="socialicon">
              <NavLink to="/">
                <img
                  src="https://assets.website-files.com/62961e0b9edf3034fa4a43b2/630f759e65fd9e1f7102d03e_icons8-twitter%20(2).svg"
                  alt=""
                  className="img-fluid"
                />
              </NavLink>
              <NavLink to="/">
                <img
                  src="https://assets.website-files.com/62961e0b9edf3034fa4a43b2/630f759ef11e03fced2a642a_icons8-facebook-f%20(1).svg"
                  alt=""
                  className="fb"
                />
              </NavLink>
              <NavLink to="/">
                <img
                  src="https://assets.website-files.com/62961e0b9edf3034fa4a43b2/630f759e116ccf35d3243457_icons8-linkedin-2%20(1).svg"
                  alt=""
                />
              </NavLink>
            </div>
          </div>
          <div className="ftRight col-lg-4 mt-5">
            <p>© 2022  Made with <a href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyF1l2-U-oJC4RGq9JpS7iMsD33NKSHo4tbw&usqp=CAU' target='_blank'>LMNNCT</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
