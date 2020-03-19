import React from "react"

import Layout from "../components/layout"
import Gallery from '../components/gallery'
import Overview from '../components/overview'
import Detail from '../components/detail'



const IndexPage = () => (
  <Layout>
    
    <Gallery/>
    <Overview/>
    <Detail/>
    
  </Layout>
)

export default IndexPage
