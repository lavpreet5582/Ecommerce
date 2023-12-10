import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

export const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const handleSignIn = () => {
    navigate("/login");
  };
  const handleSignOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <button
          className="btn float-start"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas"
        >
          <i
            className="bi bi-list fs-3"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
          ></i>
        </button>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Shopping
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about-us">
                  AboutUs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="nav-search-login d-flex justify-content-between">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  data-tooltip-id="search-tooltip"
                  className="btn btn-outline-success"
                  type="button"
                >
                  <i className="bi bi-search"></i>
                </button>
              </form>
              <button
                data-tooltip-id="cart-tooltip"
                className="btn btn-outline-success mx-1"
                type="button"
              >
                <i className="bi bi-cart2"></i>
              </button>
              {user ? (
                <button
                  data-tooltip-id="logout-tooltip"
                  className="btn btn-outline-success mx-2"
                  type="button"
                  onClick={() => {
                    handleSignOut();
                  }}
                >
                  <i className="bi bi-box-arrow-right"></i>
                </button>
              ) : (
                <button
                  data-tooltip-id="login-tooltip"
                  className="btn btn-outline-success mx-2"
                  type="button"
                  onClick={() => {
                    handleSignIn();
                  }}
                >
                  <i className="bi bi-box-arrow-in-right"></i>
                </button>
              )}
              {/* <button className="btn btn-outline-success mx-2" type="button" onClick={()=>{handleSignIn()}}>
                Sign In
              </button> */}
            </div>
            <Tooltip
              id="search-tooltip"
              place="bottom"
              content="Search"
            ></Tooltip>
            <Tooltip id="cart-tooltip" place="bottom" content="Cart"></Tooltip>
            <Tooltip
              id="login-tooltip"
              place="bottom"
              content="Login"
            ></Tooltip>
            <Tooltip
              id="logout-tooltip"
              place="bottom"
              content="Logout"
            ></Tooltip>
          </div>
        </div>
      </nav>
    </>
  );
};
