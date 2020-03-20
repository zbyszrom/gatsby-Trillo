import React from 'react'
import Description from './detail/description'
import UserReviews from './detail/userReviews'
import Cta from './detail/cta'

const Detail = ()=>{
    return(
        <div className ='detail'>
        <Description/>
        <UserReviews/>
        <Cta/>
        </div>
    )
}
export default Detail