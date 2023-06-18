import React from 'react'
import homeImage from './homeImg.png'
import './Home.css'

const Home = () => {
  return (
    <div className='content container'>
      <div className="home-content">
        <div className="introduction">
          <div className="name">
            Niladri Roy
          </div>
          <div className="designation">
            Aspiring<span>&nbsp;Software&nbsp;</span>and&nbsp;<span>Full Stack Developer</span>
          </div>
          <div className="quote">
            “Unlocking the Possibilities of Code,<br/>Crafting Digital Solutions with Precision”
          </div>
        </div>
        <div className="home-image">
          <img src={homeImage} alt="Home-Image" />
        </div>
      </div>
    </div>
  )
}

export default Home