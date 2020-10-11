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

    render() {
        return (
        <div className={navcss.NavList}>
            <div className={navcss.Hamburger} onClick={this.clicked.bind(this)}>
                <div 
                    className={navcss.bar}>
                </div>
            </div>
            <ul style={this.state.isActive ? {left: '0'} : {left: '100%'}}>
                <li><Link data-after="Home" activeClass="active" to="main" spy={true} smooth={true} duration={1000} >Home</Link></li>
                <li><Link style={this.state.isActive ? {left: '0'} : {left: '100%'}} data-after="Projects" activeClass="active" to="projects" spy={true} smooth={true} duration={1000}>Projects</Link></li>
                <li><Link data-after="About" activeClass="active" to="about" spy={true} smooth={true} duration={1000}>About</Link></li>
                <li><Link data-after="Contact" activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>Contact</Link></li>
            </ul>
        </div>
        )}
}

export default Navigation

