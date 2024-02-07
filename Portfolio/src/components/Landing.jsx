import React from 'react'

import { FaArrowUp } from "react-icons/fa6";

function Landing() {
  return (
    <div className='w-full h-screen bg-zinc-900'>
        <div className='textstructure mt-52 px-20 '>
        {["Web Designer","Ux / ui Designer","Full stack Developer"].map((item,index)=>{
           return(<div className='masker'>
                <h1 key={index} className='uppercase text-7xl font-Founderfont leading-none  font-bold  '>{item}</h1>
            </div>) 
        })} 
        </div>

        <div className='border-zinc-600 border-t-[1px] mt-32 flex justify-between items-center py-5 px-20 '>
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