import React from 'react'
import { client } from '../lib/client';
import { Product, Promotion, FooterBanner, HeroSection, Collection} from '../components'
import banner from '@/sanity_ionic/schemas/banner';





const Home = ({ products, bannerData, collections }) => {
   
    return (
  
        <div>
        

        <HeroSection heroBanner = { bannerData[0] }/ >


  <div className="section-container">
        <div className="products-heading ">
                <h2>Categories</h2>
                <p>Browse through categories and products available on our store</p>
            </div>
            <div className="collection-container section-container">
                {collections?.map((collection) => <Collection key=
                {collection._id} collection={collection} />)}
            </div>
    </div>
 

    <Promotion/>


    <div className="section-container">
            <div className="products-heading">
                <h2>Our Collection</h2>
                <p>From here you can view all of out available products</p>
            </div>

            <div className="products-container">
                {products?.map((product) => <Product key=
                {product._id} product={product} />)}
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