import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'

function App() {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white' >
    <Navbar/>
    <Landing/>
    </div>
  )
}

export default App