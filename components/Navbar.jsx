import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import logo from '../styles/images/promo.png';
const Navbar = () => {

  console.log(logo)
  return (
    <div className="navbar-container ">

      
      

      <ul class="nav-menu grid">
                       
                        <p className="logo">
                        <Link href="/">Ionic</Link>
                        </p>
                        

                        <li class="nav_item">
                            <a href="#" class="nav_link">
                            HOME
                        </a>
                        </li>

                        <li class="nav_item">
                            <a href="#projects" class="nav_link">
                            CATAGORIES
                        </a>
                        </li>

                        <li class="nav_item">
                            <a href="#resume" class="nav_link">
                            COLLECTION
                        </a>
                        </li>

                        <li class="nav_item">
                            <a href="#skills" class="nav_link">
                           ABOUT US
                        </a>
                        </li>
                        <span className="nav-seperator"> </span>
                    </ul>
      <button type="button" className="cart-icon" 
      onClick="">
        <AiOutlineShopping />
      <span className="cart-item-qty">1</span>
      </button>

     
    </div>
  )
}

export default Navbar