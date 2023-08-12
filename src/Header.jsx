import React from "react";
import "./.Header.scss"

function Header (){
    return (
        <div className="header">
            <div className="header__logo">
                <a href="#"><p className="logo">PLANT</p></a>
            </div>
            <div className="header__nav">
              <nav>
                <ul className='nav__list'>
                  <li className='about'><a href="#">ABOUT US</a></li>
                  <li className='events'><a href="#">EVENTS</a></li>
                  <li className='shop'><a href="#">SHOP</a></li>
                  <li className='contact'><a href="#">CONTACT</a></li>
                </ul>
            
              </nav>
            </div>
        </div>
    )
    }
    export default Header