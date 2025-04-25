import React from 'react'
import reactLogo from '../assets/react.svg'
import NavLinks from './NavLinks'

function Navbar() {
   function hello(){

   }

  return (
    <div className='bg-sky-500/100 h-[7%] flex items-center px-10 justify-between rounded-b-lg shadow-lg shadow-sky-300 z-50'>
        <img src={reactLogo} alt="Lakshan Dnanjana" className='h-10' />
        <div className='hidden sm:w-80 text-white sm:flex sm:justify-between'>
            <NavLinks url='#home' linkName='Home' />
            <NavLinks url='#about' linkName='About' />
            <NavLinks url='#skill' linkName='Skills' />
        </div>
        <div className='text-white flex sm:hidden'>
            <input type="checkbox" name="" id="show" className='hidden'/>
            <label htmlFor="show">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16" className='cursor-pointer'>
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg>
            </label>
            <input type="checkbox" name="" id="close"  className='hidden'/>
            <label htmlFor="close">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" className='cursor-pointer hidden'>
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
              </svg>
            </label>
        </div>
    </div>
  )
}

export default Navbar