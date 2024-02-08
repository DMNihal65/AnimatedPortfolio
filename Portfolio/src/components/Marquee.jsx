import React from 'react'
import {motion} from 'framer-motion'

function Marquee() {
  return (
    
    <div className='w-full py-20 rounded-t-3xl  bg-emerald-800'>
      <div className='text- border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap gap-10 overflow-hidden  '>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration :5}} className='text-[17vw] leading-none font-Founderfont uppercase font-semibold -mb-12 pt-20   '>DM Nihal</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration :5}} className='text-[17vw] leading-none font-Founderfont uppercase font-semibold -mb-12 pt-20 '>DM Nihal</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration :5}} className='text-[17vw] leading-none font-Founderfont uppercase font-semibold -mb-12 pt-20 '>DM Nihal</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration :5}} className='text-[17vw] leading-none font-Founderfont uppercase font-semibold -mb-12 pt-20 '>DM Nihal</motion.h1>
        
      </div>

    </div>
  )
}

export default Marquee