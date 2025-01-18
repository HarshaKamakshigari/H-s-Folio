import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";

export default function About() {
  return (
    <>


    
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-center max-w-3xl">
        Welcome to our platform! We are dedicated to providing the best experience for collaboration, innovation, and success. Our mission is to make teamwork seamless and productive.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-center max-w-2xl">
          To empower teams with tools that foster creativity and collaboration.
        </p>
      </div>
    </div>


    </>
  );
}
