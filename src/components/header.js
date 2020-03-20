import React from 'react'
import {GiMagnifyingGlass} from "react-icons/gi"
import logo from "../images/logo.png"
import User from '../images/user.jpg' 

const Header = ()=>{
    return(
        <header>
            <img src={logo} alt="logo" className = 'logo'/>
        <form action="#" >
                    <input type="text"  placeholder="Search hotels"/>
                    <button className="">
                      <GiMagnifyingGlass/> 
                    </button>
        </form>
        <nav > 
        <div className="user-nav">
            <img src = {User} alt= 'user' className = 'user-photo'/>
            <span >Jonas</span>
        </div>
        </nav>
    </header>
    )
}
export default Header