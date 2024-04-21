import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/project1.jpeg"
          title="Clothing web store"
          description="Application made in next.js mongodb where various casual and sporty women's and men's clothing is displayed."
        />
        <ProjectCard
          src="/projects2.jpeg"
          title="Human resources management system"
          description="Registration system for a company for employees, made with react nodejs mongodb."
        />
        <ProjectCard
          src="/proyecto2.jpeg"
          title="
          Travel landing page "
          description="Simple travel information landing page."
        />
      </div>
    </div>
  );
};

export default Projects;
