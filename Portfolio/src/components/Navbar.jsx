import { motion } from 'framer-motion';
import React from 'react';

function Navbar() {
  return (
    <motion.div
      data-scroll
      data-scroll-section
      data-scroll-speed="0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className={`fixed z-[9999] w-full h-16 px-20 py-8 font-Ico flex justify-between items-center`}
      style={{
        // Glassmorphism background effect
        backgroundImage: 'linear-gradient(45deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.05) 100%)',
        backdropFilter: 'blur(10px)',
       
      }}
    >
      <div className="Logo">
        <div className="w-10 h-10">
          <img src="/public/DMLOGO2.png" alt="Logo" />
        </div>
      </div>

      <div className="Links flex gap-10">
        {['Home', 'About Me', 'Skills', 'Projects', 'Contact'].map((item, index) => (
          <motion.a
            key={index}
            href={`#${item}`} // Ensure links redirect to corresponding sections
            className={`text-lg capitalize font-light ${index === 4 && 'ml-32'} hover:text-emerald-500 hover:border-b-4 hover:border-emerald-500 duration-500`}
            whileHover={{
              scale: 1.1, // Enhanced zoom for subtle emphasis
              
              textShadow: '0px 0px 5px rgba(255, 255, 255, 0.5)', // Slight glow on hover
            }}
            transition={{ duration: 0.3 }} // Faster hover transition
          >
            {item}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

export default Navbar;
