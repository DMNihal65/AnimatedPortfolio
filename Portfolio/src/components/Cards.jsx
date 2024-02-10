import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className='cardcontainer h-[50vh]  w-1/2'>
            <div className='w-full h-full relative  rounded-xl  bg-emerald-700 flex items-center justify-center'>
                <img className='w-34' src='https://ouch-cdn2.icons8.com/F6ueauPtTPL2F_1bEu7gb7YiJAXXPNtD0glJRleXrtc/rs:fit:368:274/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzM2/LzNlMjA0ZDk0LTIy/NDMtNDkwOC04YTRm/LWJiOTg5NzNlMWVm/Mi5zdmc.png'/>
                <button className='absolute border-2 rounded-full px-5 py-2 left-10 bottom-10'>Hello</button>
            </div>

        </div>
        <div className='cardcontainer h-[50vh] flex gap-5 w-1/2'>
            <div className='w-full relative h-full rounded-xl flex items-center justify-center   bg-emerald-900'>
            <img className='w-34' src='https://ouch-cdn2.icons8.com/F6ueauPtTPL2F_1bEu7gb7YiJAXXPNtD0glJRleXrtc/rs:fit:368:274/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzM2/LzNlMjA0ZDk0LTIy/NDMtNDkwOC04YTRm/LWJiOTg5NzNlMWVm/Mi5zdmc.png'/>
                <button className='absolute border-2 rounded-full px-5 py-2 left-10 bottom-10'>Hello</button>
            
            </div>
            <div className='w-full relative flex items-center justify-center h-full rounded-xl  bg-emerald-900'>
            <img className='w-34' src='https://ouch-cdn2.icons8.com/F6ueauPtTPL2F_1bEu7gb7YiJAXXPNtD0glJRleXrtc/rs:fit:368:274/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzM2/LzNlMjA0ZDk0LTIy/NDMtNDkwOC04YTRm/LWJiOTg5NzNlMWVm/Mi5zdmc.png'/>
                <button className='absolute border-2 rounded-full px-5 py-2 left-10 bottom-10'>Hello</button>
            
            </div>

        </div>
        

    </div>
  )
}

export default Cards