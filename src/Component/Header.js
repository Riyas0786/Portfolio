import React from "react";
import bannerimg from '../Assets/bannerimg.png';

function Header() {
  return (
    <>
      <section className="d-flex flex-column justify-content-between">
        {/* Navbar */}
        <nav className="navbar bg-muted shadow-sm py-2 flex-column">
          {/* Banner Image Full Width */}
          <img
            src={bannerimg}
            alt="bannerimg"
            className="img-fluid w-100 p-2"
            style={{
              height: "350px",        
              objectFit: "cover",
              borderRadius:'20px'      
            }}
          />

          <div className="container-fluid mt-2">
            <ul className="nav mx-auto gap-3 flew-nowrap ">
              <li className="nav-item">
                <a
                  className="nav-link text-primary fw-bold rounded bg-light shadow pill fs-6 "
                  href="#skills"
                >
                  SKILLS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-warning fw-bold rounded bg-light shadow pill"
                  href="#projects"
                >
                  PROJECTS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-danger fw-bold rounded bg-white shadow pill fs-6"
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
