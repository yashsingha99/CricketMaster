import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/footer.css"

const Footer = () => {
  return (
    <div className='foot bg-blue-950 text-white '>
      <Link className='link' to='/'>&copy; CricketMaster</Link>
      <Link className='link' to='/contact'>Contact Us</Link>
      <Link className='link' to='/'>Terms &amp; Conditions</Link>
      <Link className='link' to='/'>Privacy</Link>
    </div>
  )
}

export default Footer