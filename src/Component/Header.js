import React from "react";
import bannerimg from '../Assets/bannerimg.jpg'
function Header() {
  return (
    <>
      <section className=" d-flex flex-column justify-content-between">


        {/* Navbar */}
        <nav className="navbar bg-light shadow-sm py-2">
          <div className="container-fluid">
                    <img src={bannerimg}className="img-fluid w-100" alt="banner"
              style={{ maxHeight: "350px", objectFit: "cover" }}
            />
            <ul className="nav mx-auto gap-3">
              <li className="nav-item">
                <a
                  className="nav-link text-black fw-bold rounded-pill px-3"
                  href="#skills">
                  SKILLS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-black fw-bold rounded-pill px-3"
                  href="#projects"
                >
                  PROJECTS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-black fw-bold rounded-pill px-3"
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
