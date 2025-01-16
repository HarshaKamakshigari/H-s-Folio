// src/components/AnimatedCursor.js
import React, { useEffect, useRef } from 'react';

const AnimatedCursor = () => {
  const cursorRef = useRef(null);

  // Handle mousemove event to move the animated gradient cursor
  const handleMouseMove = (e) => {
    if (cursorRef.current) {
      const x = e.clientX;
      const y = e.clientY;
      cursorRef.current.style.transform = `translate3d(${x - 25}px, ${y - 25}px, 0)`; // Adjusted for centering
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="absolute w-32 h-32 bg-gradient-to-r from-blue-600 to-pink-600 rounded-full blur-3xl filter transition-all duration-300 pointer-events-none z-50"
      style={{
        position: 'absolute',
        left: '-999px', // Initially off-screen
        top: '-999px',  // Initially off-screen
      }}
    ></div>
  );
};

export default AnimatedCursor;
