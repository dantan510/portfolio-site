import React from 'react'
import '../styles/work.css'

const Work = () => {

  return (
    <div className='work-container'>
      <div className='work-header'>Work Experience</div>
      <div className='work-experience-container'>

        <div className='work-experience-card'>
          <div className='job-title'>
            Software Engineer | Bushido
            <span className='job-date'>May 2023 - Current</span>
          </div>
          <div className='company-description'>Streaming service and ticket provider startup</div>
          <ul>
            <li>
              Achieved efficient data retrieval and manipulation with tRPC, allowing users to create events and streamlined tickets to Stripe integration for secure and smooth payment handling
            </li>
            <li>
              Implemented integration and unit tests with Jest, utilizing Github Actions to automate testing processes and identify potential defects early in the development cycle
            </li>
            <li>
              Modeled a scalable database schema, effectively capturing complex relationships and ensuring data organization and optimized querying capabilities
            </li>
          </ul>

        </div>

        <div className='work-experience-card'>
          <div className='job-title'>
            Client Manager | TAT Horizon Corp
            <span className='job-date'>January 2021 - April 2022</span>
          </div>
          <div className='company-description'>Private Construction Company</div>
          <ul>
            <li>
              Monitored day to day business operations by providing on site support, documenting issues and resolutions for each project
            </li>
            <li>
              Acted as a liaison and cultivated lucrative relationships for new and existing clients through effective communication
            </li>
            <li>
              Demonstrated exceptional problem-solving abilities by effectively resolving client issues, resulting in enhanced project outcomes and client satisfaction
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Work