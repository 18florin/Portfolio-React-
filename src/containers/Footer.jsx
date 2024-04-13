import React from "react";
import { RiGithubLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";

const Footer = (props) => {
  return (
    <div className={`${props.darkMode && "dark"}`}>
      <div className="bg-white shadow-top w-full h-[150px] flex items-center justify-center dark:bg-darkBg2">
        <div className="text-lightTxt dark:text-darkTxt font-bold flex flex-col sm:flex-row justify-between items-center px-10 max-w-[1100px] w-full">
          <div className="text-center">
            Copyright © 2024. All rights are reserved
          </div>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="https://www.linkedin.com/in/florentin-untaru-942993267/">
              <CiLinkedin className="size-8 cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
            </a>
            <a href="https://github.com/18florin">
              <RiGithubLine className="size-8 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
