import React from 'react'
import { client } from '../lib/client';
import { Product, FooterBanner, HeroSection, Collection} from '../components'
import banner from '@/sanity_ionic/schemas/banner';





const Home = ({ products, bannerData, collections }) => {
   
    return (
  
        <div>
        

        <HeroSection heroBanner = { bannerData[0] }/ >


    <div>
        <div className="products-heading">
                <h2>Product Categories</h2>
                <p>Browse through our categories and avalible products on our store</p>
            </div>
            <div className="products-container">
                {collections?.map((collection) => <Collection key=
                {collection._id} collection={collection} />)}
            </div>

    </div>


    <div>
            <div className="products-heading">
                <h2>Product Categories</h2>
                <p>Browse through our categories and avalible products on our store</p>
            </div>

            <div className="products-container">
                {products?.map((product) => <Product key=
                {product._id} product={product} />)}
            </div>
     </div>
           



     

        <FooterBanner/>

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