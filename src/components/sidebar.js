import React from 'react'
import {FaHotel, FaPlane, FaMap} from "react-icons/fa"
import {AiTwotoneCar} from 'react-icons/ai'

const Sidebar = ()=>{
    return(
        <nav >
        <ul 
    >
            <li >
                <a href="#" >
                    <FaHotel/>
                    <span>Hotel</span>
                </a>
            </li>
            <li >
                <a href="#" >
                    <FaPlane/>
                    <span>Flight</span>
                </a>
            </li>
            <li >
                <a href="#" >
                    <AiTwotoneCar/>
                    <span>Car rental</span>
                </a>
            </li>
            <li >
                <a href="#" >
                    <FaMap/>
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