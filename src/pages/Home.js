import React, { useRef, useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import '../styles/home.css'

const Home = ({ openLink, executeScroll }) => {
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const arrowElement = document.querySelector('.arrow');
      if (scroll >= 1) {
        arrowElement.classList.add('fade');
      } else {
        arrowElement.classList.remove('fade')
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, [])

  const handleClicks = () => {
    navigator.clipboard.writeText('dantan510@gmail.com')
    alert('Copied To Clipboard')
  }

  const terminalStatements = () => {
    const statementsArray = [
      { currentLocation: 'San Francisco Bay Area, CA' },
      { contactInfo: ['dantan510@gmail.com', 'linkedIn', 'github'] },
      { education: 'San Jose State University' },
      { resume: 'danieltan_resume.pdf' },
      { skills: ['Typescript', 'React', 'Node.js', 'Express', 'PostgreSQL'] },
      { interests: ['basketball', 'combat sports', 'cooking', 'snowboarding'] }
    ];

    const mappedStatements = statementsArray.map((statement, index) => {
      const statementEntries = Object.entries(statement);

      return (
        <div className='statement' key={index}>
          {statementEntries.map(([key, value], i) => (
            <React.Fragment key={i}>
              <div className='input-statement'>
                {`> daniel.${key}`}
              </div>
              <div className='return-statement'>
                {Array.isArray(value) ? (
                  <span>[{value.map((item, index) => {
                    let linkContent;
                    // Check the content of each item to determine the link type
                    if (item.includes('gmail')) {
                      linkContent = <a className='contactInfo-links' onClick={() => handleClicks()}>{item}</a>;
                    } else if (item.toLowerCase().includes('linkedin')) {
                      linkContent = <a className='contactInfo-links' onClick={() => openLink('https://www.linkedin.com/in/danieltan510/')}>{item}</a>;
                    } else if (item.toLowerCase().includes('github')) {
                      linkContent = <a className='contactInfo-links' onClick={() => openLink('https://github.com/dantan510')}>{item}</a>;
                    } else {
                      // Fallback for any string that doesn't match the above conditions
                      linkContent = item;
                    }

                    return (
                      <React.Fragment key={index}>
                        {index > 0 ? ', ' : ''}"{linkContent}"
                      </React.Fragment>
                    );
                  })}]</span>
                ) : (
                  key === 'resume' ? (
                    <>
                      "<span className='contactInfo-links' onClick={() => openLink('https://drive.google.com/file/d/1Bp4YqqC35n3wIc6tdJTcYnQ2w3kQxz0u/view?usp=sharing')}>{value}</span>"
                    </>
                  ) : (
                    `"${value}"`
                  )
                )}
              </div>


            </React.Fragment>
          ))}
        </div>
      );
    });

    return mappedStatements;
  };


  return (
    <div className='hero-container' id='home'>
      <div className='hero-title'>{'> Daniel Tan'}<span className='blinker'> _</span></div>
      <div className='hero-description'>
        I am a software engineer who enjoys crafting exceptional digital experiences.
        <br />
        Check out my <a className='side-projects' onClick={() => executeScroll('projects')}>side-projects</a> below.
      </div>
      <div className='terminal-container'>
        <div className='terminal-header'>
          <div className='terminal-button red' />
          <div className='terminal-button yellow' />
          <div className='terminal-button green' />
        </div>
        <div className='terminal-window'>
          {terminalStatements()}
          <div className='statement empty-statement'>{'>'}<span className='blinker'> _</span></div>
        </div>
      </div>
      {/* <div className='homepage-dt'>Daniel Tan</div>
      <div className='homepage-title'>
        <span className='fadeInUp'>FULL STACK SOFTWARE ENGINEER</span>
      </div>
      <div className='contact-box'>
        <div className='contact-button' onClick={() => executeScroll('contact')}>
          <span className='fade-up'>Get In Touch</span>
        </div>
      </div>
      <div className='icon-container'>
        <FontAwesomeIcon className='icon-link fadeIn' icon={faGithub} size='2x' style={{ color: "#333" }} onClick={() => openLink('https://github.com/dantan510')} />
        <FontAwesomeIcon className='icon-link fadeIn' icon={faLinkedin} size='2x' style={{ color: "#333" }} onClick={() => openLink('https://www.linkedin.com/in/danieltan510/')} />
      </div> */}
      <div>
        <div className={`arrow animated bounce ${scrolling ? 'fade' : ''}`}></div>
      </div>

    </div>

  )
}

export default Home

