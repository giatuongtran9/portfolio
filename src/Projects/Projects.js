import React from 'react'
import projectscss from './Projects.css'

import AllProjects from './AllProjects/AllProjects'

const Projects = () => (
    <section id="projects" className={projectscss.Projects}>
        <div><h1>Recent <span>Project</span></h1></div>
        <AllProjects />
    </section>
)

export default Projects