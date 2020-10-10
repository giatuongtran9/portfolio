import React from 'react'
import navbarcss from './NavBar.css'
import { Link } from 'react-scroll'

import Navigation from './Navigation/Navigation'

const NavBar = () => (
    <div className={navbarcss.NavBar}>
        <div className={navbarcss.main}>
            <Link activeClass="active" to="main" spy={true} smooth={true} duration={1000}><h1><span>G</span>ia <span>T</span>uong <span>T</span>ran</h1></Link>
        </div>
        <Navigation />
    </div>
)

export default NavBar