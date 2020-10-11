import React from 'react'
import navcss from './Navigation.css'

import { Link } from 'react-scroll'

class Navigation extends React.Component {
    state = {
        isActive: false
    }

    clicked = () => {
        this.setState({isActive: !this.state.isActive}, () => {
            console.log("Called", this.state.isActive)
        })
    }

    active = () => {
        return (this.state.isActive===true) ? 'active' : null
    }

    render() {
        return (
        <div className={navcss.NavList}>
            <div className={`${navcss.Hamburger} ${this.state.isActive ? 'active' : ''}`} onClick={this.clicked.bind(this)}>
                <div 
                    className={navcss.bar}>
                </div>
            </div>
            <ul className={`${this.state.isActive ? 'active' : ''}`}>
                <li><Link data-after="Home" activeClass="active" to="main" spy={true} smooth={true} duration={1000} >Home</Link></li>
                <li><Link data-after="Projects" activeClass="active" to="projects" spy={true} smooth={true} duration={1000}>Projects</Link></li>
                <li><Link data-after="About" activeClass="active" to="about" spy={true} smooth={true} duration={1000}>About</Link></li>
                <li><Link data-after="Contact" activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>Contact</Link></li>
            </ul>
        </div>
        )}
}

export default Navigation

