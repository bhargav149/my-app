import "./AboutContentStyles.css";

import React from 'react'
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p> thi si s me</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
            
    </div>
  )
}

export default AboutContent