import React from 'react'

import { FaArrowUp } from "react-icons/fa6";

function Landing() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20 '>
        {["Web Designer","Ux / ui Designer","Full stack Developer"].map((item,index)=>{
           return(
            <div className='masker'>
                <div className='w-fit flex items-end overflow-hidden '>
                {index === 1 && (<div className='w-[5vw] rounded-md mr-5 h-[2.7vw] -top-[.5vw] relative bg-red-500'></div>) }
                <h1 key={index} className='uppercase pt-[2vw] -mb-[1vw] text-[5vw]  font-Founderfont leading-[.75]  font-bold  '>{item}</h1>
                </div>
            </div>) 
        })} 
        </div>

        <div className='border-zinc-600 border-t-[1px] mt-20 flex justify-between items-center py-5 px-20 '>
            {["From Idea to Reality","From Visitor to Customer"].map((item,index)=>( <p className='text-md'>{item}</p>)
               
            )}
            <div className='start flex items-center gap-5'>
            <div className='border-2 px-4 py-1 rounded-full border-zinc-600 uppercase font-light flex justify-between items-center  '>
                <p>Explore Now</p>
            </div>
            <span className='rotate-45 '>
            <div className='px-2 py-2 flex items-center justify-center border-2 border-zinc-600 rounded-full'><FaArrowUp /></div>
           
            </span>

            
            </div>
            
            
        </div>

    </div>
  )
}

export default Landing