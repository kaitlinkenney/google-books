import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
         
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
              className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
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