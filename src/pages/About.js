import React from 'react';
import profile from '../images/me.jpg'
import '../styles/about.css'

const About = () => {
  // console.log('ABOUT  : ', window.location.hash)


  return (
    <div className='aboutpage'>
      <div className='aboutpage-content'>
        <div className='aboutpage-title'>About Me</div>
        <div className='aboutpage-header'>Hi I'm Dan, a software engineer based in the Bay Area.</div>
        <div className='aboutpage-text'>I graduted in 2020 from San Jose State University with a B.A. in Economics. In the summer of 2022, I decided to transition from marketing to software engineering and completed Hack Reactor's Software Engineering Immersive, where I got hands-on experience in developing applications. In my free time, I enjoy playing basketball and spikeball with friends, and skiing during the winter. I eventually want to take up boxing or jiu jitsu. Coming from a wrestling background in highschool led me to enjoy combat sports.</div>
      </div>
      <div className='aboutpage-pic'>
        <img id='profile-picture' src={profile} alt="profile picture"/>
      </div>
    </div>
  )
}

export default About