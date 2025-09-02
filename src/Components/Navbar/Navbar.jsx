import React, { useRef, useState } from "react";
import './Navbar.css'
import logo from '../../assets/mylogo.png'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { AiOutlineMenu } from 'react-icons/ai';
import { BsXLg } from 'react-icons/bs';

const Navbar = () => {
  const [menu,setMenu]=useState("home")
  const menuRef = useRef();

  const openMenu = () => {
  menuRef.current.style.right = "0px";
};

const closeMenu = () => {
  menuRef.current.style.right = "-350px";
};


  return (
    <div className="navbar">
      <img src={logo} alt=""  className="navbar-logo"/>
     <p className="nav-mob-open" onClick={openMenu}><AiOutlineMenu/></p>

      <ul ref={menuRef}  className="nav-menu">
      <p className="nav-mob-close" onClick={closeMenu}><BsXLg/></p>
      
      <li><AnchorLink className="anchor-link"  href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<hr/>:<></> }</li>
      <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<hr/>:<></> }</li>
      <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<hr/>:<></> }</li>
      <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<hr/>:<></> }</li>
      <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<hr/>:<></> }</li>
      </ul>
      <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
    </div>
  );
};

export default Navbar;