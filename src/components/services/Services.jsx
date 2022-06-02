import React from 'react'
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I have For Clients</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Ms Office Database</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Access Database for schools</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Access Database for churhes</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Access Database for banks</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Excel Database for personal expenses</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Excel Database for small businesses</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Excel Databse for banks</p>
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Apps for private businesses</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>General Static Websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Food Delivery Web apps</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Hotel Reservation Web apps</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Portfolio Websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Social Media Web apps</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web apps for schools</p>
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3>Mobile App Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Restaurant apps</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Hotel Reservation apps</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Online Delivery systems</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>E-commerce apps</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Social Media apps for privvate organizations</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Personal Expenditure Management app</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services