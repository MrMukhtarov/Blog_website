import React, { useEffect } from 'react'
import AboutSub from '../../components/AboutSub/AboutSub'
import AboutText from '../../components/AboutText/AboutText'
import Writers from '../../components/Writers/Writers'
import Standarts from '../../Standarts/Standarts'
import './About.css'

const About = () => {
    useEffect(() => {
        document.title = 'About Us';
      });
  return (
    <div>
        <AboutText/>
        <Writers/>
        <Standarts/>
        <AboutSub/>
    </div>
  )
}

export default About