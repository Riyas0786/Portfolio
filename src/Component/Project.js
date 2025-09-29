import React from "react";
import projectimg from "../Assets/project.png";
import cartimg from "../Assets/Project/cart.png";
import accountimg from "../Assets/Project/account.png";
import menuimg from "../Assets/Project/Menu.png";
import { motion } from "framer-motion";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";  

function Project() {
  return (
    <>
      {/* Projects */}
      <section id="projects" className="container-fluid my-5">
        <h2 className="text-center mb-5 fw-bold section-heading mx-auto bg-white w-25 text-warning">
          PROJECTS
        </h2>

        <div className="row justify-content-center">
          <motion.div
            className="col-12 rounded shadow p-4 w-75 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Carousel interval={2500} controls indicators>
              <Carousel.Item>
                <img
                  src={projectimg}
                  alt="Home Page"
                  className="d-block w-100 img-fluid"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
         
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src={menuimg}
                  alt="Menu Page"
                  className="d-block w-100 img-fluid"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
         
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src={accountimg}
                  alt="Account Page"
                  className="d-block w-100 img-fluid"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
  
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src={cartimg}
                  alt="Cart Page"
                  className="d-block w-100 img-fluid"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
                
              </Carousel.Item>
            </Carousel>

            <h5 className="mt-3">Project Showcase</h5>
            <p>
              My projects reflect hands-on problem-solving with real-world
              challenges. They demonstrate my ability to connect frontend and
              backend systems while keeping user needs in mind. Each project is
              a step towards building better, scalable applications.
            </p>
            <h5>
              <a
                href="https://burgerhouse-iota.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View live project
              </a>
            </h5>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Project;
