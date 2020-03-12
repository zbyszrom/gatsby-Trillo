import React from 'react'

const Header = ()=>{
    return(
        <header>
        <form action="#" className="search">
                    <input type="text" className="search__input" placeholder="Search hotels"/>
                    <button className="search__button">
                        
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
            
            <span className="user-nav__user-name">Jonas</span>
        </div>
    </nav>
    </header>
    )
}
export default Header