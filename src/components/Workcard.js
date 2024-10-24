import "./WorkcardStyles.css";

import React from 'react'


const Workcard = (props) => {
  return <div className="project-card">
            <img src={props.imgsrc} alt="project" />
            <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btn">
                        <a href={props.source} target="_blank" rel="noopener noreferrer" className="btn btn-light">Source</a>  
                    </div>
                </div>
        </div> 
}

export default Workcard