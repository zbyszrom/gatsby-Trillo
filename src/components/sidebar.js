import React from 'react'
import {FaHotel, FaPlane, FaMap} from "react-icons/fa"
import {AiTwotoneCar} from 'react-icons/ai'

const Sidebar = ()=>{
    return(
        <nav >
        <ul >
            <li >
                <a href="#" >
                    <FaHotel className='icon'/>
                    <span>Hotel</span>
                </a>
            </li>
            <li >
                <a href="#" >
                    <FaPlane className='icon'/>
                    <span>Flight</span>
                </a>
            </li>
            <li >
                <a href="#" >
                    <AiTwotoneCar className='icon'/>
                    <span>Car rental</span>
                </a>
            </li>
            <li >
                <a href="#" >
                    <FaMap className='icon'/>
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