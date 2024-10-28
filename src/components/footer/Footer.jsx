/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import { PiFacebookLogoBold } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MJGSD</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Testimonials">Portfolio</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/markjoshua.stodomingo/" target='_blank' rel='noreferrer'><PiFacebookLogoBold /></a>
        <a href="https://www.instagram.com/mjstodomingo_/" target='_blank' rel='noreferrer'><IoLogoInstagram /></a>
      </div>

      <div className="footer__copyright">
      <small>&copy; Mark Joshua Sto Domingo. All rights reserved.</small>
    </div>
    </footer>
  )
}

export default Footer