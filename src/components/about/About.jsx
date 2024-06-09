import React from 'react'
import './about.css';
import ME from '../../assets/3.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
    return (
      <section id="about">
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
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>100+ in GH</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>300+ Academic and personal</small>
              </article>
            </div>

            <p>
              I'm a software developer who has been in the system for more than
              8 years. I've worked with many modern frameworks in JavaScript and
              C#. My programming activities cut accross all platforms such as
              mobile, web and desktop applications development. Periodically, I
              upload videos to YouTube about fixes on some common issues in
              computers. That's how come the association of the name
              JuniorFixHow. You can find these videos{" "}
              <a
                href="https://www.youtube.com/channel/UCNBShgHT470aFJFZ3MfFh-w"
                target="_blank"
              >
                here
              </a>{" "}
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    );
}

export default About
