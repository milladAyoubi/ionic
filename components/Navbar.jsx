import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import logo from '../styles/images/promo.png';



const Navbar = () => {

 
  return (
    <div className="navbar-container ">

      
      

      <ul className="nav-menu grid">
                       
                        <div className="logo">
                        <p className="logo-inner"></p>
                       
                        </div>
                        

                        <li className="nav_item">
                            <a href="#" className="nav_link">
                            HOME
                        </a>
                        </li>

                        <li className="nav_item">
                            <a href="#collection" className="nav_link">
                            CATAGORIES
                        </a>
                        </li>

                        <li className="nav_item">
                            <a href="#resume" className="nav_link">
                            COLLECTION
                        </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                           ABOUT US
                        </a>
                        </li>
                        <span className="nav-seperator"> </span>
                   <div>
                        <button type="button" className="cart-icon" >
        <AiOutlineShopping />
      <span className="cart-item-qty">1</span>
      </button>
      </div>

                    </ul>
     
     
    </div>
  )
}

export default Navbar