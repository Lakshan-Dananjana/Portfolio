import { useState } from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import HomeBody from './Components/HomeBody'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-black w-screen h-screen' id='home'>
        <Navbar />
        <HomeBody/>
      </div>
    </>
  )
}

export default App
