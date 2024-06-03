import { useState, useEffect } from 'react';

function useWindowWidthSize() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', updateWindowWidth);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      console.log('Cleanup function to remove event listener of window width resize');
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  
  return windowWidth;
}

export default useWindowWidthSize;