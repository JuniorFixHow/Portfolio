import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/port1.png';
import IMG2 from '../../assets/port2.png';
import IMG3 from '../../assets/port3.png';
import IMG4 from '../../assets/port4.png';
import IMG5 from '../../assets/port5.png';
import IMG6 from '../../assets/port6.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title:'Attendance Record in Access',
    github: 'https://github.com/JuniorFixHow',
    demo:'https://www.youtube.com/channel/UCNBShgHT470aFJFZ3MfFh-w'
  },
  {
    id: 2,
    image: IMG2,
    title:'Banking System in Access',
    github: 'https://github.com/JuniorFixHow',
    demo:'https://www.youtube.com/channel/UCNBShgHT470aFJFZ3MfFh-w'
  },
  {
    id: 3,
    image: IMG3,
    title:'React Admin Dashboard ',
    github: 'https://github.com/JuniorFixHow',
    demo:'https://www.youtube.com/channel/UCNBShgHT470aFJFZ3MfFh-w'
  },
  {
    id: 4,
    image: IMG4,
    title:'E-commerce App with React',
    github: 'https://github.com/JuniorFixHow',
    demo:'https://www.youtube.com/channel/UCNBShgHT470aFJFZ3MfFh-w'
  },
  {
    id: 5,
    image: IMG5,
    title:'React Media Player',
    github: 'https://github.com/JuniorFixHow',
    demo:'https://www.youtube.com/channel/UCNBShgHT470aFJFZ3MfFh-w'
  },
  {
    id: 6,
    image: IMG6,
    title:'Daily Quote App',
    github: 'https://github.com/JuniorFixHow',
    demo:'https://www.youtube.com/channel/UCNBShgHT470aFJFZ3MfFh-w'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=>{
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a target='_blank' href={github} className='btn'>GitHub</a>
                  <a target='_blank' href={demo} className='btn btn-primary'>Live Demo</a>
                </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
