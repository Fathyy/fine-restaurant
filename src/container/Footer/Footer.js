import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'

import { FooterOverlay, Newsletter } from '../../components';
import {images} from '../../constants';
import './Footer.css';

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay/>
      <Newsletter/>


      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className="p__opensans">Lorem, ipsum dolor sit amet</p>
          <p className="p__opensans">02626525525</p>
          <p className="p__opensans">02626525525</p>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="" />
          <p className="p__opensans">02626525525</p>
          <img src={images.spoon} alt="" className='spoon__img' style={{marginTop: '15px'}} />
          <div className="app__footer-links_icons">
            <FiFacebook/>
            <FiTwitter/>
            <FiInstagram/>
          </div>
        </div>

        <div className="app__footer-links-work">
          <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className="p__opensans">Lorem, ipsum dolor sit amet</p>
          <p className="p__opensans">02626525525</p>
          <p className="p__opensans">02626525525</p>
        </div>

      </div>

      <div className="footer__copyright">
        <p className="p__opensans">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
    </div>
  )
}

export default Footer