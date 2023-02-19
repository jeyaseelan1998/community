import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand community-name" href="#">
        #இளஞ்சிட்டுகள்
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <a className="nav-link active" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
          <a className="nav-link" href="#">
            About Me
          </a>
          <a className="nav-link" href="#">
            Projects
          </a>
          <a className="nav-link" href="#">
            Testimonials
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
