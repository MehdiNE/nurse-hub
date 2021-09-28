import React, { useState } from "react";
import { Button } from "./Button";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="hnavbar">
        <Button />
        <div className="hmenu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "hnav-menu hactive" : "hnav-menu"}>
          <li className="hnav-item">
            <NavLink
              activeClassName="active"
              to="/About"
              className="hnav-links"
              onClick={closeMobileMenu}
            >
              درباره
            </NavLink>
          </li>

          <li className="hnav-item">
            <NavLink
              activeClassName="active"
              to="/Services"
              className="hnav-links"
              onClick={closeMobileMenu}
            >
              خدمات
            </NavLink>
          </li>
          <li className="hnav-item">
            <NavLink
              activeClassName="active"
              to="/"
              exact
              className="hnav-links"
              onClick={closeMobileMenu}
            >
              صفحه اصلی
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-up"
              className="hnav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
        <Link to="/" exact className="hnavbar-logo" onClick={closeMobileMenu}>
          Nurse
          <i class="fab fa-firstdraft" />
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
