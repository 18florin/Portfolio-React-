import React from "react";
import { RiGithubLine } from "react-icons/ri";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Project = (props) => {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row mt-20">
      <img
        src={props.image}
        alt="photo"
        className="rounded-lg mx-10 w-[230px] md:w-[400px] max-h-[260px]"
      />
      <div>
        <h3
          className={`font-bold mt-8 text-black text-center lg:mt-0 ${props.textColor}`}
        >
          CAR RENTAL
          <span className={`${props.textColor} ml-2`}>(FEBRUARY 2023) 🚗</span>
        </h3>
        <p
          className={`max-w-80 text-center mt-6 font-semibold px-2 ${props.textColor}`}
        >
          A car rental website is an online platform that allows users to rent
          cars for personal orbusiness use. The website provides an interface
          for searching, comparing, and reserving cars.
        </p>
        <div
          className={`flex gap-12 font-bold text-lg mt-4 justify-center ${props.textColor}`}
        >
          <p>React</p>
          <p>Tailwind CSS</p>
        </div>
        <div className="flex gap-12 text-lightTxt mt-6 justify-center font-semibold">
          <p
            className={`flex items-center gap-2 text-xl hover:text-blue-700 cursor-pointer duration-300 ${props.textColor}`}
          >
            Code
            <RiGithubLine className="size-6" />
          </p>
          <p
            className={`flex items-center gap-2 text-xl hover:text-blue-700 cursor-pointer duration-300 ${props.textColor}`}
          >
            Live Demo
            <FaArrowUpRightFromSquare className="size-4" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
