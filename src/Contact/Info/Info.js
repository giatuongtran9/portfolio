import React from 'react'
import infocss from './Info.css'

const Info = (props) => {

    return (
        <div className={infocss.Container}>
            <div className={infocss.icon}>
                <img src={props.icon} alt={props.icon} />
            </div>
            <div className={infocss.Info}>
                <h1>{props.name}</h1>
                <h2>{props.detail}</h2>
            </div>
        </div>
    )
}

export default Info