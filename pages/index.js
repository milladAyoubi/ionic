"use client"
import React from 'react'
import { client } from '../lib/client';
import Image from 'next/image';
import { Product, Promotion, FooterBanner, HeroSection, Collection, } from '../components'
import About from '../components/About'
import banner from '@/sanity_ionic/schemas/banner';






const Home = ({ products, bannerData, collections }) => {
   
    return (
  
        <div>
        

        <HeroSection heroBanner = { bannerData[0] }/ >


  <div className="section-container">
        <div className="products-heading">
                <h2>Categories</h2>
                <p>Browse through categories and products available on our store</p>
            </div>
            <div className="collection-container section-container">
                {collections?.map((collection) => <Collection key=
                {collection._id} collection={collection} />)}
            </div>
    </div>
 

    <Promotion/>


    <div className="section-container" id="product">
            <div className="products-heading">
                <h2>Our Collection</h2>
                <p>From here you can view all of out available products</p>
            </div>

            <div className="products-container">
                {products?.map((product) => <Product key=
                {product._id} product={product} />)}
            </div>
     </div>

    
     <div id="about"></div>      
     <About />


    <div className="section-container" >

            <div className="products-heading">
                <h2>Our Core Values</h2>
            </div>
             
            <div className="about-us-container">
                <div className='about-us-container-layout'>

                    <div className='diversity-image'>
                       
                    </div>

                    <div className='about-us-text'>
                        <h1>Diversity</h1>
                        <p>IONIC is committed to inclusivity and diversity. The store is also dedicated to promoting diversity and inclusivity in its advertising and marketing campaigns, featuring models and influencers of different ages, sizes, and ethnicities. The store also features a diverse range of styles and designs, catering to different preferences and cultural backgrounds.</p>
                    </div>
                </div>
                <div className='about-us-container-layout'>

                    

                    <div className='about-us-text'>
                        <h1>Quality Materials</h1>
                        <p>IONIC prides itself on producing high-quality garments that are built to last. The store uses only the finest materials, such as premium cotton, silk, and linen, that are carefully selected for their durability and comfort. Each piece of clothing is expertly crafted by skilled artisans who pay close attention to every detail, ensuring that each garment is made to the highest standards.</p>
                    </div>

                    <div className='diversity-image-01'>
                       
                    </div>
                </div>
                <div className='about-us-container-layout'>

                    <div className='diversity-image-02'>
                       
                    </div>

                    <div className='about-us-text'>
                        <h1>Sustainability</h1>
                        <p>IONIC is a sustainable clothing store that prides itself on its environmentally-friendly practices. The store sources all of its materials from ethical and sustainable suppliers. IONIC is dedicated to creating fashion that is not only stylish, but also kind to the planet.</p>
                    </div>
                </div>
            </div>    
            
    </div>



     

        

    </div>

    )
}


export const getServerSideProps = async() => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);


    const collectionQuery = '*[_type == "collection"]';
    const collections = await client.fetch(collectionQuery);

    return {
        props: { products, bannerData, collections }
    }

}

export default Home;