import React from 'react'
import projectcss from './Project.css'


const Project = (props) => {

    const num = props.index
    let a
if (num % 2) {            
    a = <div className={projectcss.Project}>
            <div className={projectcss.ProjectImage}>
                <img src={props.image} alt={props.image}/>
            </div>
            <div className={projectcss.ProjectInfo2}>
                <h1>Project {props.index}</h1>
                <h2>{props.name} App</h2>
                <p>{props.info}</p>
            </div>
        </div>
} else {
    a = <div className={projectcss.Project}>
            <div className={projectcss.ProjectInfo1}>
                <h1>Project {props.index}</h1>
                <h2>{props.name} App</h2>
                <p>{props.info}</p>
            </div>
            <div className={projectcss.ProjectImage}>
                <img src={props.image} alt={props.image}/>
            </div>
        </div>
}

    return (
        <div>
            {a}
        </div>
    )
}

export default Project