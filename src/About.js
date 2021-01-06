import React from "react";
import "./App.css";

const About = () => (

  <>
    <div className='pic'></div>
    <p>
      My name is Quinton Lythgoe and I'm a coder, digital marketer, and animal
      trainer all wraped in one. Located in sunny Los Angeles, California where
      dreams are said to come true and hopefully i can in some way help you
      accomplish yours On here you will see examples of my work for those
      interested and working together, and also some of my growth in web
      development for those interseted in my story.
    </p>
    <span><h1>Skills:</h1></span>
    <h2>Coding:</h2>
    <ul>
      <h3>Front-end</h3>
      <li className='tech' id='html'>HTML</li>
      <li className='tech' id='css'>CSS</li> 
      <li className='tech' id='sass'>SASS</li>
      <li className='tech' id='react'>React</li>
    </ul>
    <ul>
      <h3 id='backend'>Back-end</h3>
      <li className='tech' id='express'>Express</li>
      <li className='tech' id='mongo'>MongoDB</li>
      <li className='tech' id='ruby'>Ruby on Rails</li>
      <li className='tech' id='sql'>SQL</li>
    </ul>
    <h1>Experience</h1>
    <img src='../public/Screen Shot 2021-01-04 at 4.11.58 AM.png' alt='Pause app'/>

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

  </>
  );
export default About;
