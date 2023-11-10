import React from 'react'
import Navbar from './navbar/Navbar'
import Carousel from './Carousel/Carousel'
import Cards from './Cards/Cards'
import Footer from './Footer/Footer'

function Homepage() {
  return (
    <div>
        <Navbar></Navbar>
        <Carousel></Carousel>
        <Cards></Cards>
        <Footer></Footer>
    </div>
  )
}

export default Homepage 