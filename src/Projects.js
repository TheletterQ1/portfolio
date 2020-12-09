import React from "react";
import $ from "jquery";

const Projects = (props) => {
  const showProjects = props.pArray ? 
    props.pArray.map((project) => (
      <div key={project.title} className="projects">
        <h2>{project.title}</h2>
        <img src={project.image} alt={project.url} />
        <p>Link: {project.description}</p>
      </div>
    ))
   : (
    <h2>Loading Projects....</h2>
  );

  return <section> { showProjects } </section>;
};

export default Projects;
