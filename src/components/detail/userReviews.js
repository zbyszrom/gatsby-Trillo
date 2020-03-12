import React from 'react'
import User1 from "../../images/user-1.jpg"
import User2 from "../../images/user-2.jpg"


const UserReviews = ()=>{
    return(
        <div>
        <figure>
        <blockquote >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
        </blockquote>
        <figcaption>
            <div>
                <img src= {User2} alt = ''/>
                <p>Mary Thomas</p>
                <p>Sept 13th, 2017</p>
            </div>
        </figcaption>
        </figure>
        <figure>
        <blockquote >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
        </blockquote>
        <figcaption>
            <div>
                <img src= {User1} alt = ''/> 
                <p>Nick Smith</p>
                <p>Feb 23rd, 2017</p>
            </div>
        </figcaption>
        </figure>
        <button>Show All</button>
        </div>
        
    )

}
export default UserReviews