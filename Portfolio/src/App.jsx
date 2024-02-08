import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'

function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white' >
    <Navbar/>
    <Landing/>
    <Marquee/>
    </div>
  )
}

export default App