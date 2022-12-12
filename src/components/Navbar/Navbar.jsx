import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css"


const Navbar = () => {
  return (
    <>
      <nav className={`sticky-top navbar navbar-expand-lg bg-light ${style.navbar}` } >
        <div className="container ">
          <Link to="/book" className={`navbar-brand ${style.logo}`} href="#">
            Book App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/book" className="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
              <Link to="/favorites" className="nav-link active" aria-current="page" href="#">
                Favorite
                <i class="fas fa-heart px-1 text-danger"></i>
              </Link>
            </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
