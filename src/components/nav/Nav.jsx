import React, { useState } from 'react'
import './nav.css';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {FaUserGraduate} from 'react-icons/fa';
import {GiTiedScroll} from 'react-icons/gi';

const Nav = () => {
    const [activeNav, setActiveNav]= useState('#');
    return (
        <nav>
            <a href="#" 
            className={activeNav ==='#' ? 'active' : ''}
            onClick={()=>setActiveNav('#')}
            >
                <AiOutlineHome/>
            </a>
            <a href="#about"
            onClick={()=>setActiveNav('#about')}
            className={activeNav==='#about' ? 'active':''}
            >
                <AiOutlineUser/>
            </a>
            <a href="#experience"
            onClick={()=>setActiveNav('#experience')}
            className={activeNav==='#experience' ? 'active':''}
            >
                <BiBook/>
            </a>
            <a href="#services"
            onClick={()=>setActiveNav('#services')}
            className={activeNav==='#services' ? 'active':''}
            >
                <RiServiceLine/>
            </a>
            {/* <a href="#portfolio"
            onClick={()=>setActiveNav('#portfolio')}
            className={activeNav==='#portfolio' ? 'active':''}
            >
                <FaUserGraduate/>
            </a> */}
            <a href="#testimonials"
            onClick={()=>setActiveNav('#testimonials')}
            className={activeNav==='#testimonials' ? 'active':''}
            >
                <GiTiedScroll/>
            </a>
            <a href="#contact"
            onClick={()=>setActiveNav('#contact')}
            className={activeNav==='#contact' ? 'active':''}
            >
                <BiMessageSquareDetail/>
            </a>
        </nav>
    )
}

export default Nav
