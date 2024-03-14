import React from 'react'
import '../styles/work.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Work = () => {

  return (
    <div className='work-container' id='work'>
      <div className='work-header'>Work Experience</div>
      <div className='work-experience-container'>

        <div className='work-experience-card'>
          <div className='company'>
            4Insite
            <span className='job-date'>September 2023 - Feburary 2024</span>
          </div>
          <div className='job-title'>Product Management Apprentice</div>
          <ul>
            <li>
              Conducted market research and user interviews to gather insights on industry trends and customer needs, facilitating data-driven decision making and improvements in the product
            </li>
            <li>
              Engaged with stakeholders at all levels, including customers, executives, and internal teams to gather feedback, communicate product updates, and address concerns
            </li>
            <li>
              Developed and maintained product documentation, including user stories, feature requirements, and product specifications, ensuring clear communication and alignment across teams
            </li>
          </ul>
        </div>

        <div className='work-experience-card'>
          <div className='company'>
            Bushido
            <span className='job-date'>March 2023 - September 2023</span>
          </div>
          <div className='job-title'>Software Engineer</div>
          <ul>
            <li>
              Developed query handling functionalities using tRPC for efficient data retrieval and manipulation, resulting in a 5% reduction in query response times
            </li>
            <li>
              Integrated Stripe API to facilitate secure payment processing and smooth ticket creation for events on a production backend
            </li>
            <li>
              Implemented integration and unit tests with Jest, utilizing Github Actions to automate testing processes and identify potential defects early in the development cycle
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Work

