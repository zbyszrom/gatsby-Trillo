import React from 'react'

const Sidebar = ()=>{
    return(
        <nav >
        <ul 
    >
            <li >
                <a href="#" >
                    
                    <span>Hotel</span>
                </a>
            </li>
            <li >
                <a href="#" >
                    
                    <span>Flight</span>
                </a>
            </li>
            <li >
                <a href="#" >
                    
                    <span>Car rental</span>
                </a>
            </li>
            <li >
                <a href="#" class="side-nav__link">
                    
                    <span>Tours</span>
                </a>
            </li>
        </ul>

        <div class="legal">
            &copy; 2017 by trillo. All rights reserved.
        </div>
    </nav>
    )
}
export default Sidebar