/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './nav.css'
import { HiOutlineHome } from "react-icons/hi2";
import { FaRegUserCircle } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href='#' onClick ={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiOutlineHome /></a>
      <a href='#about' onClick ={() => setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}><FaRegUserCircle /></a>
      <a href='#experience' onClick ={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><IoBookOutline /></a>
      <a href='#portfolio' onClick ={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FaRegHeart /></a>
      <a href='#contact' onClick ={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineEmail /></a>
    </nav>
  )
}

export default Nav
