import React, { useState, useEffect } from "react";
import $ from "jquery";
import "./App.css";
import Navigation from "./Navigation.js";
import Projects from "./Projects.js";
import {Switch, Route} from 'react-router-dom' 
import About from "./About"
import Contact from "./Contact"
import Home from "./Home";


function App() {
  const [projects, setProjects] = useState({});
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

  useEffect(() => {

  const getProjects = () => {
    fetch(sheetAsJSON)
      .then((response) => response.json())
      .then((result) => {
        setProjects(result);
      })
      .catch((error) => {
        // common error
        return console.log("there was an error with the API");
      });
  } 
  getProjects()
}, []);


  const entry = Object.entries(projects);
  // setProjecting(entry)
 

  return (
    <>
      <div className="App">
        <header>
          <Navigation />
        </header>
   
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/About'>
            <About /> 
            </Route>
          <Route path='/Contact'>
            <Contact />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
