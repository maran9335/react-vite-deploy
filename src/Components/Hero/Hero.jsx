import React from 'react'
import './Hero.css'
import profile_img from '../../assets/my.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt=""  className='profile-img'/>
        <h1><span >I'm Manimaran,</span> IT Engineer based in UAE.</h1>
        <p>I am a IT support Engineer from Dubai,UAE with 3 years of experience.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
            <div className="hero-resume"> <a href="https://drive.google.com/file/d/1mIQ8VgBuNUTJIxHSPsKg2hx6kHXywEIM/view?usp=drivesdk" className='resume'>My resume</a></div>
        </div>
    </div>
  )
}

export default Hero
