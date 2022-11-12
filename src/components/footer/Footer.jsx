import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>TechSavvyCA.</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        {/* <li><a href="#experience">Experience</a></li> */}
        <li><a href="#dashboard">Dashoard</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/*
      <div className="footer__socials">
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </div>
      */}

      <div className="footer__copyright">
        <small>&copy; TechSavvyCA. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer
