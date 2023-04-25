import React from 'react'
import bgImg from "../assets/about-hero.png"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className='about-page-container'>
        <img src={bgImg} className='about-hero-image'l />
        <div className='about-page-content'>
            <h1>Don't squeeze in a sedan when you could relax in a van</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vel sint aut voluptatem nihil odio numquam distinctio accusamus veritatis, nulla dolor sequi dolores fuga animi a laboriosam illo! Accusantium, quia.</p>
        </div>
        <div className='about-page-cta'>
            <h2>Your destinatin is waiting.<br />Your van is ready!</h2>
            <Link className='link-button' to="/vans">Explore our vans</Link>
        </div>

    </div>
  )
}

export default About