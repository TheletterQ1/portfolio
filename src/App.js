import React, { useState, useEffect } from 'react';
import $ from 'jquery'
import "./App.css";
import Navigation from "./Navigation.js";
import Projects from './Projects.js'
function App() {

  const [projects,setProjects] = useState({});
  // const [projecting, setProjecting] = useState();

 let sheetUrl = ``;
  // /////////
  let sheetID = `1DjpZ26_L60k9V_06X7PhWqcW7b5HoIUNBVtF39LuuGY`;
  /////////////
  let sheetAsJSON = `https://spreadsheets.google.com/feeds/list/${sheetID}/od6/public/values?alt=json`;
  //////////


  
  // const projectDisplay = (project) => {
  //   const showProjects = projects ? projects.map(project => (
  //     <div key={project.title} className="projects">
  //       <h2>{project.title}</h2>
  //   <img src={project.image} alt={project.url}/>
  //   <p>Link: {project.description}</p>
  //     </div>
  //   )) : <h2>Loading Projects....</h2>
  //     return {showProjects}
  //   }
  //   projectDisplay()

  // useEffect(() => {
     
  const getProjects = async () => {
    fetch(sheetAsJSON)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setProjects(result);
        

      })
      .catch((error) => {
        // common error
        return console.log("there was an error with the API");
      });
  };

  getProjects();
// }, []);

console.log(projects)
const entry = Object.entries(projects);
// setProjecting(entry)
const pArray = entry

  return (
    <>
      <div className="App">
        <header>
          <Navigation />
        </header>
        <section id="main">
          <div id="main-img"></div>
          <span id="name">
            <p> Hello, im Quinton Lythgoe</p>
          </span>
          <div id="container">
            <div id="html">HTML</div>
            <div id="JS">CSS</div>
            <div id="CSS">JS</div>
          </div>
        </section>
        <section id="about">
 <projects />
          <h1>ABOUT</h1>
          <div class="pic"></div>
          <br />
          <p>
            {" "}
            My name is Quinton Lythgoe and i am an aspiring web developer and
            this is my page.Here are some examples of my current work and of the developing growth.
          </p>
        </section>
<Projects 
 />
        <section>
          <div id="pics"></div>
        </section>
        <section id="contact">
          <h1>Contact Me</h1>
          <br />
          <p>
            Please if you have any reviews, critique, compliments of my
            work, please feel free to share!
            <br />
            (constructive criticism is welcome)
          </p>
          <br />
          <p>
            Please submit your user information where asked and leave your
            comments below{" "}
          </p>
          <form>
            <input class="input" id="user" type="text" placeholder="name" />
            <button class="contact-button">Submit</button>
            <br />
            <input class="input" id="email" type="text" placeholder="email" />
            <button class="contact-button">Submit</button>
            <br />
            <textarea
              class="input"
              id="words"
              type=""
              placeholder="comments here"
            />
            <button class="contact-button">Submit</button>
          </form>
        </section>
      </div>
    </>
  );
}

export default App;
