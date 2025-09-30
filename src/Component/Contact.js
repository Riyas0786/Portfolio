import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Portfolio() {
  return (
   
<div>
    

      
      
      {/* Contact */}
      <section className=" fixedbackground2 text-center" >
        <h2 id='contact'className="mb-3 text-primary" >Contact Me</h2>
        <h5 className="text-white">
          <i className="bi bi-envelope-fill fs-3"></i>{" "}
          <a href="mailto:riyaskhanm2001@gmail.com"
            className="text-decoration-none fs-4 text-white">
            riyaskhanm2001@gmail.com</a>
        </h5>

        <button
          className="btn btn-light my-3 d-block mt-5 mx-auto fs-5"
          onClick={() => (window.location.href = "tel:+9159658882")}
        >
         📞  9159658882
        </button>

        <div className="mt-5">
          <a
            href="https://github.com/riyas0786"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark  me-2"
          >
            <i className="bi bi-github"></i> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/riyas-khan-3b6939370"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary  text-white me-2"
          >
            <i className="bi bi-linkedin"></i> LinkedIn
          </a>

          <a href="/RiyasKhanCV.pdf" download className="btn btn-success my-2 me-2">
            <i className="bi bi-download"></i> Download CV
          </a>
        </div>
      </section>

    </div>
  );
}

export default Portfolio;
