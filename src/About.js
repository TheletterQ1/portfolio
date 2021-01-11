import React from "react";
import "./App.css";
import pauseapp from "./pauseapp.png";
import realestate from "./Real_estate.png";
import kitchenpic from "./kitchen_pic.png";

const About = () => (
  <div>
    <div className="pic"></div>
    <p>
      My name is Quinton Lythgoe and I'm a coder, digital marketer, and animal
      trainer all wraped in one. Located in sunny Los Angeles, California where
      dreams are said to come true and hopefully i can in some way help you
      accomplish yours On here you will see examples of my work for those
      interested and working together, and also some of my growth in web
      development for those interseted in my story.
    </p>
    <span>
      <h1>Skills:</h1>
    </span>
    <h2>Coding:</h2>
    <ul>
      <h3>Front-end</h3>
      <li className="tech" id="html">
        HTML
      </li>
      <li className="tech" id="css">
        CSS
      </li>
      <li className="tech" id="sass">
        Javascript
      </li>
      <li className="tech" id="react">
        React
      </li>
    </ul>
    <ul>
      <h3 id="backend">Back-end</h3>
      <li className="tech" id="express">
        Express
      </li>
      <li className="tech" id="mongo">
        MongoDB
      </li>
      <li className="tech" id="ruby">
        Ruby on Rails
      </li>
      <li className="tech" id="sql">
        SQL
      </li>
    </ul>
    <h1>Experience</h1>
    <div id="project-holder">
      <div className="project-details">
        <img id="pauseapp" src={pauseapp} alt="Pause app" />
        <p>In this Application me and 3 fellow developers <a href='https://github.com/samuel-casey'>Samuel Casey</a>, <a href='https://github.com/jb0nd87'>Jaime Bond</a>, and <a href='https://github.com/kimrass14'>Kim Rass</a> created "Pause.App" for those who need to take a pause on life and want some help staying on track to execute they're goals. On this one I specifically worked on the back end and constructed the About page</p>
        <a href=''>See the Code </a>
        <a href=''>See the live demo </a>
      </div>
      <div className="project-details">
        <img id="real-estate" src={realestate} alt="Real-estate-app" />
        <p>This is an app I created to help users searching for available real estate. Users will be able to view different areas, select how many results they want </p>
        <a href=''>See the Code </a>
        <a href=''>See the live demo </a>
      </div>
      <div className="project-details">
        <img id="kitchen-pic" src={kitchenpic} alt="Real-estate-app" />
        <p>This is an example in which i re-created that helps users that want to learn how to cook. In my version i added responsiveness, made it mobile first, added the abilities for users to either Log in, Sign Up, or Log out. Also created a Dashboard for once a user is signed in</p>
        <a href=''>See the Code </a>
        <a href=''>See the live demo </a>
      </div>
    </div>
    {/* <h2>Animal Care/Training:</h2>
    <ul>
      <li>Certified Dog Handler</li>
      <p>possessing the ability to care groom, handle, and oversee dogs</p>
      <li>Basic Dog Trainer</li>
      <p>
        possessing the ability to train dogs for basic
        obedience and disabilty assistance
      </p>
    </ul>
    <h1>Experience</h1>
    <h3>New Horizons</h3>
    <p>From 2018-2019 I helped train a plethora of dog breeds to be able to assist the physically and emotionally disabled. This included taking home some dogs for up to 6 months of personal training and development. I absolutely loved the ability to not only be able to make a real impact on helping people with special disabilities, but develop my own training skills to the level they are today. </p>
    */}
  </div>
);
export default About;
