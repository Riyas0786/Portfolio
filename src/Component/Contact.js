import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Portfolio() {
  return (
    <div>
      {/* Contact */}
      <section className="fixedbackground2 text-center py-5">
        <h2 id="contact" className="mb-4 text-success fw-bold">
          Contact Me
        </h2>

        {/* Contact Info */}
        <div className="d-flex flex-column align-items-center gap-3">
          {/* Email */}
          <h5 className="text-white d-flex align-items-center gap-2">
            <i className="bi bi-envelope-fill fs-4 text-warning"></i>
            <a
              href="mailto:riyaskhanm2001@gmail.com"
              className="text-decoration-none fs-5 text-white"
            >
              riyaskhanm2001@gmail.com
            </a>
          </h5>

          {/* Phone */}
          <button
            className="btn btn-danger fs-5 d-flex align-items-center gap-2"
            onClick={() => (window.location.href = "tel:+9159658882")}
          >
            <i className="bi bi-telephone-fill text-white fs-5"></i>
            9159658882
          </button>
        </div>

        {/* Social Links */}
        <div className="mt-5 d-flex flex-wrap justify-content-center gap-3">
          <a
            href="https://github.com/riyas0786"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark d-flex align-items-center gap-2"
          >
            <i className="bi bi-github fs-5"></i> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/riyas-khan-3b6939370"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-white d-flex align-items-center gap-2"
          >
            <i className="bi bi-linkedin fs-5"></i> LinkedIn
          </a>

          <a
            href="/RiyasKhanCV.pdf"
            download
            className="btn btn-success d-flex align-items-center gap-2"
          >
            <i className="bi bi-download fs-5"></i> Download CV
          </a>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
