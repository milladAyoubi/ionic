import React from 'react'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className="hero-section-container">
        <div>
            <p className="new-products">New Products for 2023!</p>
            <h3>UNIQUE AND <br></br> ELEGANT STYLES</h3>
            <p className="hero-section-desc">All products are custom made and designed to ensure the best possible <br></br> quality while maintaining our goal towards 100 % renewable efforts.</p>
            <img src="" alt="banner-image" className="her-section-image"/>
        </div>

        <div>
            <Link href="/product/ID" >

                <button type="button">VIEW COLLECTION</button>
                </Link>
                <div className="desc">
                    <h5>Description</h5>
                    <p>DESCRIPTION</p>
                </div>
        </div>
      
    </div>
  )
}

export default HeroSection
