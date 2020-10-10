import React from 'react'
import allprojectscss from './AllProjects.css'
import image1 from '../../img/img-1.png'

import Project from './Project/Project'

const AllProjects = () => {

    const projectInfo = [
        { name: 'Music', info: 'Describe about the app', image: image1 },
        { name: 'Chat', info: 'Describe about the app', image: image1 },
        { name: 'mindSpark', info: 'describe about the app', image: image1},
        { name: 'Random', info: 'describe about the app', image: image1}
    ]

    const project = projectInfo.map((p, index) => {
        return (
            <Project index={index + 1} name = {p.name} info={p.info} image={p.image} />
        )
    })

    return (
        <div className={allprojectscss.AllProjects}>
            {project}
        </div>
    )
}

export default AllProjects