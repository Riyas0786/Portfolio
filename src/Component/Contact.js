import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Portfolio() {
  return (
   
<div>
    

      
      
      {/* Contact */}
      <section id="contact" className="py-5 text-center rounded container my-4">
        <h2 className="mb-3 text-black">Contact Me</h2>
        <h5 className="text-black">
          Email:{" "}
          <a
            href="mailto:riyaskhanm2001@gmail.com"
            className="text-decoration-none text-black"
          >
            riyaskhanm2001@gmail.com
          </a>
        </h5>

        <button
          className="btn btn-dark my-3 d-block mx-auto"
          onClick={() => (window.location.href = "tel:+9159658882")}
        >
          📞 Call: 9159658882
        </button>

        <div className="mt-3">
          <a
            href="https://github.com/riyas0786"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark me-2"
          >
            <i className="bi bi-github"></i> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/riyas-khan-3b6939370"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info text-white me-2"
          >
            <i className="bi bi-linkedin"></i> LinkedIn
          </a>

          <a href="/RiyasKhanCV.pdf" download className="btn btn-success">
            <i className="bi bi-download"></i> Download CV
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        © {new Date().getFullYear()} Riyas Khan. All rights reserved.
      </footer>
    </div>
  );
}

export default Portfolio;
