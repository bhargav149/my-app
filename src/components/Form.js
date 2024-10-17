import "./FormStyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" placeholder="Your Name" />
            <label>Email</label>
            <input type="text" placeholder="abc@xyz.com" />
            <label>Subject</label>
            <input type="text" placeholder="Subject" />
            <label>Message</label>
            <input type="text" placeholder="Typr your message here" />
            <button className="btn">Submit</button>
        </form>

    </div>
  )
}

export default Form