import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar(props) {
    return (
        <div >
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
         
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/saved"
              className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
            >
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
        </div>
    );
}

export default Navbar;