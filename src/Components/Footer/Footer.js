/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer mt-5 text-light' id='footer'>
        <div className='footer-content flex-wrap'>
        <div className='f-left'>
        <h1 className='footer-logo'>Savoria</h1>
        <p className='f-description mt-4 mb-3'>lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className='f-socials'>
        <a href='https://www.facebook.com/zizo.mostafa.9047' target='_blank'><img src={assets.facebook_icon} className='me-3' alt=''/></a>
        <a href='https://www.linkedin.com/in/nour-mostafa-64a31531a/' target='_blank'><img src={assets.linkedin_icon} alt="" /></a>
        </div>
        </div>
        <div className='f-right d-flex flex-column align-items-start'>
            <h2>Get In Touch</h2>
            <ul>
                <li>+20 1070285315</li>
                <a href='mailto:nm01276368286@gmail.com' className='email'><li>nm01276368286@gmail.com</li></a>
                </ul>
        </div>
        </div>
        <hr/>
        <div className='f-bottom d-flex justify-content-center pb-3'>
        Copyright {new Date().getFullYear()} &copy; Nour Mostafa - All Rights Reserved
        </div>
    </div>
  )
}

export default Footer