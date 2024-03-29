import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faCopy, faDownload, faCheck } from '@fortawesome/free-solid-svg-icons'
// import { resume } from '../images/resume.pdf'

import '../styles/contact.css'

const Contact = ({openLink}) => {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 1500)
      return () => clearTimeout(timer)
    }
  })

  return (
    <div className='contact-container' id='contact'>
      <div className='contact-title'>Contact</div>
      <div>Please reach out regarding employment and networking opportunities. All inquires are welcome.</div>
      <div className='contact-box'>
        <div className='contact-info'>
          <div className='email'>dantan510@gmail.com</div>
          <FontAwesomeIcon className={`icon ${isCopied ? 'check-icon copied' : 'copy-icon'}`} icon={isCopied ? faCheck : faCopy} onClick={() => {
            navigator.clipboard.writeText('dantan510@gmail.com')
            setIsCopied(true)
          }} />
        </div>
        <div className='contact-info'>
          <div className='download' onClick={() => openLink('https://drive.google.com/file/d/1Bp4YqqC35n3wIc6tdJTcYnQ2w3kQxz0u/view?usp=sharing')} >Download My Resume Here</div>
          <FontAwesomeIcon icon={faDownload} />
        </div>
      </div>
    </div>
  )

}

export default Contact

