import React from "react";
import "./App.css";
import pauseapp from "./pauseapp.png";
import realestate from "./Real_estate.png";
import kitchenpic from "./kitchen_pic.png";

const About = () => (
  <div>
    <div className="pic"></div>
    <p>
      My name is Quinton Lythgoe and I'm a full stack developer, digital marketer, and animal
      trainer all wrapped into a big bundle of me (3 for 1, its a good deal) Located in sunny Los Angeles California, where
      dreams are said to come true and hopefully i can in some way help you
      accomplish yours. On here you will see examples of my work for those
      interested in possibly working together, or if you just wanted to observe some of my growth in web
      development.
    </p>
    <span>
      <h1>Skills:</h1>
    </span>
    <h2>Coding</h2>
      <h3>Front-End</h3>
      <div className='tech-holder'>
      <p className="tech" id="html">
        HTML
      </p>
      <p className="tech" id="css">
        CSS
      </p>
      <p className="tech" id="js">
        Javascript
      </p>
      <p className="tech" id="react">
        React
      </p>
    </div>
    <h3 id="backend">Back-End</h3>
    <div className='tech-holder'>
      <p className="tech" id="express">
        Express
      </p>
      <p className="tech" id="mongo">
        MongoDB
      </p>
      <p className="tech" id="ruby">
        Ruby on Rails
      </p>
      <p className="tech" id="sql">
        SQL
      </p>
    </div>
    <h1>Experience</h1>
    <div id="project-holder">
      <div className="project-details">
        <img id="pauseapp" src={pauseapp} alt="Pause app" />
        <p>In this Application me and 3 fellow developers <a className='friends' href='https://github.com/samuel-casey'>Samuel Casey</a>, <a className='friends' href='https://github.com/jb0nd87'>Jaime Bond</a>, and <a className='friends' href='https://github.com/kimrass14'>Kim Rass</a> created "Pause.App" for those who need to take a pause on life and want some help staying on track to execute they're goals. On this one I helped construct  the back end in which inlcuded creating the necessary models and view controllers. Also constructed the About page</p>
        <div className='demo'>
        <a href='https://github.com/samuel-casey/p3-backend'>See the Code </a>
        <a href='https://pause-app.netlify.app/'>See the  Demo </a>
        </div>
      </div>
      <div className="project-details">
        <img id="real-estate" src={realestate} alt="Real-estate-app" />
        <p>This is an app I created to help users searching for available real estate. Users will be able to view different areas, select how many results they want </p>
        <div className='demo'>
        <a href='https://git.generalassemb.ly/theletterq/project-2-react'>See the Code </a>
        <br/>
        {/* <a href=''>See the live demo </a> */}
        </div>
      </div>
      <div className="project-details">
        <img id="kitchen-pic" src={kitchenpic} alt="Real-estate-app" />
        <p>This is an example in which i re-created that helps users that want to learn how to cook. In my version i added responsiveness, made it mobile first, added the abilities for users to either Log in, Sign Up, or Log out. Also created a Dashboard for once a user is signed in</p>
        <div className='demo'>
          <a href='https://github.com/TheletterQ1/cooking-front'>See the Code </a>
        <br/>
        {/* <a href=''>See the live demo </a> */}
        </div>
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
