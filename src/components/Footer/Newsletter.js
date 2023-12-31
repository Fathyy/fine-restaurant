import React from 'react'
import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';

const Newsletter = () => {
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title='Newsletter'/>
        <h1 className="headtext__cormorant">Subscribe to our newsletter</h1>
        <p className="opensans">And never miss updates</p>
      </div>

      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder='Enter your email address' />
        <button type="button" className='custom__button'>Subscribe</button>

      </div>
    </div>


  )
}

export default Newsletter