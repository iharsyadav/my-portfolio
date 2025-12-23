import React from "react";
import Sidebar from "../src/components/sidebar/Sidebar"
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Scroll from "./components/scroll/Scroll";
import About from "./components/about/About";
import Goodskills from "./components/goodskill/Goodskills";
import Learning from "./components/learningskill/Learning";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";


const Home = () => {
  return (
    <div className="main">
      <div className="side-box">
        <Sidebar />
      </div>
      <div className="main-box">
        <Header/>

        <Hero/>

        <Scroll />
        <About />
        <Goodskills />

        <Learning style={{ margintop: "2rem" }} />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
