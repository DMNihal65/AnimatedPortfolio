import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate,setRotate] = useState(0);

    useEffect(() =>{
       

        window.addEventListener("mousemove",(e) =>{
            

            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltay = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltay, deltaX) * (180/Math.PI);
            setRotate(angle-180)
        })
    })

  return (
    <div className='eyes w-full h-screen overflow-hidden  '>
        <div data-scroll data-scroll-speed="-.7" className='w-full h-full bg-cover relative bg-center bg-[url("https://images.unsplash.com/photo-1628160634750-a81a2a780805?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
            <div className='absolute flex gap-10 top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]  '>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 '>
                    <div className='w-2/3 h-2/3 relative  rounded-full bg-zinc-900'>
                        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg) `}} className='line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10 '>
                        <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                        </div>
                       
                    </div>
                </div>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                    <div className='w-2/3 h-2/3 relative  rounded-full bg-zinc-900'>
                            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg) `}}  className='line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10  '>
                            <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                            </div>
                        
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes