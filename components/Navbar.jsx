import React, {useState} from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import logo from '../styles/images/promo.png';

import {Cart} from './'
import { useStateContext } from '../context/StateContext';

const Navbar = ({setNavMobile}) => {
  const [navbar, setNavbar] = useState(false);
  const {showCart, setShowCart, totalQuantities } = useStateContext();
 
  return (
    <div className="navbar-container ">

                  <div className="logo logo-mobile">
                  <p className="logo-inner"></p>

                  </div>
      

      <ul className="nav-menu grid">
                       
                        <div className="logo logo-desktop">
                        <Link href="/"><p className="logo-inner"></p></Link>
                       
                        </div>
                        

                        <li className="nav_item">
                           <Link href='collection'><p href="#categories" className="nav_link"></p></Link>
                            CATAGORIES
                        </li>

                        <li className="nav_item">
                            <a href="#collection" className="nav_link">
                            COLLECTION
                        </a>
                        </li>

                        <li className="nav_item">
                        <a href="#about" className="nav_link">
                           ABOUT US
                        </a> 
                        </li>
                        <span className="nav-seperator"> </span>
                   <div className='shoping-desktop'>

      <button type="button" className="cart-icon" onClick={()=> setShowCart(true)} >
        <AiOutlineShopping />
      <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      </div>

      <div onClick={()=> setNavMobile(true)} className='lg:hidden cursor-pointer'>
      </div>

                    </ul>
     
     <div className='shopping-mobile'>
     <button type="button" className="cart-icon" onClick={()=> setShowCart(true)}>
        <AiOutlineShopping />
      <span className="cart-item-qty">{totalQuantities}</span>
      </button>
     </div>

    {showCart && <Cart/>}

    </div>
  )
}

export default Navbar