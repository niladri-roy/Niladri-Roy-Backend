import React from 'react'
import './Projects.css'
import image from './project.jpg'

const Projects = () => {
  return (
    <div className='content container'>
      <div className="heading">Projects</div>
      <div className="projects">
        <div className="project">
          <div className="project-image">
            <img src={image} alt="" />
          </div>
          <div className="details">
            <div className="title">
              This is a sample Project
            </div>
            <div className="tags">
              <span className="tag">React.js</span>
              <span className="tag">Mongo DB</span>
              <span className="tag">Express</span>
              <span className="tag">Node.js</span>
            </div>
            <div className="paragraph">
              This is a sample description.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects