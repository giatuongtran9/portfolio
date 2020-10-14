import React from 'react'
import maincss from './Main.css'

import image from '../img/cover.png'

const Main = () => (
    <section id="main" className={maincss.Main}>
        <img src={image} alt={image} className={maincss.image} />
        {/* <h1>Hello, </h1>
        <h1> My Name is   </h1>
        <h1>Gia Tuong Tran </h1>
        <Link activeClass="active" to="projects" spy={true} smooth={true} duration={1000}>Portfolio</Link> */}
    </section>
)

export default Main