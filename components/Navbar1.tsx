import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {MdOutlineChair} from 'react-icons/md'



function Navbar1() {
  return (
    <header  className="sticky top-0 z-30 flex items-center justify-between p-4 pb-5 border-b border-gray-300 " >
          <div className="flex items-center justify-center md:w-1/5 " >
      <Link href='/'  >
      <div  className="relative w-5 h-10 transition opacity-75 cursor-pointer hover:opacity-100 " >
        Wooden 
      </div>
      </Link>

      </div>
      <div  className=''>
        <div className='flex' >
      <div className="  text-[40px] text-[#ffd700] ">
        <MdOutlineChair/>
        </div>
      <div  >
        <h1  className="font-bold uppercase " >Furniture</h1>
        <p  className="font-[10px]  mt-[-9px] font-bold items-center  text-center" ><span className="text-[#ffD700]" >Best</span> furnitures in the land</p>
        </div>
        </div>
      
      </div>

      <div className="flex items-center justify-center gap-x-4 md:w-1/5" >

       <div  className='headerIcon' >
       <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
       <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
       </div>
          <Link href="/checkout" > 

          <div className="relative cursor-pointer " > 
        <span className="  -right-0 -top-1  absolute z-50 flex h-4 w-4 items-center justify-center
         rounded-full bg-gradient-to-r from-[#ffD700]  to-black  text-[10px] text-white " >5</span>

         <div className="headerIcon" >
         <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
           <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
         </svg>
         </div>
       </div>
          
          </Link>

          
          {/* {session ? 
          (*/}
            {/* <Image 
            src={
              // session.user?.image ||
               ""
            }
            alt=""
            className="rounded-full cursor-pointer"
            width={34}
            height={34}
            // onClick={() => signOut()}
          />
          ):(*/}
            <div className="headerIcon" 
            // onClick={() => signIn()} 
            >
             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </div>
          {/*)
         } */}

          
          

      </div>
    </header>
  )
}

export default Navbar1
