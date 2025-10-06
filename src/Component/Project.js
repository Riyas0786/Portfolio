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
      <section id="projects" className="container border border-primary project-card my-5 ">
        <h2 className="text-center mb-5 fw-bold section-heading mx-auto rounded  bg-dark w-50 text-warning">
          PROJECTS
        </h2>

        <div className="row justify-content-center">
        <motion.div
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


            <h5 className="mt-3 fw-bold text-warning fs-2">PROJECT SHOWCASE</h5>
            <h5 className="text-white">I did my academic project on food booking web application name <strong className="text-warning">BURGER HOUSE</strong>
            It had a <strong className="text-warning">menu,add to cart,contact,account</strong> all essential requirements
            and deployed to github and vercel with a live server.I attached website link below kindly visit the website.
             
            </h5>
            <h5>
              <a
                href="https://burgerhouse-iota.vercel.app/"
                
              ><i className="bi bi-link-45deg fs-3 ">
                View live project
              </i></a>
            </h5>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Project;
