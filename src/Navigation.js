import React from "react";
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
    <nav id="nav" className ="unclicked" onClick={handleClickNav}>
      Welcome
      <div class="link">
        <a href="about.html">About</a>
      </div>
      <div class="link">
        <a href="contact.html">Contact</a>
      </div>
      <div id="hamburger" >
        ☰
      </div>
    </nav>
  );
};
export default Navigation;
