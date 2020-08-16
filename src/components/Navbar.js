import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavList = styled.ul``;
const StyledNav = styled.nav`
  background: #141e30; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #243b55,
    #141e30
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #243b55,
    #141e30
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

function Navbar() {
  return (
    <div>
      {" "}
      <div>
        <StyledNav>
          <nav className="navbar navbar-expand-lg ">
            <Link className="navbar-brand" to="/">
              martha cv
            </Link>
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
              <NavList>
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/resume">
                      Resume
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/project">
                      Project
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </NavList>
            </div>
          </nav>
        </StyledNav>
      </div>
    </div>
  );
}

export default Navbar;
