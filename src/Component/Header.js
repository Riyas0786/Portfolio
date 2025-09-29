import React from "react";
import bannerimg from "../Assets/Bannerimg.jpg";

function Header() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar bg-black sticky-top">
        <div className="container d-flex  align-items-center ">
          <a className="navbar-brand fw-bold text-white" href="#hero">
            Portfolio
          </a>
          <ul className="navlinks mx-auto d-flex m-0 p-0">
            <li className="nav-item">
              <a className="nav-link text-black rounded-pill" href="#skills">SKILLS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black rounded-pill" href="#projects">PROJECT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black rounded-pill" href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        id="hero"
        className="portfolio-hero text-center d-flex flex-column align-items-center justify-content-center"
      >
        <img
          src={bannerimg}
          alt="Full Stack Developer"
          className="img-fluid rounded hero-img "
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />
        
      </header>
    </>
  );
}

export default Header;
