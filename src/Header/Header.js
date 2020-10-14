import React from 'react'
import headercss from './Header.css'

import NavBar from './NavBar/NavBar'

class Header extends React.Component {
    state = {
        a: {
            backgroundColor: ''
        }
    }

    scroll(component) {
        const position = window.scrollY;
        let background = this.state.a[component]
        const q = {
            ...this.state.a
        };

        if (position > 500) {
            background = '#29323c'
        } else {
            background = 'transparent'
        }
        q[component] = background
        this.setState({
            a: q
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', () => this.scroll('backgroundColor'))
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', () => this.scroll('backgroundColor'))
    }

    render() {
        return (
        <section className={headercss.Header} style={this.state.a}>
            <NavBar />
        </section>
)}}

export default Header