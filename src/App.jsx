import React, { useState } from "react";
import { About, Contact, Footer, Navbar, Projects, Hero } from "./containers";

const App = () => {
  const [ifDarkMode, setIfDarkMode] = useState("");
  const getData = (data) => {
    setIfDarkMode(data);
  };
  return (
    <div className={`${!ifDarkMode ? "bg-lightBg" : "bg-darkBg"}`}>
      <Navbar onDarkMode={getData} />
      <Hero darkMode={ifDarkMode} />
      <About darkMode={ifDarkMode} />
      <Projects darkMode={ifDarkMode} />
      <Contact darkMode={ifDarkMode} />
      <Footer darkMode={ifDarkMode} />
    </div>
  );
};

export default App;
