import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{BsGithub} from 'react-icons/bs'
import{IoLogoGooglePlaystore} from 'react-icons/io5'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https:linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https:github.com" target="_blank"><BsGithub/></a>
        <a href="https:playstore.com" target="_blank"><IoLogoGooglePlaystore/></a>

    </div>
  )
}

export default HeaderSocials