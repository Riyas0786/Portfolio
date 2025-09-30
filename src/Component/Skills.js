import React from 'react';
import frontendimg from "../Assets/frontendimg.jpg";
import javaimg from "../Assets/Javaimg.webp";
import mysqlimg from "../Assets/mysql.png";
import gitimg from "../Assets/git.png";
import { motion } from "framer-motion";

function Skills() {
  return (
    <>
      {/* Skills */}
      <section id="skills" className="container-fluid my-5">
        <h2 className="text-center mb-5 fw-bold rounded  text-primary bg-light w-25 mx-auto">
          TOP SKILLS
        </h2>

        {/* Frontend */}
        <div className="row align-items-center mb-5">
          {/* Text */}
          <div className="col-12 col-lg-7 text-end pe-lg-4 mb-3 mb-lg-0">
            <h1 className="fw-bold text-start text-primary">FRONTEND</h1>
            <h4 className="text-white text-start">
              I specialize in designing modern, responsive interfaces that adapt
              seamlessly across devices. My frontend approach emphasizes both
              performance and accessibility, ensuring that every user enjoys a
              smooth experience.
            </h4>
          </div>

          {/* Card */}
          <motion.div
            className="col-12 col-lg-5 bg-white rounded shadow mx-auto text-center p-3"
            style={{ maxWidth: "350px" }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={frontendimg}
              alt="Frontend"
              className="img-fluid mb-3"
              style={{ height: "180px", objectFit: "contain" }}
            />
            <h4>Frontend</h4>
            <p>HTML, CSS, JavaScript, React</p>
          </motion.div>
        </div>

        {/* Backend */}
        <div className="row align-items-center mb-5">
          {/* Card */}
          <motion.div
            className="col-12 col-lg-5 bg-white rounded shadow mx-auto text-center p-3 mb-3 mb-lg-0"
            style={{ maxWidth: "350px" }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={javaimg}
              alt="Backend"
              className="img-fluid mb-3"
              style={{ height: "180px", objectFit: "contain" }}
            />
            <h4>Backend</h4>
            <p>Java, Spring Boot, REST APIs</p>
          </motion.div>

          {/* Text */}
          <div className="col-12 col-lg-7 ps-lg-4">
            <h1 className="fw-bold text-primary">BACKEND</h1>
            <h4 className="text-white text-start">
              On the backend, I focus on creating robust and scalable APIs that
              can handle real-world traffic. My work ensures that applications
              are not only functional but also secure, reliable, and easy to
              maintain in the long run.
            </h4>
          </div>
        </div>

        {/* Database */}
        <div className="row align-items-center mb-5">
          {/* Text */}
          <div className="col-12 col-lg-7 text-end pe-lg-4 mb-3 mb-lg-0">
            <h1 className="fw-bold text-start text-primary">DATABASE</h1>
            <h4 className="text-white text-start">
              Managing data efficiently is at the core of my development
              practice. I work on optimizing queries, designing logical schemas,
              and ensuring that databases scale gracefully as applications grow
              in size and complexity.
            </h4>
          </div>

          {/* Card */}
          <motion.div
            className="col-12 col-lg-5 bg-white rounded shadow mx-auto text-center p-3"
            style={{ maxWidth: "350px" }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={mysqlimg}
              alt="Database"
              className="img-fluid mb-3"
              style={{ height: "180px", objectFit: "contain" }}
            />
            <h4>Database</h4>
            <p>MySQL, Query Optimization</p>
          </motion.div>
        </div>

        {/* Tools */}
        <div className="row align-items-center mb-5">
          {/* Card */}
          <motion.div
            className="col-12 col-lg-5 bg-white rounded shadow mx-auto text-center p-3 mb-3 mb-lg-0"
            style={{ maxWidth: "350px" }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={gitimg}
              alt="Tools"
              className="img-fluid mb-3"
              style={{ height: "180px", objectFit: "contain" }}
            />
            <h4>Tools</h4>
            <p>Git, GitHub, Deployment</p>
          </motion.div>

          {/* Text */}
          <div className="col-12 col-lg-7 ps-lg-4">
            <h1 className="fw-bold text-primary">TOOLS</h1>
            <h4 className="text-white">
              I use Git and GitHub extensively for version control, ensuring
              smooth collaboration and project tracking. Alongside, I am
              familiar with deployment pipelines that help automate and simplify
              the release process.
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
