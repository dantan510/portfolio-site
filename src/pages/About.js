import React, { useRef } from 'react';
import profile from '../images/me.jpg'
import '../styles/about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNode } from '@fortawesome/free-brands-svg-icons'
import { Icon } from '@iconify/react';
import trpcIcon from '@iconify/icons-devicon/trpc';
import typescriptIcon from '@iconify/icons-devicon/typescript';
import reactIcon from '@iconify/icons-logos/react';
import prismaIcon from '@iconify/icons-simple-icons/prisma';
import prismaWordmark from '@iconify/icons-devicon/prisma-wordmark';
import nodejsIcon from '@iconify/icons-devicon/nodejs';
import postgresqlIcon from '@iconify/icons-logos/postgresql';
import mongodbIcon from '@iconify/icons-devicon/mongodb';


const About = () => {


  return (
    <div className='aboutpage' id='about'>
      <div className='aboutpage-content'>
        <div className='aboutpage-description'>

          <div className='aboutMe'>About Me</div>

          <div className='aboutpage-intro'>Hello! I'm Dan, a software engineer based in the Bay Area.</div>

          <div className='aboutpage-body'>Near the start of 2022, I decided to transition to software engineering and completed Hack Reactor's Software Engineering Immersive, where I got experience developing full stack applications.</div>

          <div>
            In my free time, I enjoy playing basketball and spikeball with friends. When winter comes around, I love to go skiing or snowboarding. Due to my attachment to combat sports, an affection that stems from my high school wrestling background, I eventually want to take up boxing or jiu-jitsu.
          </div>

        </div>

        <div>
          <img id='profile-picture' src={profile} alt="profile picture" />
        </div>

      </div>
      <div className='skills-container'>
        <Icon className='skills-icons' icon={typescriptIcon} />
        <Icon className='skills-icons' icon={reactIcon} />
        <Icon className='skills-icons' icon={nodejsIcon} />
        <Icon className='skills-icons' icon={postgresqlIcon} />
        <Icon className='skills-icons' icon={mongodbIcon} />
        <Icon className='skills-icons' icon={trpcIcon} />
        <Icon className='skills-icons' icon={prismaIcon} />

      </div>
    </div>
  )
}

export default About

