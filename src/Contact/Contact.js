import React from 'react'
import contactcss from './Contact.css'

import phone from '../img/phone.png'
import email from '../img/email.png'
import address from '../img/address.png'

import Info from './Info/Info'

const Contact = () => {

    const infos = [
        {name: 'Phone', detail: '(647)-909-2703', image: phone},
        {name: 'Email', detail: 'trangiatuong999@gmail.com', image: email},
        {name: 'Address', detail: '50 Hornshill Dr, Scarborough Ontario M1S 2Y2', image: address}
    ]

    const info = infos.map(i => {
        return (
            <Info name={i.name} detail={i.detail} icon={i.image} />
        )
    })

    return (
        <section id="contact" className={contactcss.Contact}>
            <h1>Contact Info</h1>
            <div className={contactcss.Items}>
                {info}
            </div>
        </section>
)}

export default Contact