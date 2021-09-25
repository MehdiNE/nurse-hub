import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
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
            <Link to="/About" className="hnav-links" onClick={closeMobileMenu}>
              درباره
            </Link>
          </li>

          <li className="hnav-item">
            <Link
              to="/Services"
              className="hnav-links"
              onClick={closeMobileMenu}
            >
              خدمات
            </Link>
          </li>
          <li className="hnav-item">
            <Link to="/home" className="hnav-links" onClick={closeMobileMenu}>
              صفحه اصلی
            </Link>
          </li>
          <li>
            <Link
              to="/sign-up"
              className="hnav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Link to="/" className="hnavbar-logo" onClick={closeMobileMenu}>
          Nurse
          <i class="fab fa-firstdraft" />
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
