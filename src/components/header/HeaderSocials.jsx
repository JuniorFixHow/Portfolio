import React from 'react'
import {GrTwitter} from 'react-icons/gr';
import {FaGithub, FaDribbble} from 'react-icons/fa';


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://twitter.com/robertjunioran" target='_blank'><GrTwitter/></a>
            <a href="https://dribbble.com/JuniorFixHow" target='_blank'><FaDribbble/></a>
            <a href="https://github.com/JuniorFixHow/Portfolio" target='_blank'><FaGithub/></a>
        </div>
    )
}

export default HeaderSocials
