import "./AboutContentStyles.css";

import React from 'react';
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h2>Who Am I?</h2>
            <p>I graduated with a Bachelor of Computer Science at Virginia Tech, after successfully earning an Associate of Science in Computer Science from Reynolds Community College in May 2022. My academic achievements include consistent honor roll placements and membership in the Phi Theta Kappa Honor Society since January 2021.</p>

            <h2>Technical Skills and Technologies</h2>
            <p>My technical toolkit is extensive, with proficiency in programming languages such as Java, C, C++, Swift, Python, SQL, Rust, and JavaScript. I am skilled in web development technologies including HTML, CSS, and the MERN stack, and have experience with software development environments such as Visual Studio, Microsoft SQL Server, Eclipse, and XCode. I also have a good grasp of Docker for containerization and AWS for deployment.</p>

            <h2>Leadership and Community Involvement</h2>
            <ul>
              <li><strong>President of Hindu YUVA at Virginia Tech:</strong> Since Fall 2022, I have been leading this cultural organization, focusing on promoting Hinduism and fostering a supportive community for cultural celebration.</li>
              <li><strong>Member of CS Squared:</strong> Since Fall 2022, actively participating in this community service group that leverages software development skills to aid the community, significantly enhancing classmates' performance in tech-related subjects.</li>
            </ul>

            <h2>Professional Experience</h2>
            <p>Advising Services at Reynolds Community Inn: Managed the application processes for hundreds of students, improving application timelines and enrollment figures through effective interaction and support.</p>
        
        <div className="right">
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
            {/* Download Resume Button */}
            <div className="bottom">
              <a href="https://drive.google.com/file/d/1Io6BhiQ1KwE9fy0XF8HwJbw7z21UkT9d/view?usp=drive_link" download>
                <button className="btn btn-light">Download Resume</button>
            </a>
            </div>
            
        </div>
        
        </div>

        
            
    </div>
  )
}

export default AboutContent;
