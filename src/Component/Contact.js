import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Portfolio() {
  return (
    <div>

      <section id="contact" className="container contact-card my-5">
        <h2 className="section-heading text-center text-warning">Contact Me</h2>


        <div className="d-flex flex-column align-items-center gap-3">
          {/* Email */}
          <div className="contact-card d-flex align-items-center fs-3 gap-2 ">
            <i className="bi bi-envelope-fill fs-4 text-warning"></i>
            <a
              href="mailto:riyaskhanm2001@gmail.com"
              className="text-decoration-none fs-5 text-white"
            >
              riyaskhanm2001@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div
            className="contact-card d-flex align-items-center justify-content-center gap-2 "
            style={{ cursor: "pointer" }}
            onClick={() => (window.location.href = "tel:+9159658882")}
          >
            <i className="bi bi-telephone-fill fs-5 text-primary"></i>
            <span className="fs-5 text-white">9159658882</span>
          </div>
        </div>

      
        <div className="mt-5 d-flex flex-wrap justify-content-center gap-3 ">
          <a
            href="https://github.com/riyas0786"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn text-white d-flex align-items-center gap-2 fs-6" style={{backgroundColor:'black'}}
          >
            <i className="bi bi-github fs-5"></i> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/riyas-khan-3b6939370"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn text-white d-flex align-items-center gap-2" style={{backgroundColor:'blue'}}
          >
            <i className="bi bi-linkedin fs-5"></i> LinkedIn
          </a>

          <a
            href="/RiyasKhanCV.pdf"
            download
            className="btn btn-success d-flex align-items-center gap-2"
          >
            <i className="bi bi-download fs-5"></i> Resume
          </a>
        </div>

               
      </section>
    </div>
  );
}

export default Portfolio;
