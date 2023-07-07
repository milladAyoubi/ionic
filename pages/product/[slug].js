import React, { useState} from 'react'
import { client, urlFor } from '../../lib/client';
import reviews from '../../styles/images/reviews.png';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Product } from '../../components'; 
import { useStateContext } from '../../context/StateContext'
import ColorSelector from '@/components/ColorSelector';

import Accordion from '@/components/Accordion';

const ProductDetails = ({product, products}) => {

    const [isOpen, setIsOpen] = useState(false);
    const Colors = [ 
        { hex: '#AE815F', name: 'Caramel Twist' },
        { hex:'#C5C5C7', name: 'Silver Ice' }, 
        { hex: '#EB8860', name: 'Vera Orange'},
        { hex:'#303030', name: 'Obsidian'},
    ];

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const accordions = [
    { title: 'Materials', contentTitle: 'Composition', content: 'Cotton is a soft and versatile natural fibre harvested from the cotton plant. Polyester is a synthetic fibre made from crude oil (a fossil resource).' },
    { title: 'Care Guide', contentTitle: 'Care instructions',content: 'Only non-chlorine bleach when needed. Medium iron. Machine wash cold' },
  
  ];

    console.log(product)
    const {image, name, details, price } = product;
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty} = useStateContext();
  return (
    <div className='product-page'>
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


                    <div className='accordion-section'>
                   
    
      {accordions.map((accordion, index) => (
        <Accordion
          key={index}
          title={accordion.title}
          contentTitle={accordion.contentTitle}

          content={accordion.content}
          index={index}
          openAccordionIndex={openAccordionIndex}
          setOpenAccordionIndex={setOpenAccordionIndex}
        />
      ))}
 
                    </div>


                    <div className="color-group">

                    <div>
                    <div>
                      
                     <ColorSelector colors={Colors} />
                     </div>
                    </div>
                       
                    </div>

                    <div className="quantity">
                        <h4>Quantity</h4>
                        <p className="quantity-desc">
                            <span className="minus" onClick="">{decQty}<AiOutlineMinus/></span>
                            <span className="num" onClick="">{qty}</span>
                            <span className="plus" onClick=""><AiOutlinePlus/>{incQty}</span>

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
                <div className="maylike-products-container track">
                    {products.map((item) => (
                        <Product key={item._id}
                        product={item}/>
                    ))}
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