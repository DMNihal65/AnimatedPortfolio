import React from 'react'

function Navbar() {
  return (
    <div className='fixed-z[999] w-full px-20 py-8 font-Ico flex justify-between items-center   '>
        <div className='Logo'>
            <p>Logo</p>
        </div>
        <div className='Links flex gap-10'>
            {['Home','About Me', 'Skills', 'Projects', 'Contact'].map((item,index)=>(
                <a key={index} className={`text-lg capitalize font-light ${index === 4 && "ml-32"} `}>{item}</a>
            ))}
        </div>
    </div>
  )
}

export default Navbar