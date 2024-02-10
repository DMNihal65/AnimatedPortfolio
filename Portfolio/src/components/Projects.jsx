import { motion, useAnimate, useAnimation } from 'framer-motion'
import React, { useEffect, useState } from 'react'

function Projects() {
    // const url1 = '/Portfolio/src/assets/comingsoon.png'
    

   const cards = [useAnimation(),useAnimation()] 
    const handlehover=(index)=>{
    cards[index].start({y:"0%"})
    }

    const handlehoverend=(index)=>{
        console.log("i am outside")
        cards[index].start({y:"100%"})
        }
        
    
    

    
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'> 
            <h1 className='text-8xl font-Neuefont tracking-tight' > Featured Projects</h1>
            
        </div>
        <div className='px-20'>
        <div className='cards w-full flex gap-10 mt-10 '>
            
                <motion.div  onHoverStart={()=>handlehover(0)} onHoverEnd={()=>handlehoverend(0
                )} className=' cardcontainer relative w-1/2 h-[75vh]   '>
                <div className='absolute flex overflow-hidden  z-[9999] right-0 text-emerald-400 translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl font-Founderfont leading-none uppercase tracking-tight ' >
                        {'NIHAl'.split('').map((item , index )=>
                        <motion.span  initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.22,1,0.36,1],delay:index*0.1}} className='inline-block ' >{item}</motion.span>)}
                </div>    
                <div className='card w-full h-full rounded-xl   bg-zinc-700  overflow-hidden shadow-lg'>
                        <img className='w-full h-full  p-4 bg-cover' src='https://ouch-cdn2.icons8.com/F6ueauPtTPL2F_1bEu7gb7YiJAXXPNtD0glJRleXrtc/rs:fit:368:274/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzM2/LzNlMjA0ZDk0LTIy/NDMtNDkwOC04YTRm/LWJiOTg5NzNlMWVm/Mi5zdmc.png' alt='comming soon'/>
                    </div>
                </motion.div>
                <motion.div  onHoverStart={()=>handlehover(1)} onHoverEnd={()=>handlehoverend(1
                )} className=' cardcontainer relative w-1/2 h-[75vh] '>
                <div className='absolute flex z[100] overflow-hidden right-full text-emerald-400 translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl font-Founderfont leading-none uppercase tracking-tight ' >
                        {'VISE'.split('').map((item , index )=>
                        <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[0.22,1,0.36,1],delay:index*0.1}} className='inline-block' >{item}</motion.span>)}
                </div>

                    <div className=' card w-full h-full rounded-xl  bg-zinc-700 overflow-hidden'>
                    <img className='w-full h-full p-4 bg-cover' src='https://ouch-cdn2.icons8.com/F6ueauPtTPL2F_1bEu7gb7YiJAXXPNtD0glJRleXrtc/rs:fit:368:274/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzM2/LzNlMjA0ZDk0LTIy/NDMtNDkwOC04YTRm/LWJiOTg5NzNlMWVm/Mi5zdmc.png' alt='comming soon'/>
                    </div>
                </motion.div>
            </div>
        </div>
        
    </div>
  )
}

export default Projects