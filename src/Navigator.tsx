import React from 'react'
import Navbar from './view/navbar/Navbar'
import Carousel from './view/Carousel/Carousel'
import Cards from './view/Cards/Cards'

function Navigator() {
  return (
    <div>
        <Navbar></Navbar>
        <Carousel></Carousel>
        <Cards></Cards>
    </div>
  )
}

export default Navigator    