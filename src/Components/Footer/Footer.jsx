import React from 'react'
import { FaUser } from 'react-icons/fa';
import footer_logo from '../../assets/footerlogo.png'

import './Footer.css'
 const Footer = () => {
  return (
    <div id='' className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="" className='footerlogo' />
            <p>Iam a It engineer from, UAE with 3years of experience in companies like Alattar group,Regal Tech. </p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <FaUser/>
                <input type="email" placeholder='Enter Your Email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">@ 2025 Manimaran.All rights</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
