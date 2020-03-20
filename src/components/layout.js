

import React from "react"
import Header from './header'
import Sidebar from './sidebar'
import "../styles/layout.css"

const Layout = ({ children }) => {
  
  return (
    <div className = 'container'>
    <Header/>   
     <div className = 'content'>
       <Sidebar/>
       {children}
     </div>
     </div>
  )     
}



export default Layout
