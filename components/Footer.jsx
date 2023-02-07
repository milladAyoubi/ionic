import React from 'react';
import { AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook} from 'react-icons/ai';
import {FaTiktok} from 'react-icons/fa'
import { BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (

  <div className="footer">
    <div className="footer-container">
      <div className="footer-col">
      <h4>NAVIGATION</h4>
      <p className="footer-link">
        Categories
      </p>
      <p className="footer-link">
        Collection
      </p>
      <p className="footer-link">
        About Us
      </p>
      </div>

      <div className="footer-col">
      <h4>COMPANY</h4>
      <p className="footer-link">
         Contact
      </p>
      <p className="footer-link">
        Work with us
      </p>
      <p className="footer-link">
        About Us
      </p>
      </div>


      <div className="footer-col">
      <h4>POLICIES</h4>
      <p className="footer-link">
        Privacy Policy
      </p>
      <p className="footer-link">
        Returns
      </p>
      <p className="footer-link">
        Cookie settings
      </p>
      </div>
      </div>

    <div className="icons">
      <div className="facebook-icon"><BsFacebook /></div>
      <div className="tiktok-icon"><FaTiktok/></div>
        <AiOutlineInstagram />
    </div>
  </div>
    
  )
}

export default Footer