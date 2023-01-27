import React from 'react'
import { client } from '../lib/client';
import { Product, FooterBanner, HeroSection } from '../components'
import banner from '@/sanity_ionic/schemas/banner';





const Home = ({ products, bannerData }) => {
    return ( <
        div >

        <
        HeroSection heroBanner = { bannerData[0] }
        / >


        <
        FooterBanner / >

        <
        /div>

    )
}


export const getServerSideProps = async() => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
        props: { products, bannerData }
    }

}

export default Home;