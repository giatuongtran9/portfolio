import React from 'react'
import headercss from './Header.css'

import NavBar from './NavBar/NavBar'

const Header = () => (
    <section className={headercss.Header}>
        <NavBar />
    </section>
)

export default Header