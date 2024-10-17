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
                    <h3><FaPhone size={25} style={{color:"white", marginRight: "1.5rem"}}/>xxx-xxx-xxxx</h3>
                </div>
                
                <div className="email">
                    <h3><FaEnvelope size={25} style={{color:"white", marginRight: "1.5rem"}}/>panchalbarry@gmail.com</h3>
                </div>

            </div>
            <div className="right">
                <h4>About Me</h4>
                <p> this is about me xxxxxxxxxxxxxxxxxxxxxx
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx </p>
                <div className="social">
                    <FaLinkedin size={20} style={{color:"white", marginRight: "2rem"}}/>
                    <FaGithub size={20} style={{color:"white", marginRight: "2rem"}}/>
                </div>
                    
            </div>
        </div>
    </div>
  )
}

export default Footer