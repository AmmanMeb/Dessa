import React, { Component } from 'react';
import './header.css'
import logo from '../../pics/Logo.png'
import search from '../../pics/search.png'
import shop from '../../pics/bag.png'




function Header() {
    return(
      <header>
        <div className = "img-1">
            <img src = {logo} alt = "Logo" width="20" height="20"></img>
        </div>
        <a>
            DESSA
        </a>
        <nav>              
            <ul className="nav-links">                
               <li><a href="#">PRODUCTS</a></li>
               <li><a href="#">SUPPORT</a></li>
               <div className = "img-2">
                 <img src = {search} alt = "Logo" width="20" height="20"></img>
               </div>
               <div className = "img-3">
                 <img src = {shop} alt = "Logo" width="20" height="20"></img>
               </div>                               
            </ul>
        </nav>
      </header>
    )
  }
  export default Header;