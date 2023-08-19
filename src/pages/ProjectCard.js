import React, { useState } from 'react'

import tekstyle from '../images/tekstyle.png'
import libre from '../images/libre.png'


const ProjectCard = () => {

  const projects = [
    {
      name: 'tekstyle',
      description: 'Inherited over 10 million records to replace an existing backend and designed a postgres database',
      languages: ['Javascript', 'React', 'HTML/CSS'],
      image: tekstyle,
      url: 'https://github.com/Seinfeld-Front-End-Capstone/fec-rfp2207-seinfeld/tree/main/client/src/components/questionsAnswers'
    },
    {
      name: 'api microservice',
      description: 'Inherited over 10 million records to replace an existing backend and designed a Postgres database.',
      languages: ['Node.js', 'Express', 'PostgreSQL', 'AWS'],
      url: 'https://github.com/sdc-green-lantern/Questions-API')
    },
    {
      name: 'libre',
      description: 'A social scheduling application that lets users find mutual free time with friends and plan events.',
      languages: ['Javascript', 'Typescript', 'React', 'Firebase', 'HTML/CSS'],
      image: libre,
      url: 'https://github.com/Blue-Ocean-3-Bowser/libre/tree/main/client/src/components/HomePage/SideBar/Notifications'
    }
    ]

  return (
    <div className='project-card' onClick={() => openLink('https://github.com/sdc-green-lantern/Questions-API')}>

    <div className='project-title'>Api Microservice</div>

    <div className='project-languages'>
      <span>Node.js</span>
      <span>Express</span>
      <span>Postgres</span>
      <span>AWS</span>
    </div>

    <div className='project-description'>Inherited over 10 million records to replace an existing backend and designed a Postgres database.</div>

    <div className='project-icons'>
      <FontAwesomeIcon className='icon-link' icon={faGithub} size='2x' style={{ color: "#afa6c4" }} onClick={() => openLink('https://github.com/dantan510')} />
    </div>

  <div className='project-image'>
    <img src={tekstyle} alt='cover image for tekstyle' />
  </div>
</div>
  )
}

export ProjectCard