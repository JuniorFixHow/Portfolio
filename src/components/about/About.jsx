import React from 'react'
import './about.css';
import ME from '../../assets/3.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="JuniorFixHow" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>20+ in GH</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>100+ Academic and personal</small>
                        </article>
                    </div>

                    <p>
                        I'm Annan Junior, a student at the Universtiy of Ghana, where I offer Information Technology (IT). As a matter of fact, I started programming on my own before getting some training at the university. Periodically, I upload videos to YouTube about fixes on some common issues in computers. That's how come the association of the name JuniorFixHow. You can find these videos <a href="https://www.youtube.com/channel/UCNBShgHT470aFJFZ3MfFh-w" target='_blank'>here</a>               </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
