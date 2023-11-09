import React from 'react'
import Card from '../../components/Card'
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  const handleSubmit = () => {
      navigate("/hakkimizda");
  }
  return (
    <div>
         <p className='mt-5 text-3xl text-center font-serif'>Projelerimiz</p>
       <div className='grid sm:grid-cols-2 md:grid-cols-3 '>
        <Card title='resim1' name='asd' imageSrc={require('../../assets/renders/1.jpeg') } dark ={false} onClick= {()=>handleSubmit()}></Card>
        <Card title='resim1' name="asd" imageSrc={require('../../assets/renders/2.jpeg') }  dark ={false}></Card>
        <Card title='resim1' name='deneme' imageSrc={require('../../assets/renders/3.jpeg')  } dark ={false}></Card>
        <Card title='resim1' name='koltuk' imageSrc={require('../../assets/renders/4.jpeg') } dark ={false}></Card>
        <Card title='resim1' name="masa" imageSrc={require('../../assets/renders/5.jpeg') } dark ={false}></Card>
        <Card title='resim1' name="bitti" imageSrc={require('../../assets/renders/6.jpeg') } dark ={false}></Card>
        <Card title='resim1' name='kulaklık' imageSrc={require('../../assets/renders/7.jpeg') } dark ={false}></Card>
      </div>
    </div>
  )
}

export default Projects