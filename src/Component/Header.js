import React from "react";
import bannerimg from '../assets/bannerimg.jpg';

function Header() {
  return (
    <>
      <section className="d-flex flex-column justify-content-between">
        {/* Navbar */}
        <nav className="navbar bg-light shadow-sm py-2 flex-column">
          {/* Banner Image Full Width */}
          <img
            src={bannerimg}
            alt="bannerimg"
            className="img-fluid w-100"
            style={{
              height: "300px",        // adjust height (e.g. 200–300px)
              objectFit: "cover"      // ensures image covers area without stretching
            }}
          />

          <div className="container-fluid mt-2">
            <ul className="nav mx-auto gap-3 flew-nowrap ">
              <li className="nav-item">
                <a
                  className="nav-link text-primary fw-bold rounded shadow pill "
                  href="#skills"
                >
                  SKILLS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-warning fw-bold rounded shadow pill"
                  href="#projects"
                >
                  PROJECTS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-success fw-bold rounded shadow pill "
                  href="#contact"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Header;
