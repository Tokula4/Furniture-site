import React from 'react'
import Image from 'next/image'
import Button from './Button'

function Newcollection() {
  return (
    <section className="p-5 " >
        <div className="justify-center md:flex item-center md:gap-x-2" >
      <div className=" flex  w-[350px] select-none left-24 h-[250px]  space-y-2
     rounded-xl bg-[#f0f1f3] p-8 md:h-[350px] justify-around items-center md:w-[550px] md:p-10 
       transition-all duration-500 ">
        <div className="md:relative relative my-2 h-[428px] left-[-45px]  w-full md:h-72" >
            <Image src='/img/chair.png'
            layout="fill" 
            objectFit="contain"/>
        </div>

        <div>
            <p  className="font-bold md:text-[15px]  text-[15px] " >Seating</p>
            <h1  className=" uppercase font-bold  text-[20px] " >New collection</h1>
            <div className=" w-30px border-[#fff] border-linecap  " >
                <Button title="Buy " /> 
               
            </div>
        </div>

     
      </div>

      <div className=" flex  w-[350px] select-none left-24 h-[250px]  space-y-2
     rounded-xl bg-[#f0f1f3] p-8 md:h-[350px] justify-around items-center md:w-[550px] md:p-10 
       transition-all duration-500 ">

<div>
            <p  className="font-bold md:text-[15px]  text-[15px] " >Seating</p>
            <h1  className=" uppercase font-bold  text-[20px] " >New collection</h1>
            <div className=" w-30px border-[#fff] border-linecap  " >
                <Button title="Buy " /> 
               
            </div>
        </div>
        
        <div className="md:relative relative h-[428px] right-[-45px]  w-full md:h-72" >
            <Image src='/img/chair-1.png'
            layout="fill" 
            objectFit="contain"/>
        </div>



     
      </div>
     
      
 
      
    </div>
            
       
        </section>
   
  
  )
}

export default Newcollection
