import React from 'react'
import {GiMagnifyingGlass} from "react-icons/gi"
import logo from "../images/logo.png"
import User from '../images/user.jpg' 

const Header = ()=>{
    return(
        <header>
            <img src={logo} alt="logo"/>
        <form action="#" className="search">
                    <input type="text" className="search__input" placeholder="Search hotels"/>
                    <button className="search__button">
                      <GiMagnifyingGlass/> 
                    </button>
        </form>
        <nav className="user-nav">
        <div className="user-nav__icon-box">
            
            <span cclassName="user-nav__notification">7</span>
        </div>
        <div className="user-nav__icon-box">
            
            <span className="user-nav__notification">13</span>
        </div>
        <div className="user-nav__user">
            <img src = {User} alt= 'user photo'/>
            <span className="user-nav__user-name">Jonas</span>
        </div>
    </nav>
    </header>
    )
}
export default Header