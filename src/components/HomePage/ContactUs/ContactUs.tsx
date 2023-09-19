import React from 'react'
import "./contactus.scss"

const ContactUs = () => {
  return (
    <div className='contactus_container' id='contact'>
      <div className='img_container'>
        <div className='left'>
          <img src="Contact1.png" className='img1' alt="" />
          <img src="Contact2.png" className='img2' alt="" />
        </div>
        <div className='right'>
          <img src="Contact3.png" className='img3' alt="" />
          <img src="Contact4.png" className='img4' alt="" />
        </div>

      </div>
      <div className='contact_content'>
        <h2 className='title'>
          Contact Us
        </h2>
        <p className='desc'>
          Contact us
          Our team would love to hear from you!
        </p>

        <div className='form'>
          <div className='namefield'>
            <input type="text" className='name' placeholder='First Name' />
            <input type="text" className='lastname' placeholder='Last Name' />
          </div>

          <input type="text" placeholder='Email address' className='email' />
          <textarea name="" id="" placeholder='message' className='message' rows={11}  ></textarea>
          <button>
            Send Message
          </button>
        </div>

      </div>
    </div>
  )
}

export default ContactUs