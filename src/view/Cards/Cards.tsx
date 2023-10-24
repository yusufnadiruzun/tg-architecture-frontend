import React from 'react'
import Card from '../../components/Card'

function Cards() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <p className='mt-5 text-3xl font-serif'>Seçilmiş Projeler</p>
      <div className=' grid sm:grid-cols-2 md:grid-cols-3 '>
        <Card title='resim1' name='asd' imageSrc={require('../../assets/renders/1.jpeg') }></Card>
        <Card title='resim1' name="asd" imageSrc={require('../../assets/renders/2.jpeg') }></Card>
        <Card title='resim1' name='deneme' imageSrc={require('../../assets/renders/3.jpeg') }></Card>
        <Card title='resim1' name='koltuk' imageSrc={require('../../assets/renders/4.jpeg') }></Card>
        <Card title='resim1' name="masa" imageSrc={require('../../assets/renders/5.jpeg') }></Card>
        <Card title='resim1' name="bitti" imageSrc={require('../../assets/renders/6.jpeg') }></Card>
        <Card title='resim1' name='kulaklık' imageSrc={require('../../assets/renders/7.jpeg') }></Card>
      </div>
    </div>
  )
}

export default Cards