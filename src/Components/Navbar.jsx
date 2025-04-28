import React, { useRef } from 'react'
import reactLogo from '../assets/react.svg'
import NavLinks from './NavLinks'

function Navbar() {
   const showIcon = useRef();
   const closeIcon = useRef();
   const navList = useRef();

   const show = () =>{
    showIcon.current.style.display = 'none';
    navList.current.style.display = 'flex';
    closeIcon.current.style.display = 'flex';
   }

   const close = () => {
    showIcon.current.style.display = 'flex';
    navList.current.setAttribute('style','');
    closeIcon.current.style.display = 'none';
   }


  return (
    <div className='relative bg-sky-500/100 h-[7%] flex items-center px-10 justify-between rounded-b-lg shadow-lg shadow-sky-300 z-50'>
        <img src={reactLogo} alt="Lakshan Dnanjana" className='h-10' />
        <div ref={navList} className='absolute hidden top-[115%] left-0 w-[100%] flex-col justify-center items-center gap-10 pt-[15px] pb-[15px] bg-green-400 sm:pt-[0px] sm:pb-[0px] sm:bg-sky-500/100 sm:w-[60%] text-white sm:flex sm:flex-row sm:justify-between sm:relative sm:top-0'>
            <NavLinks url='#home' linkName='Home' />
            <NavLinks url='#about' linkName='About' />
            <NavLinks url='#skill' linkName='Skills' />
        </div>
        <div className='text-white flex sm:hidden'>
            <label htmlFor="" className='cursor-pointer' ref={showIcon} onClick={show}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg>
            </label>
            <label htmlFor="close" className='cursor-pointer hidden' ref={closeIcon} onClick={close}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
              </svg>
            </label>
        </div>
    </div>
  )
}

export default Navbar