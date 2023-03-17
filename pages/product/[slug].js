import React from 'react'
import { client, urlFor } from '../../lib/client';
import reviews from '../../styles/images/reviews.png';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Product } from '../../components'; 

const ProductDetails = ({product, products}) => {
    console.log(product)
    const {image, name, details, price } = product;
  return (
    <div>
        <div className="product-detail-container">
            
                
                <div className="image-container">
                <img src={urlFor(image && image[1])} width={'600px'}  className=""
                 />
                </div>

                <div className="product-details-text">
                    <h1>{name}</h1>
                    <div className="reviews-section">
                    <AiFillStar className="star-review"/>
                    <AiFillStar className="star-review"/>
                    <AiFillStar className="star-review"/>
                    <AiFillStar className="star-review"/>
                    <AiOutlineStar className="star-review"/>
                    <p>(282)</p>
                    </div>
                    <p className="product-page-price">${price}</p>
                    <p className="product-details">{details}</p>
                    <br></br>
                    <p>Case Size: 46 mm</p>
                    <p>Case Water Resistance: 10 ATM</p>
                    <p>Case Material: Admantium</p>


                    <div className="color-group">
                        <div className="color-group-item "><div className="color-caramel"></div></div>
                        <div className="color-group-item color-selector"><div className="color-ivory "></div></div>
                        <div className="color-group-item"><div className="color-spastic"></div></div>
                        <div className="color-group-item "><div className="color-obsidian"></div></div>
                    </div>
                    <p className="color-name">Silver</p>

                    <div className="quantity">
                        <h4>Quantity</h4>
                        <p className="quantity-desc">
                            <span className="minus" onClick=""><AiOutlineMinus/></span>
                            <span className="num" onClick="">1</span>
                            <span className="plus" onClick=""><AiOutlinePlus/></span>

                        </p>
                    </div>

                    <div className="buttons">
                    <button type="button" className="buy-now" onClick="">Purchase Now</button>

                    <button type="button" className="add-to-cart" onClick="">Add To Cart</button>
                    </div>
                 </div> 
        </div>

        <div className="maylike-products-wrapper">
            <h2>You May Also Like</h2>
            <div className="marquee">
                <div className="maylike-products-container">
                    {products.map((item) => {

                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }
    `;
    const products = await client.fetch(query);
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths, 
        fallback: 'blocking'
    }
}

export const getStaticProps = async({ params: 
    { slug }}) => {
    const query = `*[_type == "product" && slug.
    current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

   
    return {
        props: { product, products }
    }

}
export default ProductDetails