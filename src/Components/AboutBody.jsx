import React from 'react'
import Image from '../assets/myImage.png'

function AboutBody() {
  return (
    <div className='w-[100%] h-[100%]'>
        <h1 className='text-white text-center text-3xl font-bold stroke-[5px] stroke-sky-400 pt-[25px]'>About Me</h1>
        <div className='flex h-[91%] flex-col sm:flex-row'>
          <div className='hidden w-[100%] h-[50%] sm:h-[100%] sm:w-[50%] sm:flex justify-center items-center'>
            <img src={Image} alt="" className='sm:h-[50%] rounded-xl shadow-2xl shadow-cyan-300'/>
          </div>
          <div className='w-[100%] h-[100%] sm:h-[100%] sm:w-[50%] flex flex-col items-center pt-[50px] sm:pt-[0px] sm:justify-center'>
            <h3 className='text-cyan-400 font-bold text-xl text-center'>Hi, My name is Lakshan Dananjana Weerasinghe</h3>
            <p className='text-white w-[80%] sm:w-[80%] text-center pt-[10px]'>
              I'm a highly motivated Web Developer with hands-on experience in PHP, HTML, CSS, 
              and JavaScript. I am currently deepening my knowledge in the Laravel and React frameworks. 
              Passionate about building efficient, user-friendly web solutions, 
              I am committed to continuously improving my technical skills. I thrive in problem-solving, 
              teamwork, and delivering high-quality projects.
            </p>
          </div>
        </div>
    </div>
  )
}

export default AboutBody