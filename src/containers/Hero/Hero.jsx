import React from "react";
import profile from "../../assets/profile.png";
import { RiGithubLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import "./hero.css";
import { Link } from "react-scroll";

const Hero = (props) => {
  return (
    <div className={`${props.darkMode && "dark"}`}>
      <div
        name="home"
        className="flex flex-col md:flex-row-reverse items-center mt-20 md:gap-6 md:justify-center"
      >
        <div className="profile">
          <div className="content">
            <img src={profile} alt="profile" />
            <h2>
              Florentin Untaru
              <br />
              <span>Web Developer</span>
            </h2>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              className="hover:tracking-widest cursor-pointer"
            >
              Hire me
            </Link>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-[45px] md:text-[60px] text-lightTxt text-center mb-4 md:text-start dark:text-darkTxt">
            Front-End React <br /> Developer{" "}
          </h1>
          <p className="text-center text-lg md:text-start dark:text-darkTxt px-4 md:px-0">
            Hi, I'm Florin. A passionate Front-End React <br />
            Developer based in Craiova, Romania.
          </p>
          <div className="flex gap-4 justify-center md:justify-start mt-4 dark:text-darkTxt">
            <a href="https://www.linkedin.com/in/florentin-untaru-942993267/">
              <CiLinkedin className="size-8 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-blue-700" />
            </a>
            <a href="https://github.com/18florin">
              <RiGithubLine className="size-8 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-blue-700" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
