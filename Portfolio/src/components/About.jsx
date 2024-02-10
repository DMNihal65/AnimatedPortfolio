import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-emerald-700 rounded-t-lg'>
      <h1 className='font-Neuefont text-[3vw] leading-[3.5vw] tracking-tight '>"I'm not just a coder ✨, I'm a tech-wielding alchemist 🧙‍♂️ transforming data into dazzling dashboards 📊 and websites 💻. With a dash of creativity 🎨 and a heaping spoonful of problem-solving 🧩, I craft digital experiences that are both beautiful 🌟 and functional 🛠️. My journey began with lines of code 💻, but soon blossomed into a passion for design 🎨, weaving user-centric magic ✨ into every pixel 🖼️."</h1>
        <div className='w-full border-t-[1px] flex gap-5 border-emerald-600 pt-20  mt-20 '>
            <div className='w-1/2 '>
                <h1 className='text-4xl'>Learn More About Me :</h1>
                <button className='px-5 py-3 flex gap-6 items-center bg-zinc-800 mt-10 rounded-full text-white'>Open CV
                <div className='w-3 h-3 bg-zinc-100 rounded-full '></div>
                </button>
            </div>
            <div className='w-1/2 h-[60vh] bg-emerald-900  rounded-2xl'>

            </div>

        </div>
    </div>
  )
}

export default About