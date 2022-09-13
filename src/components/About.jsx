import React from "react";
import { SiSitepoint } from "react-icons/si";
import benchwork from "../assets/working.gif"
const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-fit  bg-gradient-to-b from-gray-800 to-black text-white pt-10"
    >
      
      <div className="max-w-screen-lg mx-auto p-2 ">
          <p className="text-4xl  capitalize font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
      
      <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2 pt-4 ">

       <div className="hidden relative lg:block lg:mt-6 " >
      <img className="absolute inset-0 w-9/12 h-9/12 object-cover object-center rounded-xl " src={benchwork} alt="logo" />
      </div>

    <div className='px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-2 lg:py-4 lg:max-w-screen-lg '>
      <img className="rounded-lg shadow-xl sm:mt-3 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden" src={benchwork} alt="logo" />
        <div>
      <p className="mt-6 md:mt-2 text-2xl  text-gray-600 ">
        I am Result-oriented full-stack web developer, passionate about developing user-friendly web applications using MERN Stack.
        </p>

        <p className="mt-6 text-2xl  text-gray-600 ">
        I enjoy developing websites and a keen interest in solving problems and coming up with effective solutions.
        </p>
      
        <p className="mt-6 text-2xl  text-gray-600 ">
        Eager to be a part of a team which gives me ability to learn and grow.
        </p>
        </div>
    </div>
   </div>
    </div>
  );
};

export default About;
