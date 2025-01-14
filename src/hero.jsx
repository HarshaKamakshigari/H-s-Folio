// import React, { useEffect, useState } from 'react';
// import './index.css';
// import yourImage from './assets/pfp.jpg'; // Update the path accordingly

// const Hero = () => {
//   const [time, setTime] = useState('');

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
//       setTime(now.toLocaleString('en-IN', options)); // Get time in IST
//     };

//     updateTime();
//     const intervalId = setInterval(updateTime, 1000); // Update time every second

//     return () => clearInterval(intervalId); // Cleanup on component unmount
//   }, []);

//   return (
//     <div className='bg-gray-300'>
//       {/* Line and text */}
//       <div className="mb-1 bg-gray-300 pl-1 pr-10">
//         <h1 className="bg-gray-300 text-black font-SpaceGrotesk text-lg pb-3 font-semibold pl-10">
//           Based in India | {time} <span className="bg-gray-300 text-red-600">.</span>
//         </h1>
//       </div>

//       <hr className=" bg-gray-300 border-t-5 border-black ml-10 mr-10" />


//       {/* Main content with Flexbox layout */}
//       <div className='bg-gray-300 pt-5  px-10 flex flex-col md:flex-row items-center justify-between'>
//         <div className='text-content md:w-1/2'>
//           <h1 className='font-SpaceGrotesk text-black font-semibold text-7xl md:text-8xl'>
//             Hi, I'm Harsha
//             <span className="text-red-600">.</span>
//           </h1>
//           <div className='mt-4'>
//             <h2 className='font-SpaceGrotesk text-black text-light md:text-4xl'>
//               hɑːrʃə kɑːmɑːkʃɪɡɑːri /
//             </h2>
//             <p className='font-open sans text-black text-xl md:text-xl'>
//               <strong>noun</strong><br />
//               Design & Security<br />
//               Creating seamless digital experiences with a focus on security.
//             </p>
//             <p className='font-SpaceGrotesk text-black text-xl md:text-xl'>
//               <strong>verb</strong><br />
//                Design intuitive user interfaces and experiences<br />
//                Secure digital environments and protect user data<br />
//             </p>
//             <p className='font-SpaceGrotesk text-black text-xl md:text-xl'>
//               <strong>adjective</strong><br />
//                Creative Developer<br />
//                Design Director<br />
//             </p>
//           </div>
//         </div>

//         {/* Right-side image */}
//         <div className='md:w-1/6 mt-0 md:mt-0'>
//           <img 
//             src={yourImage} 
//             alt="Harsha's photo" 
//             className='w-full h-auto rounded-full shadow-lg' // Add any classes you like for styling
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
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
    <div className='bg-gray-300'>
      {/* Line and text */}
      <div className="mb-8 bg-gray-300 pl-10 pr-10">
        <h1 className="bg-gray-300 text-black font-SpaceGrotesk text-lg pb-3 font-semibold pl-10">
          Based in India | {time} <span className="bg-gray-300 text-red-600">.</span>
        </h1>
        <hr className=" bg-gray-300 border-t-5 border-black" />
      </div>

      {/* Main content */}
      <div className='bg-gray-300 pt-31 pl-40 pr-31'>
        <h1 className='font-SpaceGrotesk text-black font-semibold text-7xl md:text-8xl'>
          Hi, I'm Harsha
          <span className="text-red-600">.</span>
        </h1>
        <div className='mt-8'>
          <h2 className='font-SpaceGrotesk text-black text-light md:text-4xl'>
            hɑːrʃə kɑːmɑːkʃɪɡɑːri /
          </h2>
          <p className='font-open sans text-black text-xl md:text-xl'>
            <strong>noun</strong><br />
            Design & Security<br />
            Creating seamless digital experiences with a focus on security.
          </p>
          <p className='font-SpaceGrotesk text-black text-xl md:text-xl'>
            <strong>verb</strong><br />
             Design intuitive user interfaces and experiences<br />
             Secure digital environments and protect user data<br />
  
          </p>
          <p className='font-SpaceGrotesk text-black text-xl md:text-xl'>
            <strong>adjective</strong><br />
             Creative Developer<br />
             Design Director<br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;