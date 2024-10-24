import { FaEnvelope, FaGithub, FaHome, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import "./FooterStyles.css";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <h3><FaHome size={25} style={{color:"white", marginRight: "1.5rem"}}/>Richmond, VA</h3>
                </div>
                
                <div className="phone">
                    <h3><FaPhone size={25} style={{color:"white", marginRight: "1.5rem"}}/>(804) 665 8361</h3>
                </div>
                
                <div className="email">
                    <h3><FaEnvelope size={25} style={{color:"white", marginRight: "1.5rem"}}/>panchalbarry@gmail.com</h3>
                </div>

            </div>
            <div className="right">
                <h4>About Me</h4>
                <p> I am Bhargav Panchal, a software developer with a Bachelor’s degree in Computer Science from Virginia Tech and an Associate’s degree from Reynolds Community College. I specialize in Java, Python, JavaScript, HTML, CSS, and the MERN stack, focusing on creating innovative solutions to enhance user experiences. </p>
                <div className="social">
                    <a href="https://www.linkedin.com/in/bhargav-panchal-219bb0185" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={20} style={{color: "white", marginRight: "2rem"}}/>
                    </a>
                    <a href="https://github.com/bhargav149" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={20} style={{color: "white", marginRight: "2rem"}}/>
                    </a>
                </div>
                    
            </div>
        </div>
    </div>
  )
}

export default Footer