import React, { useEffect, useRef } from 'react';

const AnimatedGradient = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (blobRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        blobRef.current.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
      }
    };

    // Attach mousemove listener
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      // Cleanup listener when the component is unmounted
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Gradient Blob */}
      <div
        className="absolute inset-0 flex justify-center items-center rounded-full bg-gradient-to-r from-blue-600 to-pink-600 blur-3xl filter transition-all duration-500 pointer-events-none z-0"
        style={{ width: '650px', height: '650px', transform: 'translate(calc(-50% + 15px), -50%)' }}
        ref={blobRef}
      ></div>

      {/* Content */}
      <div className="flex justify-center items-center w-full h-screen relative z-10">
        <div className="flex flex-col justify-center items-center w-1/2">
         
          
        </div>
      </div>
    </>
  );
};

export default AnimatedGradient;
