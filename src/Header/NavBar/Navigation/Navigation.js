import React from 'react'
import navcss from './Navigation.css'

import { Link } from 'react-scroll'

const Navigation = () => (
    <div className={navcss.NavList}>
        <ul>
            <li><Link activeClass="active" to="main" spy={true} smooth={true} duration={1000} >Home</Link></li>
            <li><Link activeClass="active" to="projects" spy={true} smooth={true} duration={1000}>Projects</Link></li>
            <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>About</Link></li>
            <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>Contact</Link></li>
        </ul>
    </div>
)

export default Navigation

