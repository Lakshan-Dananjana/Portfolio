import { useState } from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import HomeBody from './Components/HomeBody'
import AboutBody from './Components/AboutBody'

function App() {
  document.title = "My Portfolio";

  return (
    <>
    <div className='bg-black h-screen overflow-hidden' id='home'>
      <Navbar />
      <HomeBody/>
    </div>
    <div className='bg-black h-screen overflow-x-hidden' id='about'>
      <AboutBody/>
    </div>
    </>
  )
}

export default App
