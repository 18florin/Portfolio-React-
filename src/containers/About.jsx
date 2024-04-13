import React from "react";
import about from "../assets/about.jpg";

const About = (props) => {
  return (
    <div className={`${props.darkMode && "dark"}`}>
      <div name="about" className="mt-40 lg:flex lg:justify-center">
        <img
          src={about}
          alt="about"
          className="rounded-lg mx-auto max-w-[230px] sm:max-w-[400px] mb-10 lg:mb-0 lg:ml-10 lg:mx-0 w-full"
        />
        <div className="lg:text-start text-center ">
          <h2 className="text-blue-700 font-bold text-xl lg:ml-12">ABOUT ME</h2>
          <h1 className="font-bold md:text-3xl mt-4 mb-8 lg:ml-12 text-lightTxt dark:text-darkTxt text-[28px]">
            A dedicated Front-end Developer <br />
            based in Craiova, Romania
          </h1>
          <p className="mx-auto lg:ml-12 text-lightTxt  lg:text-start max-w-[500px] px-10 lg:px-0 font-semibold dark:text-darkTxt">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
