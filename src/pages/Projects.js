import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import tekstyle from '../images/tekstyle.png'
import libre from '../images/libre.png'
import api from '../images/api-micro.png'

import '../styles/project.css'

const Projects = ({ openLink }) => {

  // https://github.com/dantan510/portfolio-site
  return (
    <div className='project-container'>

      <div className='project-head'>Projects</div>

      <div className='project-card' >
        <div className='project-title-and-icons'>
          <span className='project-name'>tekstyle</span>
          <span><FontAwesomeIcon className='icon-link' icon={faGithub} size='2x' style={{ color: "#afa6c4" }} onClick={() => openLink('https://github.com/Seinfeld-Front-End-Capstone/fec-rfp2207-seinfeld/tree/main/client/src/components/questionsAnswers')} />
          </span>
        </div>

        <div className='project-languages'>
          <span>Javascript</span>
          <span>React</span>
          <span>AWS</span>
          <span>Webpack</span>
          <span>CSS</span>
        </div>

        <div className='project-image-and-description'>
          <img className='project-image' src={tekstyle} alt='cover image for tekstyle' />
          <div className='project-description'>
            A modern product detail page for an e-commerce site. Users can select different products to view, and can interact with the Q&A and rating and reviews components.
          </div>
        </div>

      </div>

      <div className='project-card' >
        <div className='project-title-and-icons'>
          <span className='project-name'>Api Microservice</span>
          <span><FontAwesomeIcon className='icon-link' icon={faGithub} size='2x' style={{ color: "#afa6c4" }} onClick={() => openLink('https://github.com/sdc-green-lantern/Questions-API')} />
          </span>
        </div>


        <div className='project-languages'>
          <span>Node.js</span>
          <span>Express</span>
          <span>Postgres</span>
          <span>AWS</span>
        </div>

        <div className='project-image-and-description'>
          <img className='project-image' src={api} alt='cover image for tekstyle' />
          <div className='project-description'>
            Inherited over 10 million records to replace an existing backend for an e-commerce site. Designed a Postgres database to handle high traffic, using an NGINX Load Balancer with multiple AWS EC2 instances to reduce response times to under 70ms.
          </div>
        </div>

      </div>

      <div className='project-card'>
        <div className='project-title-and-icons'>
          <span className='project-name'>Libre</span>
          <span><FontAwesomeIcon className='icon-link' icon={faGithub} size='2x' style={{ color: "#afa6c4" }} onClick={() => openLink('https://github.com/Blue-Ocean-3-Bowser/libre/tree/main/client/src/components/HomePage/SideBar/Notifications')} />
          </span>
        </div>

        <div className='project-languages'>
          <span>Javascript</span>
          <span>Typescript</span>
          <span>React</span>
          <span>Firebase</span>
          <span>AWS</span>
        </div>

        <div className='project-image-and-description'>
          <img className='project-image' src={tekstyle} src={libre} alt='cover image for libre' />
          <div className='project-description'>
            A social scheduling web application that lets users find mutual free time with friends and plan events. Users can create events, send invitations to friends, and see updates to their notifications in real time.
          </div>
        </div>

      </div>


    </div>
  )
}

export default Projects