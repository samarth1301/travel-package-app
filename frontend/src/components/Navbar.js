

import React from "react";
import logo from '../img/logo-100.png';

function Navbar() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  }

  return (
    <div className="header pb-3">
      <nav className="navbar ps-5 navbar-expand-lg navbar-dark header">
        <h1 className="nav-title">
            <a href="/home" className="navbar-brand">
            <img className="me-2" width="75" height="75" src={logo} alt="TourEase Logo" />
            TourEase
            </a>
        </h1>
        

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav nav-menu ml-auto me-5 d-flex justify-content-center align-items-center">
            <li className="nav-item">
              <a href="/home" className="nav-link home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link contact">
                Contact
              </a>
            </li>
            {user ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="uname">
                     <i className="fa-solid fa-user me-2"></i>
                  
                  {user.name}
                  </span>
                 
                  
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item text-dark" href="/profile">
                    Profile
                  </a>
                  <a className="dropdown-item text-dark" href="/" onClick={logout}>
                    Logout
                  </a>
                </div>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <a href="/register" className="nav-name">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-name">
                    Login
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
