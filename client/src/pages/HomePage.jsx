import React from 'react'

import Home from '../components/Home/Home'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Blogs from '../components/Blogs/Blogs'
import Contact from '../components/Contact/Contact'

const HomePage = () => {
  return (
    <>
        <Home/>
        <About/>
        <Projects/>
        <Blogs/>
        <Contact/>
    </>
  )
}

export default HomePage