import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"

const getImages = graphql `
query {
hotelImg: allFile(filter: {name: {in: ["hotel-1", "hotel-2", "hotel-3"]}}) {
    edges {
      node {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`

const Gallery = ()=>{

    const data = useStaticQuery(getImages)
    const hotels = data.hotelImg.edges
    console.log(data)
    

    return(
        <div>
            <p>gallery</p>
            <Img fluid = {hotels[0].node.childImageSharp.fluid} />
            <Img fluid = {hotels[1].node.childImageSharp.fluid} />
            <Img fluid = {hotels[2].node.childImageSharp.fluid} />
            
            
        </div>
        
    )
}
export default Gallery