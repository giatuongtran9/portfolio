import React from 'react'
import aboutcss from './About.css'
import Ava from '../img/avatar.png'

const About = () => (
    <section id="about" className={aboutcss.About}>
        <div className={aboutcss.ColLeft}>
            <div className={aboutcss.image}>
                <img src={Ava} alt={Ava} />
            </div>
        </div>
        <div className={aboutcss.ColRight}>
            <h1>About Me</h1>
            <h2>Web Developer</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, velit alias eius non illum beatae atque repellat ratione qui veritatis repudiandae adipisci maiores. At inventore necessitatibus deserunt exercitationem cumque earum omnis ipsum rem accusantium quis, quas quia, accusamus provident suscipit magni! Expedita sint ad dolore, commodi labore nihil velit earum ducimus nulla quae nostrum fugit aut, deserunt reprehenderit libero enim!</p>
        </div>
    </section>
)

export default About