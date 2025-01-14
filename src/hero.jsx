import React, { useEffect, useState } from 'react';
import './index.css';

const Hero = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
      setTime(now.toLocaleString('en-IN', options)); // Get time in IST
    };
    
    updateTime();
    const intervalId = setInterval(updateTime, 1000); // Update time every second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className='bg-gray-300 pt-32 pl-40 pr-32'>
      {/* Line and text */}
      <div className=" mb-8">
      <h1 className=" text-black font-SpaceGrotesk text-lg pb-3 font-semibold">Based in India | {time} </h1>
        <hr className="border-t-5 border-black" />
        {/* <hr className="flex-1 border-t-2 border-black" /> */}
      </div>
      
      {/* Main content */}
      <h1 className='font-SpaceGrotesk text-black font-semibold text-7xl md:text-8xl'>
        Hi, I'm Harsha
        <span className="text-red-600">.</span>
      </h1>
      <div className='mt-8'>
        <h2 className='font-SpaceGrotesk text-black text-light md:text-4xl'>
          hɑːrʃə kɑːmɑːkʃɪɡɑːri /  
        </h2>
        <p className='font-SpaceGrotesk text-black text-xl md:text-2xl'>
          <strong>noun</strong><br />
          Product Designer & Developer at [Your Company Name]<br />
          Creator of intuitive and functional user experiences
        </p>
        <p className='font-SpaceGrotesk text-black text-xl md:text-2xl'>
          <strong>verb</strong><br />
          1. Design and innovate to solve real-world problems<br />
          2. Build and iterate to create seamless digital experiences<br />
          3. Inspire collaboration and creativity
        </p>
        <p className='font-SpaceGrotesk text-black text-xl md:text-2xl'>
          <strong>adjective</strong><br />
          1. Open-minded and detail-oriented<br />
          2. Passionate about technology and design<br />
          3. Driven by user-centric solutions
        </p>
      </div>
    </div>
  );
};

export default Hero;
