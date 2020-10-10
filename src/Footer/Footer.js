import React from 'react'
import footercss from './Footer.css'

import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import linkedin from '../img/linkedin.png'

const Footer = () => (
    <section className={footercss.Footer}>
        <h1>Gia Tuong Tran</h1>
        <div className={footercss.icons}>
            <div className={footercss.icon}>
                <a href="#facebook"><img src={facebook} alt={facebook} /></a>
            </div>
            <div className={footercss.icon}>
                <a href="#facebook"><img src={instagram} alt={instagram} /></a>
            </div>
            <div className={footercss.icon}>
                <a href="#facebook"><img src={linkedin} alt={linkedin} /></a>
            </div>
        </div>
    </section>
)

export default Footer