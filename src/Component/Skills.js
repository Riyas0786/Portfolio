import React from 'react'
import frontendimg from "../Assets/frontend img.jpg";
import javaimg from "../Assets/Java img.webp";
import mysqlimg from "../Assets/mysql.png";
import gitimg from "../Assets/git.png";
import { motion } from "framer-motion";

function Skills() {
  return (
    <>
        {/* Skills */}
      <section id="skills" className="container-fluid my-5">
    <h2 className="text-center mb-5 section-heading text-primary bg-light w-25 mx-auto">TOP SKILLS</h2>

        {/* Frontend */}
        <div className="row align-items-center mb-5 ">
          <div className="col-lg-7 d-lg-block text-end pe-4">
            <h1 className="fw-bold text-start text-primary">FRONTEND</h1>
            <h4 className="text-muted text-start">
              I specialize in designing modern, responsive interfaces that adapt
              seamlessly across devices. My frontend approach emphasizes both
              performance and accessibility, ensuring that every user enjoys a
              smooth experience.
            </h4>
          </div>

          <motion.div
            className="col-lg-5 bg-white rounded shadow"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={frontendimg} alt="Frontend" className="img-fluid mb-3 my-2" />
            <h4>Frontend</h4>
            <p>HTML, CSS, JavaScript, React</p>
          </motion.div>
        </div>

        {/* Backend */}
        <div className="row align-items-center mb-5">
          <motion.div
            className="col-lg-5 bg-white rounded shadow"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={javaimg} alt="Backend" className="img-fluid mb-3" />
            <h4>Backend</h4>
            <p>Java, Spring Boot, REST APIs</p>
          </motion.div>

          <div className="col-lg-7  d-lg-block ps-4">
            <h1 className="fw-bold text-primary">BACKEND</h1>
            <h4 className="text-muted text-start">
              On the backend, I focus on creating robust and scalable APIs that
              can handle real-world traffic. My work ensures that applications
              are not only functional but also secure, reliable, and easy to
              maintain in the long run.
            </h4>
          </div>
        </div>

        {/* Database */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-7  d-lg-block text-end pe-4">
            <h1 className="fw-bold text-start text-primary">DATABASE</h1>
            <h4 className="text-muted text-start">
              Managing data efficiently is at the core of my development
              practice. I work on optimizing queries, designing logical schemas,
              and ensuring that databases scale gracefully as applications grow
              in size and complexity.
            </h4>
          </div>

          <motion.div
            className="col-lg-5 bg-white rounded shadow"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={mysqlimg}
              alt="Database"
              className="img-fluid mb-3"
              width={250}
            />
            <h4>Database</h4>
            <p>MySQL, Query Optimization</p>
          </motion.div>
        </div>

        {/* Tools */}
        <div className="row align-items-center mb-5">
          <motion.div
            className="col-lg-5 rounded shadow bg-white"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={gitimg} alt="Tools" className="img-fluid p-3 mb-3" />
            <h4>Tools</h4>
            <p>Git, GitHub, Deployment</p>
          </motion.div>

          <div className="col-lg-7  d-lg-block ps-4">
            <h1 className="fw-bold text-primary">TOOLS</h1>
            <h4 className="text-muted">
              I use Git and GitHub extensively for version control, ensuring
              smooth collaboration and project tracking. Alongside, I am
              familiar with deployment pipelines that help automate and simplify
              the release process.
            </h4>
          </div>
        </div>
      </section>

             
    </>
  )
}

export default Skills