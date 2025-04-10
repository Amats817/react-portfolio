import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image"> 
            <img src={IMG1} alt="project title here" />
          </div>
            <h3>Spotify Playlist Maker</h3>
            <div className="portfolio__items-cta">
              <a href="https://github.com/Amats817/spotify-playlist-maker" className='btn' target='_blank' rel='noreferrer'>Github</a>
              <a href="https://amats817.github.io/spotify-playlist-maker/" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="project title here" />
          </div>
            <h3>Recipe Website with MealDB</h3>
            <div className="portfolio__items-cta">
              <a href="https://github.com/Amats817/recipe-website" className='btn' target='_blank' rel='noreferrer'>Github</a>
              <a href="https://recipe-project-demo.onrender.com" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
              <p>Heads up! This site is hosted on Render's free version, so it may take about 50 seconds to load. Thanks for your patience.</p>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="project title here" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__items-cta">
              <a href="https://github.com" className='btn' target='_blank' rel='noreferrer'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="project title here" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__items-cta">
              <a href="https://github.com" className='btn' target='_blank' rel='noreferrer'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="project title here" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__items-cta">
              <a href="https://github.com" className='btn' target='_blank' rel='noreferrer'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="project title here" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__items-cta">
              <a href="https://github.com" className='btn' target='_blank' rel='noreferrer'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
            </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio