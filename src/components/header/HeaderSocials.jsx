import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/mjgsd/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/Amats817" target="_blank" rel="noreferrer"><IoLogoGithub /></a>
    </div>
  )
}

export default HeaderSocials