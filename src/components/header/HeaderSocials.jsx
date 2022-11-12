import React from 'react'
import {RiLinkedinBoxFill} from 'react-icons/ri'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/nikhat-shaikh-31a36a1b1/" target="_blank"><RiLinkedinBoxFill/></a>
      <a href="https://twitter.com/_ni_sha" target="_blank"><AiFillTwitterSquare/></a>
      <a href="https://github.com/nikhatshaikh11" target="_blank"><AiOutlineGithub/></a>
    </div>
  )
}

export default HeaderSocials
