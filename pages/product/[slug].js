import React, { useState, useEffect} from 'react'
import { client, urlFor } from '../../lib/client';
import reviews from '../../styles/images/reviews.png';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Product } from '../../components'; 
import { useStateContext } from '../../context/StateContext'
import ColorSelector from '@/components/ColorSelector';
import SizeSelector from '@/components/SizeSelector';
import Favourite from '@/components/Favourite';
import SizeGuide from '@/components/SizeGuide';

import Accordion from '@/components/Accordion';

const ProductDetails = ({product, products}) => {

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const Colors = [ 
        { hex: '#AE815F', name: 'Caramel Twist' },
        { hex:'#C5C5C7', name: 'Silver Ice' }, 
        { hex: '#EB8860', name: 'Vera Orange'},
        { hex:'#303030', name: 'Obsidian'},
    ];

    const tshirtSizes = ['S', 'M', 'L', 'XL'];


    const toggleAccordion1 = () => {
      setIsOpen1(!isOpen1);
      
    };

    const toggleAccordion2 = () => {
        setIsOpen2(!isOpen2);
        
      };
    
  
    const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
/*
  const accordions = [
    { title: 'Materials', contentTitle: 'Composition', content: 'Cotton is a soft and versatile natural fibre harvested from the cotton plant. Polyester is a synthetic fibre made from crude oil (a fossil resource).' },
    { title: 'Care Guide', contentTitle: 'Care instructions',content: 'Only non-chlorine bleach when needed. Medium iron. Machine wash cold' },
  
  ];
  
*/

    console.log(product)
    const {image, name, details, price, materials, careguide } = product;
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, setShowCart} = useStateContext();

    const resetToDefaults = () => {
        setIsOpen1(false);
        setIsOpen2(false);
      };
    
      useEffect(() => {
        // Reset values to default on page reload
        resetToDefaults();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [name]);

  return (
    <div className='product-page'>
        <div className="product-detail-container">
            
                
                <div className="image-container">
                <img src={urlFor(image && image[1])} width={'100%'} height={'100%'}  className=""
                 />
                </div>

                <div className="product-details-text">

    
    
                <div className='product-title'>
                <h1>{name}</h1>
                <Favourite />
                </div>
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

                    <div className={`${product.name !== "KRONOS PEACEKEEPER"  ? 'hide-product ' : 'show-group '}`}>
                    <div>
                    <p>Case Size: 46 mm</p>
                    <p>Case Water Resistance: 10 ATM</p>
                    <p>Case Material: Admantium</p>
                    </div>
                    </div>


                    <div className='accordion-section'>
                   
    
      <div className="accordion">
      <div
        className={`accordion-header ${isOpen1 ? 'selected' : ''}`}
        onClick={toggleAccordion1}>
        <h4  className={`${isOpen1 ? 'selected-title ' : ''}`}>Materials</h4>
        <span className={`accordion-icon ${isOpen1 ? 'open' : ''}`}></span>
      </div>
      {isOpen1 && <div className="accordion-title">Composition</div>}
      {isOpen1 && <div className="accordion-content">{materials}</div>}
    
    </div>

    <div className="accordion">
      <div
        className={`accordion-header ${isOpen2 ? 'selected' : ''}`}
        onClick={toggleAccordion2}>
        <h4  className={`${isOpen2 ? 'selected-title ' : ''}`}>Care Guide</h4>
        <span className={`accordion-icon ${isOpen2 ? 'open' : ''}`}></span>
      </div>
      {isOpen2 && <div className="accordion-title">Instructions</div>}
      {isOpen2 && <div className="accordion-content">{careguide}</div>}
    
    </div>
 
                    </div>

            <div className={`${product.name === "KRONOS PEACEKEEPER" || product.name === "SILVER PLATED RING"  ? 'hide-product' : 'show-group'}`}>


                    <div className='size-group'>
                        <div>
                        <SizeSelector sizes={tshirtSizes} />
                        </div>
                        <SizeGuide/>
                    </div>

                    <div className="color-group">

                    <div className={`${product.name === "HERMES ULTRA MK IV" || product.name === "SILVER PLATED RING"  ? 'hide-product' : 'show-group'}`}>
                      
                     <ColorSelector colors={Colors} />
                     </div>
            
                    </div>

            </div>

                    <div className="quantity">
                        <h4>Quantity</h4>
                        <p className="quantity-desc">
                            <span className="minus" onClick={decQty}><AiOutlineMinus/></span>
                            <span className="num" >{qty}</span>
                            <span className="plus" onClick={incQty}><AiOutlinePlus/></span>

                        </p>
                    </div>

                    <div className="buttons">
                    <button type="button" className="buy-now" onClick={() => onAdd(product,qty)}>Purchase Now</button>

                    <button type="button" className="add-to-cart" onClick={() => onAdd(product,qty)}>Add To Cart</button>
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