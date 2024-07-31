import React from 'react'
import "../styles/Contact.css"

const Contact = () => {
  return (
    <div className="cont">
       <div className='contactMe'>
      <h1>Contact Us</h1>
      <form action='https://formspree.io/f/mkgwobjy' method='POST'>
        <label>Full Name </label>
        <input type='text' placeholder='Your Name' name='username' autoComplete='off' required></input>
        <label>Email</label>
        <input type='email' placeholder='Your Email' name='email' autoComplete='off' required></input>
        <label>Subject</label>
        <input type='text' placeholder='Subject' name='subject' autoComplete='off' required></input>
        <textarea name='message' cols="30" rows="7" autoComplete='off' required placeholder='Write Something Here!'></textarea>
        <input type='submit'></input>
      </form>
    </div>
    </div>

  )
}

export default Contact