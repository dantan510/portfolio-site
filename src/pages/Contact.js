import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import '../styles/contact.css'

const Contact = () => {

  return (
    <div className='contact-container'>
      <div className='contact-title'>Let's Connect!</div>
      <div className='contact-box'>
        <div>dantan510@gmail.com</div>
        <FontAwesomeIcon className='icon-link fadeIn' icon={faLinkedin} size='2x' style={{ color: "#afa6c4" }} onClick={() => openLink('https://www.linkedin.com/in/danieltan510/')} />
        <div>Download My Resume Here</div>
      </div>
    </div>
  )

}

export default Contact