import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="nav-bar">
        <ul className="nav-ul">
          <li className="nav-li">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/blogs">
              Blogs
            </Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
