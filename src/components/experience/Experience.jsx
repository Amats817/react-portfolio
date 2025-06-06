import React from 'react'
import './experience.css'
import { MdOutlineVerified } from "react-icons/md";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="expereince__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <MdOutlineVerified className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdOutlineVerified className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdOutlineVerified className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdOutlineVerified className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdOutlineVerified className='experience__details-icon'/>
              <div>
                <h4>Figma</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="expereince__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
                <MdOutlineVerified className='experience__details-icon'/>
                <div>
                  <h4>SQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <MdOutlineVerified className='experience__details-icon'/>
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <MdOutlineVerified className='experience__details-icon'/>
                <div>
                  <h4>Node.js</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <MdOutlineVerified className='experience__details-icon'/>
                <div>
                  <h4>Express</h4>
                  <small className='text-light'>Advanced</small>
                </div>
              </article>
              <article className='experience__details'>
                <MdOutlineVerified className='experience__details-icon'/>
               <div>
                <h4>PHP</h4>
                <small className='text-light'>Advanced</small>
               </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience