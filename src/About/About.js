import React from 'react'
import aboutcss from './About.css'
import Ava from '../img/avatar.png'
import Resume from '../download/GiaTuongTran.Resume.pdf'

const About = () => (
    <section id="about" className={aboutcss.About}>
        <div className={aboutcss.ColLeft}>
            <div className={aboutcss.image}>
                <img src={Ava} alt={Ava} />
            </div>
        </div>
        <div className={aboutcss.ColRight}>
            <h1>About <span>Me</span></h1>
            <h2>Web Developer</h2>
            <p>A highly organized and passionate computer programming fresher with a strong understanding of the needs to deliver the best results in the role of Web Developer. My goad is to continually develop my programming skills in order to produce better solutions to the clients. I enjoy being challenged, working with projects outside my comfort zone and discovering new technologies and tools.</p>
            <a href={Resume} target="_blank">View here</a>
        </div>
    </section>
)

export default About