import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(true);
  const cursorRef = useRef(null);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const moveCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorPosition.x}px`;
        cursorRef.current.style.top = `${cursorPosition.y}px`;
      }
      requestAnimationFrame(moveCursor); // Continuously update position for smooth animation
    };

    window.addEventListener('mousemove', updateCursorPosition);

    moveCursor(); // Start moving cursor

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, [cursorPosition]);

  return (
    <div
      ref={cursorRef}
      className="absolute bg-red-500 rounded-full transition-all pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
      style={{
        width: '20px',
        height: '20px',
        transition: 'all 0.2s ease-out', // Smooth transition for size and color changes
      }}
    ></div>
  );
};

export default CustomCursor;
