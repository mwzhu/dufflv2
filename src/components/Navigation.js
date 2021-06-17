import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Duffl
          </Link>

          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/shop" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/cart" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/account" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/account">
                  Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);