import React from 'react'
import image from './blog.jpg'
import './Blogs.css'

const Blogs = () => {
  return (
    <div className='content container'>
      <div className="heading">Blogs</div>
      <div className="blogs">
        <div className="blog">
          <div className="blog-image">
            <img src={image} alt="" />
          </div>
          <div className="details">
            <div className="title">
              This is a sample Blog
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

export default Blogs