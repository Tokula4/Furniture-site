import React from 'react'
import Image from 'next/image'
import { MdOutlineStarOutline } from 'react-icons/md'

function Product() {
  return (
    <section className="" >
        <div className="items-center justify-center text-center" >
            <h1  className="text-[#ffd700]" > ------- Latest Product------</h1>
            <h1 className=" font-bold text-[30px] " >Treandy Product</h1>
            <div className="flex items-center justify-center gap-3 text-center " >
                <div  className="p-2 font-bold border-4 border-double" >New Product</div>
                <div  className="p-2 font-bold border-4 border-double" >Featured Product</div>
                <div  className="p-2 font-bold border-4 border-double" >Best Seller</div>
            </div>
        </div>
      <div className="items-center justify-center text-center transition-all duration-500 md:p-3 md:gap-3 md:flex " > 
        <div>
            <div className="bg-[#f0f1f3]  w-[260px] h-[240px] md:w-[260px] md:h-[240px] " >
                <div  className=" relative md:w-[260px] md:h-[240px]" >
            <Image src='/img/chair.png' layout="fill"  objectFit="contain"/>
            </div>
            </div>
            <div className="items-center justify-center text-center " >
                <p  className="text-bold " >name</p>
                <p className="text-bold "  >$300</p>
                <div  className="flex items-center justify-center bg-[#fffd700]" ><MdOutlineStarOutline/> <MdOutlineStarOutline/> <MdOutlineStarOutline/> <MdOutlineStarOutline/></div>
            </div>
        </div>

        <div>
            <div className="bg-[#f0f1f3] md:w-[260px] md:h-[240px] " >
                <div  className=" relative md:w-[260px] md:h-[240px]" >
            <Image src='/img/chair.png' layout="fill"  objectFit="contain"/>
            </div>
            </div>
            <div className="items-center justify-center text-center " >
                <p  className="text-bold " >name</p>
                <p className="text-bold "  >$300</p>
                <div  className="flex items-center justify-center bg-[#fffd700]" ><MdOutlineStarOutline/> <MdOutlineStarOutline/> <MdOutlineStarOutline/> <MdOutlineStarOutline/></div>
            </div>
        </div>

        <div>
            <div className="bg-[#f0f1f3] md:w-[260px] md:h-[240px] " >
                <div  className=" relative md:w-[260px] md:h-[240px]" >
            <Image src='/img/chair.png' layout="fill"  objectFit="contain"/>
            </div>
            </div>
            <div className="items-center justify-center text-center " >
                <p  className="text-bold " >name</p>
                <p className="text-bold "  >$300</p>
                <div  className="flex items-center justify-center bg-[#fffd700]" ><MdOutlineStarOutline/> <MdOutlineStarOutline/> <MdOutlineStarOutline/> <MdOutlineStarOutline/></div>
            </div>
        </div>

        <div>
            <div className="bg-[#f0f1f3] md:w-[260px] md:h-[240px] " >
                <div  className=" relative md:w-[260px] md:h-[240px]" >
            <Image src='/img/chair.png' layout="fill"  objectFit="contain"/>
            </div>
            </div>
            <div className="items-center justify-center text-center " >
                <p  className="text-bold " >name</p>
                <p className="text-bold "  >$300</p>
                <div  className="flex items-center justify-center bg-[#fffd700]" ><MdOutlineStarOutline/> <MdOutlineStarOutline/> <MdOutlineStarOutline/> <MdOutlineStarOutline/></div>
            </div>
        </div>
        </div>  


      
    </section>
  )
}

export default Product
