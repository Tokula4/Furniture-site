import React from 'react'
import Image from '../node_modules/next/image'
import Button from './Button'

function Herosection() {
  return (
    
    <section  className='overflow-x-hidden bg-no-repeat  bg-center bg-cover bg-[url("/background-1.jpg")]    ' >
        <div className='relative p-20 lg:p-[40px] space-y-3 ' >
            <h1 className="space-y-3 text-3xl font-semibold tracking-wide lg:text-6xl xl:text-7xl" >
                <span className="block bg-gradient-to-r from-[#ffd700] to-black bg-clip-text text-transparent  " > Powered </span>
                <span className="block" > By EJ-Limited </span>
                <span className="block" > Driven by SAPA </span>
            </h1>
            <div className="space-x-8 " >
                <Button title="Buy Now" /> 
                <a className="Link" > Learn More </a>
            </div>
        </div>

      
      
    </section>
  )
}

export default Herosection
