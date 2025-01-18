import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <img
        src="path_to_your_gif.gif"  // Make sure this is the correct path to your GIF
        alt="Loading..."
        className="w-32 h-auto"
      />
    </div>
  );
};

export default LoadingScreen;
