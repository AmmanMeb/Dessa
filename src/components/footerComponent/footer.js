import React, { Component } from 'react';
import './footer.css'


class Footer extends Component { 
    render() {
      return(
        <div className = "index-banner-2">
          <div className='footer-links'>
            <div className='footer-links-1'>
             <div className='headings'>SHOP</div> 
             <div className='links'>
              <div className='text-6'>Mobile</div>
              <div className='text-6'>Tablets</div>
              <div className='text-6'>Watches</div>
              <div className='text-6'>Laptops</div>
              <div className='text-6'>TV's</div> 
             </div>
            </div>
            <div className='footer-links-2'>
             <div className='headings'>SUPPORT</div> 
             <div className='links'>
              <div className='text-6'>Contact Us</div>
              <div className='text-6'>Order Support</div>
              <div className='text-6'>Your Account</div>
              <div className='text-6'>Product Support</div>
              <div className='text-9'>Accessibility</div> 
             </div>            
            </div>
            <div className='footer-links-3'>
             <div className='headings'>COMPANY</div>
             <div className='links'>
              <div className='text-6'>Careers</div>
              <div className='text-6'>Investors</div>
              <div className='text-6'>Newsroom</div>
              <div className='text-6'>Explore</div>
              <div className='text-6'>About Us</div>
             </div>
            </div> 
          </div>
          <div className='text-21'>Copyright© 2021 DESSA All Rights Reserved.</div>
          <div className='footer-links-6'>
             <div className='text-22'>Privacy Policy</div>
             <div className='text-23'>Terms Of Use</div>
             <div className='text-24'>Legal</div>
             <div className='text-25'>Sitemap</div>
             <div className='text-26'>English/USA</div>
          </div>
        </div>
      )
    }
  }
    export default Footer;