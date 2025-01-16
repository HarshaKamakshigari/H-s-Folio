// import React, { useEffect, useState } from 'react';
// import Newpfp from './Newpfp.png';
// import './index.css'; // Ensure your Tailwind CSS is properly configured

// const Hero = () => {
//   const [time, setTime] = useState('');

//   // Update time every second
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
//     <div className="bg-gray-300  flex flex-col justify-center">
//       {/* Line and time */}
//       <div className="mb-8 bg-gray-300 pl-10 pr-10">
//         <h1 className="bg-gray-300 text-black font-SpaceGrotesk text-lg pb-3 font-semibold pl-10">
//           Based in India | {time} <span className="bg-gray-300 text-red-600">.</span>
//         </h1>
//         <hr className="bg-gray-300 border-t-5 border-black" />
//       </div>

//       {/* Main content */}
//       <div className="bg-gray-300 flex flex-col md:flex-row items-center justify-between px-10">
//         {/* Text Content */}
//         <div className="flex-1">
//           <h1 className="font-SpaceGrotesk text-black font-semibold text-7xl md:text-8xl">
//             Hi, I'm Harsha
//             <span className="text-red-600">.</span>
//           </h1>
//           <div className="mt-8">
//             <h2 className="font-SpaceGrotesk text-black text-light md:text-4xl">
//               hɑːrʃə kɑːmɑːkʃɪɡɑːri /
//             </h2>
//             <p className="font-open-sans text-black text-xl md:text-xl">
//               <strong>noun</strong>
//               <br />
//               Design & Security
//               <br />
//               Creating seamless digital experiences with a focus on security.
//             </p>
//             <p className="font-SpaceGrotesk text-black text-xl md:text-xl">
//               <strong>verb</strong>
//               <br />
//               Design intuitive user interfaces and experiences
//               <br />
//               Secure digital environments and protect user data
//               <br />
//             </p>
//             <p className="font-SpaceGrotesk text-black text-xl md:text-xl">
//               <strong>adjective</strong>
//               <br />
//               Creative Developer
//               <br />
//               Design Director
//               <br />
//             </p>
//           </div>
//         </div>

//         {/* Picture */}
//         <div className="flex-1 flex justify-center  md:mt-0">
//           <img
//             src={Newpfp}
//             alt="Harsha Kamakshigari"
//             className="  border-black   "
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React, { useEffect, useState } from 'react';
import Newpfp from './Newpfp.png';
import './index.css'; 

const Hero = () => {
  const [time, setTime] = useState('');

  // Update time every second
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
    <div className="bg-gray-300 flex flex-col justify-center">
      {/* Line and time */}
      <div className=" bg-gray-300 px-10"> {/* Reduced `mb-4` */}
        <h1 className="text-black font-SpaceGrotesk text-lg pb-2 font-semibold">
          Based in India | {time} <span className="text-red-600">.</span>
        </h1>
        <hr className="border-t-2 border-black" /> {/* Reduced border thickness */}
      </div>

      {/* Main content */}
      <div className="bg-gray-300 flex flex-col md:flex-row items-center justify-between px-10 ">
        {/* Text Content */}
        <div className="flex-1 ps-11">
          <h1 className="font-SpaceGrotesk text-black font-semibold text-6xl md:text-8xl leading-tight">
            Hi, I'm Harsha<span className="text-red-600">.</span>
          </h1>
          <div className="mt-4"> {/* Reduced margin */}
            <h2 className="font-SpaceGrotesk text-black text-light md:text-4xl">
              hɑːrʃə kɑːmɑːkʃɪɡɑːri /
            </h2>
            <p className="font-open-sans text-black text-lg">
              <strong>noun</strong>
              <br />
              Design & Security
              <br />
              Creating seamless digital experiences with a focus on security.
            </p>
            <p className="font-SpaceGrotesk text-black text-lg">
              <strong>verb</strong>
              <br />
              Design intuitive user interfaces and experiences
              <br />
              Secure digital environments and protect user data
              <br />
            </p>
            <p className="font-SpaceGrotesk text-black text-lg">
              <strong>adjective</strong>
              <br />
              Creative Developer
              <br />
              Design Director
              <br />
            </p>
          </div>
        </div>

        {/* Picture */}
        <div className="flex-1 flex justify-center rotate-3">
          <img
            src={Newpfp}
            alt="Harsha Kamakshigari"
            className="w-120 h-120 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
