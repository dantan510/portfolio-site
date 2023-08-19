import React from 'react';
import profile from '../images/me.jpg'
import '../styles/about.css'

const About = () => {

  return (
    <div className='aboutpage'>
      <div className='aboutpage-content'>
        <div className='aboutpage-title'>About Me</div>
        <div className='aboutpage-header'>Hello! I'm Dan, a software engineer based in the Bay Area.</div>
        <div className='aboutpage-text'>Near the start of 2022, I decided to transition to software engineering and completed Hack Reactor's Software Engineering Immersive, where I got experience developing full stack applications.</div>

        <div>
        In my free time, I enjoy playing basketball and spikeball with friends. When winter comes around, I love to go skiing or snowboarding. Due to my attachment to combat sports, an affection that stems from my high school wrestling background, I eventually want to take up boxing or jiu-jitsu.
        </div>
      </div>
      <div className='aboutpage-pic'>
        <img id='profile-picture' src={profile} alt="profile picture"/>
      </div>
    </div>
  )
}

export default About