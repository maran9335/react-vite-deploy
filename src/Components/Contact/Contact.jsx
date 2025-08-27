import React from 'react'
import './Contact.css'
import { MdMail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { MdCall } from 'react-icons/md';
const Contact = () => {

     const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4d110ffb-1e6a-4062-8007-e15df3d0e4ee");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
    alert(res.message)
    }
  };
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch <hr /></h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk </h1>
                <p>I'm currently avalable to take on new projects,so feel free to send me message about anything that you want me to work on.You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                       <MdMail/> <p> maran9335@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <MdCall/><p>+971 528812913,<br />+91 8667781927</p>
                    </div>
                    <div className="contact-detail">
                        <FaLocationDot/><p>Dubai,UAE</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your Name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your Email' name='email' />
                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message" rows='8' placeholder='Enter Your Message'></textarea>
                <button type='submit' className='contact-submit'>Submit Now</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
