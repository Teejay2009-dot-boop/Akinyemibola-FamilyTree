// src/components/Navbar.jsx

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        data-aos="fade-down"
        data-aos-duration="2000"
        class="navbar navbar-expand-sm navbar-dark bg-dark w-100 sticky-top"
      >
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="#">
            AKINLEMIBOLA'S
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarID"
            aria-controls="navbarID"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarID">
            <div class="navbar-nav ms-auto text-secondary">
              <li className="nav-item ">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tree">
                  Family Tree
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lineage">
                  Lineage
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  Profiles
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
