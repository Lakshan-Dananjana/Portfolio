import React from 'react'

function SkillsBody() {
  return (
    <div className='w-[100%] h-[100%]'>
      <h1 className='text-center font-bold text-3xl pt-[25px] '>Skills</h1>
        <div className='w-[100%] h-[90%] flex justify-center items-center gap-[50px] '>
            <div className='w-[30%] h-[60%] border-[1px] rounded-xl flex p-[15px] items-center flex-col shadow-2xl shadow-cyan-400 '>
                <h2 className='text-2xl font-bold'>Soft Skills</h2>
                <ul className='w-[80%] h-[60%] pt-[25px] flex flex-col gap-[15px] justify-center '>
                  <li>Teamwork & Collaboration</li>
                  <li>Communication & Decision Making</li>
                  <li>Critical Thinking & Problem-Solving</li>
                  <li>Service-Oriented Mindset</li>
                </ul>
            </div>
            <div className='w-[30%] h-[60%] border-[1px] rounded-xl flex p-[10px] items-center flex-col shadow-2xl shadow-cyan-400 '>
                <h2 className='text-xl font-bold'>Technical Skills</h2>
                <ul className='w-[80%] h-[90%] pt-[25px] flex flex-col gap-[15px] justify-center '>
                  <li>PHP, HTML, CSS, JavaScript</li>
                  <li>Laravel (Currently Studying)</li>
                  <li>React (Currently Studying)</li>
                  <li>Responsive Web Design</li>
                  <li>Git & GitHub</li>
                  <li>Database Management (MySQL)</li>
                  <li>Problem-Solving & Debugging</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SkillsBody