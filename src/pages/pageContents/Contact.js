import React from 'react'

const Contact = () => {
  return (
    <div className="contact-page">
      <h3>Am I looking for a new job ?</h3>
      <p className="job-answer">Yes</p>
      <h3>How can you contact me ?</h3>
      <p className="contact-answer">
        <span role="img" aria-label="envelope emoji">✉️ </span>
        <span>By email </span>
        <a href="mailto:recrutement.xplx@gmail.com">here</a>
      </p>
      <p className="resume-link">My resume as PDF can be found <a href="https://drive.google.com/file/d/1RVYHJtH7HW8jeaqgdoVVDtVTMAbvshHB/view?usp=sharing" target="_blank" rel="noopener noreferrer">here</a></p>
      <p className="phone-disclaimer">
        <small>I don't want to give my phone number because... well, I don't want it public and I don't want to be harrased</small>
      </p>
    </div>
  )
}

export default Contact
