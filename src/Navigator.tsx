import React from 'react'
import Navbar from './view/navbar/Navbar'
import Carousel from './view/Carousel/Carousel'
import Cards from './view/Cards/Cards'
import Footer from './view/Footer/Footer'

function Navigator() {
  return (
    <div>
        <Navbar></Navbar>
        <Carousel></Carousel>
        <Cards></Cards>
        <Footer></Footer>
    </div>
  )
}

export default Navigator    