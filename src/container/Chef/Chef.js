import React from 'react'
import images from '../../constants/images';
import {SubHeading} from '../../components';
import './Chef.css'

const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's word"/>
        <h1 className="headtext__cormorant">What we believe in</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="" />
            <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit saepe repudiandae sed possimus voluptatum, et provident blanditiis dolore incidunt nam!</p>
          </div>

          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eos veritatis itaque aut!</p>
        </div>

        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef and founder</p>
          <img src={images.sign} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Chef