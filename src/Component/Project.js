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
      <section id="projects" className="container-fluid my-5 bg-white">
        <h2 className="text-center mb-5 fw-bold section-heading mx-auto bg-white w-25 text-warning">
          PROJECTS
        </h2>

        <div className="row justify-content-center">
        <motion.div
  className="col-12 rounded shadow bg-light w-75 fs-3 p-3"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <Carousel interval={2500} controls indicators>
              <Carousel.Item>
                <img src={projectimg} alt="Home Page" className="d-block w-100 img-fluid" />
                <div className="carousel-text text-center mt-2">
                  <h5 className="text-warning">Home Page</h5>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <img src={menuimg} alt="Menu Page" className="d-block w-100 img-fluid" />
                <div className="carousel-text text-center mt-2">
                  <h5 className="text-warning">Menu Page</h5>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <img src={accountimg} alt="Account Page" className="d-block w-100 img-fluid" />
                <div className="carousel-text text-center mt-2">
                  <h5 className="text-warning">Account Page</h5>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <img src={cartimg} alt="Cart Page" className="d-block w-100 img-fluid" />
                <div className="carousel-text text-center mt-2">
                  <h5 className="text-warning">Cart Page</h5>
                </div>
              </Carousel.Item>
            </Carousel>


            <h5 className="mt-3 fw-bold fs-2">PROJECT SHOWCASE</h5>
            <p>
              My projects reflect hands-on problem-solving with real-world
              challenges. They demonstrate my ability to connect frontend and
              backend systems while keeping user needs in mind. Each project is
              a step towards building better, scalable applications.
            </p>
            <h5>
              <a
                href="https://burgerhouse-iota.vercel.app/"
                
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
