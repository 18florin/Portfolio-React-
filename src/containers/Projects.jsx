import React from "react";
import revuelto from "../assets/revuelto.jpg";
import juststart from "../assets/juststart.jpg";
import whenlambo from "../assets/whenlambo.jpg";
import haide from "../assets/haide.jpg";
import Project from "../components/Project";

const Projects = (props) => {
  return (
    <div className={`${props.darkMode && "dark"}`}>
      <div
        name="projects"
        className="flex flex-col items-center justify-center mt-40"
      >
        <h2 className="text-blue-700 font-bold text-xl">PORTFOLIO</h2>
        <h1 className="font-bold text-3xl mt-4 text-lightTxt text-center dark:text-darkTxt">
          Each project is a unique piece of development 🧩
        </h1>
        <Project
          image={revuelto}
          textColor={props.darkMode ? "dark:text-darkTxt" : "text-lightTxt"}
        />
        <Project
          image={haide}
          textColor={props.darkMode ? "dark:text-darkTxt" : "text-lightTxt"}
        />
        <Project
          image={juststart}
          textColor={props.darkMode ? "dark:text-darkTxt" : "text-lightTxt"}
        />
        <Project
          image={whenlambo}
          textColor={props.darkMode ? "dark:text-darkTxt" : "text-lightTxt"}
        />
      </div>
    </div>
  );
};

export default Projects;
