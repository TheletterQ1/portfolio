import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const Home = () => {
    return(
        <div id='Home'>
          <div id="main-img"></div>
          <section id='home-container'>
          <p id="name"> Hello, I'm Quinton Lythgoe</p>
          <p>Who Am I?</p>
          <Link id='who-am-i' to='/About'>Click here to find out</Link>
          </section>
        </div>
    )
}
export default Home;