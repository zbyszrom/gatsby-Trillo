import React from "react"

import Layout from "../components/layout"
import Gallery from '../components/gallery'
import Overview from '../components/overview'
import Detail from '../components/detail'



const IndexPage = () => (
  <Layout>
    <main>
    <Gallery/>
    <Overview/>
    <Detail/>
    </main>
  </Layout>
)

export default IndexPage
/* test comment */
