import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faArrowRightLong } from "@fortawesome/free-brands-svg-icons"
import { faCopy, faDownload, faCheck } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'

// import { resume } from '../images/resume.pdf'

import '../styles/contact.css'

const Contact = ({ openLink }) => {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 1500)
      return () => clearTimeout(timer)
    }
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });


  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      const templateParams = {
        name,
        email,
        message
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      );

      // Display success alert
      toggleAlert('Form submission was successful!', 'success');
    } catch (e) {
      console.error(e);
      // Display error alert
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };


  return (
    <div className='contact-container' id='contact'>
      <div className='contact-header'>
        <h1 className='contact-title'>Send me a message!</h1>
        <div className='contact-sub'>Got a question or proposal, or just want <br /> to say hello? Go ahead!</div>
      </div>
      <form className='form-container' onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='form-wrapper'>
          {/* form name */}
          <div className='form-name input-data'>
            <input
              type='text'
              name='name'
              placeholder=''
              {...register('name', {
                required: { value: true, message: 'Please enter your name' },
                maxLength: {
                  value: 30,
                  message: 'Please use 30 characters or less'
                }
              })}
            ></input>
            <label>Your Name</label>
            {errors.name && <span className='error-message'>{errors.name.message}</span>}
          </div>
          {/* form email */}
          <div className='form-email input-data'>
            <input
              placeholder=''
              type='email'
              name='email'
              {...register('email', {
                required: true,
                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
              })}
            ></input>
            <label>Your Email</label>
            {errors.email && (
              <span className='error-message'>Please enter a valid email address</span>
            )}
          </div>
        </div>
        {/* form message */}
        <div className='form-message input-data'>
          <textarea
            placeholder=''
            rows={1}
            name='message'
            {...register('message', {
              required: true
            })}
          ></textarea>
          <label>Your Message</label>
          {errors.message && <span className='error-message'>Please enter a message</span>}
        </div>
        {/* button */}
        <button className='submit-button' type='submit'>
          SHOOT
          <svg id='right-arrow' xmlns="http://www.w3.org/2000/svg" width="55" height="20" viewBox="0 0 72 22">
            <path fill="none" stroke="#747fe0" strokeWidth="2" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8" />
          </svg>
        </button>
      </form>
      {alertInfo.display && (
        <div className={`alert alert-${alertInfo.type} alert-dismissible mt-5`} role='alert'>
          {alertInfo.message}
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='alert'
            aria-label='Close'
            onClick={() =>
              setAlertInfo({ display: false, message: '', type: '' })
            } // Clear the alert when close button is clicked
          ></button>
        </div>
      )}
    </div>
  )

}

export default Contact

