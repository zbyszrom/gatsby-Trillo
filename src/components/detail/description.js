import React from 'react'
import User3 from '../../images/user-3.jpg'
import User4 from '../../images/user-4.jpg'
import User5 from '../../images/user-5.jpg'
import User6 from '../../images/user-6.jpg'

const Description = ()=>{
    return(
    <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.</p>
    <p>Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.</p>
                        <ul >
                            <li >Close to the beach</li>
                            <li >Breakfast included</li>                                <li >Free airport shuttle</li>
                            <li c>Free wifi in all rooms</li>
                            <li >Air conditioning and heating</li>                                <li >Pets allowed</li>
                            <li >We speak all lanuages</li>
                            <li >Perfect for families</li>
                        </ul>
    
        <div>
        <p>Lucy and 3 other friends recommend this hotel.</p>
                                <div>
                                    <img src={User3} alt="Friend 1" />
                                    <img src={User4} alt="Friend 2" />
                                    <img src={User5} alt="Friend 3" />
                                    <img src={User6} alt="Friend 4" />
                                </div>
        </div>
        
    </div>
    )
    

}
export default Description