import React from 'react';
import '../styles/about.css'

const About = () => {
  // console.log('ABOUT  : ', window.location.hash)

  return (
    <div className='aboutpage'>
      <div className='aboutpage-aboutme'>About Me</div>
      <div className='aboutpage-header'>Hi I'm Dan, a software engineer based in the Bay Area.</div>
      <div className='aboutpage-content'>I graduted in 2020 from San Jose State University with a B.A. in Economics. In the summer of 2022, I decided to transition from marketing to software engineering and completed the Hack Reactor Software Engineering Immersive, where I got hands-on experience in developing applications.</div>
      {/* maybe add a section for other activities/hobbies outside of coding */}
    </div>
  )
}

export default About