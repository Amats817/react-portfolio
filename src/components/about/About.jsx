/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './about.css'
import ME from '../../assets/cat.png'
import { PiMedalLight } from "react-icons/pi";
import { SlBriefcase } from "react-icons/sl";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <PiMedalLight className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ years</small>
            </article>
    
            <article className='about__card'>
              <SlBriefcase className='about__icon'/>
              <h5>Projects</h5>
              <small>10+</small>
            </article>
          </div>

          <p>I am a web developer based in Odessa, Texas, with a passion for creating intuitive and engaging user experiences.
             My journey in front-end development began with Codecademy, where I learned skills in building responsive, user-friendly websites.
              I love the creative process of designing and developing websites, blending aesthetics with functionality to deliver exceptional digital experiences.
               Whether it’s crafting visually appealing designs or writing clean, efficient code, I’m always excited to learn new technologies and grow as a developer.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
