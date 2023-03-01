import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
        <div className="container">
          <Link to={"/"} className="navbar-brand community-name" href="#">
            #இளஞ்சிட்டுகள்
          </Link>
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
              <Link to={"/"} className="nav-link active" href="#" id="navItem1">
                Home <span className="sr-only">(current)</span>
              </Link>
              <Link
                to={"/addmovie"}
                className="nav-link"
                href="#"
                id="navItem2"
              >
                Add movie
              </Link>
              <Link
                to={"deletemovie"}
                className="nav-link"
                href="#"
                id="navItem3"
              >
                Delete movie
              </Link>
              <Link
                to={"chat"}
                className="nav-link"
                id="navItem4"
              >
                Chat
              </Link>
            </div>
          </div>
        </div>
      </nav>

        <Outlet />
    </>
  );
};

export default NavBar;
