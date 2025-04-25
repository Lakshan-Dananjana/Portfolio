import React, { useEffect, useState } from 'react'
import image from '../assets/myImage.png'
import SocialIcons from './SocialIcons';

function HomeBody() {

    const [displayedText, setDisplayedText] = useState('');
    const texts = ['Full-Stack Developer', 'Laravel Developer', 'React Developer'];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    
    useEffect(() => {
      if (currentTextIndex < texts.length) {
        const timeout = setTimeout(() => {
          if (currentCharIndex < texts[currentTextIndex].length) {
            setDisplayedText(texts[currentTextIndex].substring(0, currentCharIndex + 1));
            setCurrentCharIndex(currentCharIndex + 1);
          } else {
            // Move to next text after a delay
            setTimeout(() => {
              setCurrentTextIndex((currentTextIndex + 1) % texts.length);
              setCurrentCharIndex(0);
              setDisplayedText('');
            }, 1000); // Delay before starting next text
          }
        }, 150); // Typing speed
        
        return () => clearTimeout(timeout);
      }
    }, [currentCharIndex, currentTextIndex, texts]);
    

  return (
    <div className='flex h-[93%] flex-col sm:flex-row'>
        <div className=' flex justify-center flex-col sm:w-[50%] h-[50%] sm:h-[100%] gap-3 p-[30px]'>
            <div className='flex'>
                <h1 className='text-red-700 font-bold text-5xl'>Hi ,</h1>
                <h2 className='text-white font-bold text-3xl flex items-end'>I'M</h2>
            </div>
            <div>
                <h3 className='text-white font-bold text-xl'>Lakshan Dananjana</h3>
            </div>
            <div>
                <h4 className='text-red-600 text-4xl font-bold'>I Am <span className='text-white'>{displayedText}</span><span className='animate-blink'>|</span></h4>
            </div>
            <SocialIcons/>
        </div>
        <div className='sm:w-[50%] h-[50%] sm:h-[100%] flex justify-center items-center' >
            <img src={image} alt="Profile Of Lakshan Dananjana"  className='w-[200px] sm:w-[60%]  rounded-xl border-sky-500 shadow-2xl shadow-cyan-400'/>
        </div>
    </div>
  );
}

export default HomeBody