import React from 'react'
import {Link} from 'react-scroll'

import { urlFor } from '../lib/client'
import banner from '@/sanity_ionic/schemas/banner'

const HeroSection = ({ heroBanner }) => {
  return (
    <div className="hero-section-container">
        <div>


          <div className="hero-contents section-container">
            <p className="new-products">{heroBanner.smallText}</p>
            <h3>UNIQUE AND <br></br>ELEGANT STYLES</h3>
            <p className="hero-section-desc">All products are custom made and designed to ensure the best possible <br></br> quality while maintaining our goal towards 100 % renewable efforts.</p>
           <Link activeClass="active" to="product"  duration={500} spy={true} smooth={true} > <button className="btn41-43 btn-41">{heroBanner.buttonText}</button></Link>
           
          </div>

          
        </div>

        
      
    </div>
  )
}

export default HeroSection
