import React, { useState, useEffect } from 'react';

function TypingText() {
  const text = "Hello, I'm a React developer!";
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, 100); // typing speed

    return () => clearInterval(interval); // cleanup
  }, []);

  return <p>{displayedText}</p>;
}

export default TypingText;