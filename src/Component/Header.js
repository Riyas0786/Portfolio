import React from "react";

function Header() {
  return (
    <>
      <section className="fixedbackground d-flex flex-column justify-content-between">
        {/* Hero Section */}
        <header className="d-flex flex-column justify-content-center align-items-center text-center flex-grow-1">
          <h1 className="text-white bg-primary px-4 py-2 rounded opacity-75">
            RIYAS KHAN M
          </h1>
          <h5 className="text-white mt-3">Aspiring Web Developer</h5>
        </header>

        {/* Navbar */}
        <nav className="navbar bg-light shadow-sm py-2">
          <div className="container">
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
