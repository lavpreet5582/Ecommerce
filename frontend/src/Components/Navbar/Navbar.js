import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate('/login');
  }
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
                <button className="btn btn-outline-success" type="button">
                  Search
                </button>
              </form>
              <button className="btn btn-outline-success mx-2" type="button" onClick={()=>{handleSignIn()}}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
