import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const HeroSection = ({ heroBanner }) => {
  return (
    <div className="hero-section-container">
        <div>

            <img src={urlFor(heroBanner.image)} alt="banner-image" className="hero-section-image"/>

            <div className="hero-contents">
            <p className="new-products">{heroBanner.smallText}</p>
            <h3>UNIQUE AND <br></br> ELEGANT STYLES</h3>
            <p className="hero-section-desc">All products are custom made and designed to ensure the best possible <br></br> quality while maintaining our goal towards 100 % renewable efforts.</p>
           
           
            </div>
        </div>

        
      
    </div>
  )
}

export default HeroSection
