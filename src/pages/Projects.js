import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import tekstyle from '../images/tekstyle.png'
import libre from '../images/libre.png'
import api from '../images/api-micro.png'

import '../styles/project.css'

const Projects = ({ openLink }) => {

  return (
    <div className='project-container' id='projects'>
      <div className='project-head'>Projects</div>
      <div className='project-card' onClick={() => openLink('https://github.com/Seinfeld-Front-End-Capstone/fec-rfp2207-seinfeld/tree/main/client/src/components/questionsAnswers')}>

        <img className='project-image' src={tekstyle} alt='cover image for tekstyle' />
        <div className='project-content'>
          <div className='project-name'>tekstyle</div>
          <div className='project-description'>
            Tekstyle is a modern product detail page for an e-commerce site. Users can select from a wide range of products, each presented with images and a description of the product. A key feature of this page is the interactive Q&A component, allowing users to ask questions directly on the product page, which can be answered by other users. Users can also interact with the entries by voting and reporting.
          </div>
          <div className='project-languages'>
            <span>Javascript</span>
            <span>React</span>
            <span>AWS</span>
            <span>Webpack</span>
            <span>CSS</span>
          </div>
        </div>
        <div><FontAwesomeIcon className='icon-link' icon={faGithub} size='2x' onClick={() => openLink('https://github.com/Seinfeld-Front-End-Capstone/fec-rfp2207-seinfeld/tree/main/client/src/components/questionsAnswers')} />
        </div>
      </div>

      <div className='project-card' onClick={() => openLink('https://github.com/sdc-green-lantern/Questions-API')}>
        <img className='project-image' src={api} alt='cover image for questions api' />
        <div className='project-content'>
          <div className='project-name'>API Microservice</div>
          <div className='project-description'>
            This project involved managing over 10 million records to revamp the backend of an established e-commerce site. I designed a Postgres database to house the data and ensure it could withstand high traffic demands and implemented an NGINX load balancer, which efficiently distributed incoming traffic across multiple AWS EC2 instances.
          </div>
          <div className='project-languages'>
            <span>Node.js</span>
            <span>Express</span>
            <span>Postgres</span>
            <span>AWS</span>
          </div>
        </div>
        <div><FontAwesomeIcon className='icon-link' icon={faGithub} size='2x' onClick={() => openLink('https://github.com/sdc-green-lantern/Questions-API')} />
        </div>
      </div>



      <div className='project-card' onClick={() => openLink('https://github.com/Blue-Ocean-3-Bowser/libre')}>
        <img className='project-image' src={libre} alt='cover image for libre' />
        <div className='project-content'>
          <div className='project-name'>Libre</div>
          <div className='project-description'>
            Libre is a social scheduling application designed to simplify the process of finding common free time among friends to organize events. Users can schedule events within the platform, inviting their friends to partcipate. The application also features a real-time notification system, ensuring that all particpants are immediately informed of any event invitations, changes to events, or friend requests.
          </div>
          <div className='project-languages'>
            <span>Javascript</span>
            <span>Typescript</span>
            <span>React</span>
            <span>Firebase</span>
            <span>AWS</span>
          </div>
        </div>
        <div><FontAwesomeIcon className='icon-link' icon={faGithub} size='2x' onClick={() => openLink('https://github.com/Blue-Ocean-3-Bowser/libre')} />
        </div>
      </div>
    </div>
  )
}

export default Projects

