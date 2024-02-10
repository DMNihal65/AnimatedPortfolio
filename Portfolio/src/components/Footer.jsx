import React from 'react'

function Footer() {
  return (
    <div className='w-full h-screen bg-zinc-900 p-20 flex justify-between  gap-10'>
        <div className='w-1/2 h-full font-Founderfont flex flex-col justify-between  '>
        <div className='flex flex-col justify-between gap-6'>
        <h1 className='text-7xl uppercase leading-none -mb-10'>Contact</h1>
            <h1 className='text-7xl uppercase leading-none -mb-10'>Me </h1>
        </div>
            
            <div className='heading'>Logo</div>

        </div>

        <div className='w-[20vw] h-full'></div>
        <div className='w-1/2 font-Founderfont flex flex-col justify-between gap-10'>
        <h1 className='text-4xl flex items-center justify-center uppercase leading-none -mb-10'>Send Hi</h1>
        <div className='contact bg-zinc-400 rounded-xl w-full h-full '></div>
            
        </div>
    </div>
  )
}

export default Footer