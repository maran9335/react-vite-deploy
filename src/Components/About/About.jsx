import React from 'react'
import './About.css'
import profile_img from'../../assets/my.jpeg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me <hr /> </h1>
      
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt=""className='profile_img'/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Dedicated IT Support Engineer with hands-on experience in diagnosing and resolving technical issues, providing excellent user support, and maintaining IT infrastructure. Skilled in Windows, networking, remote support tools, and hardware maintenance.</p>
            <p>My passion is It support,Networking and Development</p>
          </div>
          
          <div className="about-skills">
            <div className="about-skill"><p>HTML &CSS </p><hr style={{width:'64%'}} /></div>
            <div className="about-skill"><p>REACT JS </p><hr style={{width:'50%'}} /></div>
            <div className="about-skill"><p>HARDWARE </p><hr style={{width:'80%'}} /></div>
            <div className="about-skill"><p>NERWROKING</p><hr style={{width:'70%'}} /></div>
            <div className="about-skill"><p>LINUX </p><hr style={{width:'60%'}} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievment">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
