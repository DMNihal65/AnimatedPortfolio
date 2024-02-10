import { motion } from 'framer-motion';
import React from 'react';

import { FaArrowUp } from "react-icons/fa6";

function Landing() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20 '>
        {["Web Designer","Ux / ui Designer","Full stack Developer"].map((item,index)=>{
           return(
            <div className='masker' key={index}>
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeOut", duration: 1, delay: index * 0.5 }}
                  className='w-fit flex items-end overflow-hidden'
                >
                  {index === 1 && (
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "6vw" }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                      className='w-[5vw] rounded-md mr-5 h-[2.7vw] -top-[.5vw] relative bg-red-500'
                    ></motion.div>
                  )}
                  <h1 className='uppercase pt-[2vw] -mb-[1vw] text-[5vw] font-Founderfont leading-[.75] font-bold'>{item}</h1>
                </motion.div>
            </div>) 
        })} 
        </div>

        <div className='border-zinc-600 border-t-[1px] mt-20 flex justify-between items-center py-5 px-20'>
            {["From Idea to Reality","From Visitor to Customer"].map((item,index)=>(
              <motion.p 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 1, delay: index * 0.5 }}
                className='text-md'
              >
                {item}
              </motion.p>)
            )}
            <div className='start flex items-center gap-5'>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 1, delay: 2 }}
                className='border-2 px-4 py-1 rounded-full border-zinc-600 uppercase font-light flex justify-between items-center'
              >
                <p>Explore Now</p>
              </motion.div>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 1, delay: 2 }}
                className='rotate-45'
              >
                <div className='px-2 py-2 flex items-center justify-center border-2 border-zinc-600 rounded-full'><FaArrowUp /></div>
              </motion.span>
            </div>
        </div>
    </div>
  );
}

export default Landing;
