import React from 'react'

import { client } from '../lib/client';
import { Product, FooterBanner, HeroSection } from '../components'





const Home = ({ products, bannerData }) => {
    return ( <
        div >

        <
        HeroSection heroBanner = { bannerData.length && bannerData[0] }
        / >

        <
        div className = "products-heading" >
        <
        h2 > Unique and Elegant Styles < /h2> <
        p > All products are custom made and designed to ensure the best possible quality
        while maintaining our goal towards 100 % renewable efforts. < /p> < /
        div >

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


export const getServerSideProps = async() => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    const bannerQuery = '*[_type == "product"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
        props: { products, bannerData }
    }

}

export default Home;