import React, { Component } from 'react';
import './header.css'
import logo from '../../pics/Logo.png'
import search from '../../pics/search.png'
import shop from '../../pics/bag.png'




class Header extends Component {
  navSlide() {
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        hamburger.addEventListener('click', () => {
           nav.classList.toggle('nav-active');
           

           navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } 
            else {
                link.style.animation = `navLinkFade 0.3s ease forwards ${index / 4 + 1}s`;
            }
          }) 
             hamburger.classList.toggle('toggle');          
        })
        
  }
  
  render() {
    return(
      <header>
        <logo className = "logo">
          <div className = "img-1">
              <img src = {logo} alt = "Logo" width="43" height="39"></img>
          </div>
          <a className = "title">
              DESSA
          </a>
        </logo>
        <nav>  
            <div  onClick = {this.navSlide} class="hamburger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>            
            <ul  onClick = {this.navSlide} className="nav-links">                
               <li><a href="#">PRODUCTS</a></li>
               <li><a href="#">SUPPORT</a></li>
               <form action="">
                <input class="search" type = "search" />
                <i class="fa"><img src = {search} alt = "Search" width="22" height="22"></img></i>
                
               </form>  
               <div className = "img-3">
                 <img src = {shop} alt = "Shop" width="36" height="32"></img>
               </div>                                              
            </ul>
        </nav>
      </header>
    )
  }
}
  export default Header;