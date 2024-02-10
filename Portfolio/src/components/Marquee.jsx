import React from 'react'
import {motion} from 'framer-motion'

function Marquee() {
  return (
    
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full py-20 rounded-t-3xl  bg-zinc-700'>
      <div className='text- border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap  overflow-hidden  '>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration :2}} className='text-[17vw] leading-none font-Founderfont uppercase font-semibold -mb-[3vw] pt-20 ml-8 '>DM Nihal</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration :2}} className='text-[17vw] leading-none font-Founderfont uppercase font-semibold -mb-[3vw] pt-20 ml-8  '>DM Nihal</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration :2}} className='text-[17vw] leading-none font-Founderfont uppercase font-semibold -mb-[3vw] pt-20 ml-8'>DM Nihal</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration :2}} className='text-[17vw] leading-none font-Founderfont uppercase font-semibold -mb-[3vw] pt-20 ml-8'>DM Nihal</motion.h1>
        
      </div>

    </div>
  )
}

export default Marquee