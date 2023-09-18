'use client'
import React,{useContext, useEffect, useState} from 'react'
import {Link} from 'react-scroll'
import { AiOutlineShopping } from 'react-icons/ai'
import logo from '../styles/images/promo.png';

import {useMediaQuery} from 'react-responsive'





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
                        <a href="/"><p className="logo-inner"></p></a>
                       
                        </div>
                        

                        <li className="nav_item">
                           <a href="/">HOME</a>
                        </li>

                        <li className="nav_item">
                           <Link activeClass="active" to="product" duration={500} spy={true} smooth={true} >COLLECTION</Link>
                        </li>

                        <li className="nav_item">
                        <a href="/">ABOUT US</a>
                       
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