import React from 'react'
import { MdOutlineBed, MdOutlineChair } from 'react-icons/md'
import {TbLamp}  from 'react-icons/tb'


function Categories() {
  return (
    <section  className="p-10" >
    <div  className="text-center " >
        <h1  className="text-[#ffd700] font-bold " >------ Best Items ------</h1>
        <h1  className="font-bold " > Top Category </h1>
        <div  className="grid grid-cols-2 gap-3 p-10 md:flex md:justify-around " >
            <div className='' >
            <div  className="text-[60px]  border-double border-4 text-[#ffd700]" >
                <div className="flex   items-center text-center justify-center
                   md:w-[150px]  md:h-[100px] p-3"  >
                <div><MdOutlineChair/></div>
                <div  className="relative  left-[-40]" ><TbLamp/></div>
                </div>
                
            </div>
            <p>Chairs</p>
            </div>

            <div className='' >
            <div  className="text-[60px]  border-double border-4 text-[#ffd700]" >
                <div className="flex   items-center text-center justify-center  md:w-[150px]  md:h-[100px] p-3"  >
                <div><MdOutlineBed/></div>
               
                </div>
                
            </div>
            <p>Chairs</p>
            </div>


            <div className='' >
            <div  className="text-[60px]  border-double border-4 text-[#ffd700]" >
                <div className="flex   items-center text-center justify-center  md:w-[150px]  md:h-[100px] p-3"  >
                <div><MdOutlineChair/></div>
                <div  className="relative  left-[-40]" ><TbLamp/></div>
                </div>
                
            </div>
            <p>Chairs</p>
            </div>

            <div className='' >
            <div  className="text-[60px]  border-double border-4 text-[#ffd700]" >
                <div className="flex   items-center text-center justify-center  md:w-[150px]  md:h-[100px] p-3"  >
                <div><MdOutlineChair/></div>
                <div  className="relative  left-[-40]" ><TbLamp/></div>
                </div>
                
            </div>
            <p>Chairs</p>
            </div>

            <div className='' >
            <div  className="text-[60px]  border-double border-4 text-[#ffd700]" >
                <div className="flex   items-center text-center justify-center  md:w-[150px]  md:h-[100px] p-3"  >
                <div><MdOutlineChair/></div>
                <div  className="relative  left-[-40]" ><TbLamp/></div>
                </div>
                
            </div>
            <p>Chairs</p>
            </div>

            
        </div>
        

        
      
    </div>
    </section>
  )
}

export default Categories
