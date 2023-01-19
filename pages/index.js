import React from 'react'
import { Product, FooterBanner, HeroSection } from '../components'

const Home = () => {
    return ( <
        div >

        <
        HeroSection / >

        <
        div className = "products-heading" >
        <
        h2 > Unique and Elegant Styles < /h2> <
        p > All products are custom made and designed to ensure the best possible quality
        while maintaining our goal towards 100 % renewable efforts. < /p> <
        /div>

        product <
        div className = "products-container" > {
            ['Product 1', 'Product 2'].map(
                (product) => product
            )
        } <
        /div>

        <
        FooterBanner / >

        <
        /div>

    )
}

export default Home;