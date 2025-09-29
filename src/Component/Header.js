import React from "react";
import fullstack from "../Assets/full stack img.jpg";

function Header() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar bg-dark sticky-top">
        <div className="container d-flex justify-content-between align-items-center">
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
          src={fullstack}
          alt="Full Stack Developer"
          className="img-fluid rounded hero-img mb-5"
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />
        <h1 className="fw-bold text-black">RIYAS KHAN</h1>
        <h5 className="lead fw-bold text-black">
          Full Stack Developer | React, Java, Spring Boot
        </h5>
      </header>
    </>
  );
}

export default Header;
