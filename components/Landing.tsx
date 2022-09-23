import React from 'react'
import Button from './Button'

function Landing() {
  return (

    <div className='bg-[url(/background-1.jpg)] bg-repeat bg-cover  ' >

<div className=' h-56  gap-4 content-end ' >

        <h1 className="space-y-3 text-3xl font-semibold tracking-wide lg:text-4xl xl:text-5xl" >
                <span className="block bg-gradient-to-r from-[#ffd700] to-black bg-clip-text text-transparent  " > Powered </span>
                <span className="block" > By EJ-Limited </span>
                <span className="block" > Driven by SAPA </span>
            </h1>
          
          <div className="space-x-8 " >
              <Button title="Buy Now" /> 
              <a className="Link" > Learn More </a>
          </div>
      </div>

     

       
    </div>
  )
}

export default Landing
