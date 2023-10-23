import React from 'react'
import Card from '../../components/Card'

function Cards() {
  return (
    <div className="">
      <p className=''>askdjasl</p>
      <div className=' grid grid-cols-3 '>
        <Card title='resim1' imageSrc={require('../../assets/renders/1.jpeg') }></Card>
        <Card title='resim1' imageSrc={require('../../assets/renders/2.jpeg') }></Card>
        <Card title='resim1' imageSrc={require('../../assets/renders/3.jpeg') }></Card>
        <Card title='resim1' imageSrc={require('../../assets/renders/4.jpeg') }></Card>
        <Card title='resim1' imageSrc={require('../../assets/renders/5.jpeg') }></Card>
        <Card title='resim1' imageSrc={require('../../assets/renders/6.jpeg') }></Card>
        <Card title='resim1' imageSrc={require('../../assets/renders/7.jpeg') }></Card>

  </div>
    </div>
  )
}

export default Cards