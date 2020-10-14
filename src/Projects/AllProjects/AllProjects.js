import React from 'react'
import allprojectscss from './AllProjects.css'
import image1 from '../../img/img-1.png'

import Project from './Project/Project'

const AllProjects = () => {

    const projectInfo = [
        { color: 'rgb(196, 210, 252)', name: 'Random', info: 'Full Stack Web Application using MERN stack (MongoDB, ExpressJS, ReactJS and NodeJS) to build an application where users can dynamically add, remove the ingredients of the burger and view the total money. The purpose of the application is to strengthen, improve ReactJS and learn more about Redux', image: image1},
        { name: 'Music', info: 'Full Stack Web Application using ASP.NET and C# that allows users to add, edit, delete and view list of music and albums from a provided database and managed by SQL Server from and deploy to Microsoft Azure', image: image1 },
        { name: 'SimpleChat', info: 'Web Application using NodeJS and SocketIO to build a simple real-time message for learning purpose', image: image1 },
        { name: 'mindSpark', info: 'Full Stack Web Application using MERN stack (MongoDB, ExpressJS, ReactJS and NodeJS) to build a platform that people can upload and share with quotes that inspirit others. The website has all the basic function from create account, add, edit, delete, rate to manage personal information', image: image1},
    ]

    const project = projectInfo.map((p, index) => {
        return (
            <Project index={index + 1} name = {p.name} info={p.info} image={p.image} color = {p.color} />
        )
    })

    return (
        <div className={allprojectscss.AllProjects}>
            {project}
        </div>
    )
}

export default AllProjects