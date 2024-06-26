import React from 'react'
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id = 'experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Tailwind/CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>WordPress</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Ms Power Platform</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>C#/.Net</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Ms Office 365</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Ms Access/Excel</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>NodeJs</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MongoDB</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
                </div>
            </article>
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>VBA</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Dataverse</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Firebase</h4>
                  <small className="text-light">Experienced</small>
                </div>
            </article>
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Convex</h4>
                  <small className="text-light">Beginner</small>
                </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience