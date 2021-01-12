import React from "react";
import {Link} from 'react-router-dom';
import "./Navigation.css";

const Navigation = () => {

  const handleClickNav = () => {
    const clickedNav = document.getElementById("nav");
    if (clickedNav.className === "unclicked") {
      clickedNav.className += "clicked";
    } else {
      clickedNav.className = "unclicked";
    }
  };
  return (
    <nav id="nav" className="unclicked" onClick={handleClickNav}>
     
        <a className="icons" href='https://github.com/TheletterQ1'><div id="github" href="#"></div></a>
        <a className="icons" href='https://www.instagram.com/theletterq1/'><div id="IG"></div></a>
        <a className="icons" href='https://www.linkedin.com/in/quintonlythgoe'><div id="linkedin" ></div></a>
      
      <div class="link">
        <Link to="/About">About</Link>
      </div>
      <div class="link">
        <Link to="/Contact">Contact</Link>
      </div>
      <div id="hamburger">☰</div>
    </nav>
  );
};
export default Navigation;
