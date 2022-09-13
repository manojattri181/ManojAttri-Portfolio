import React from "react";
import { FcPhone } from "react-icons/fc";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BiPhoneCall } from "react-icons/bi";
const Contact = () => {
  return (
    <div
      name="contact us"
      className="w-full  bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="max-w-screen-lg mx-auto">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 ">Submit the form below to get in touch with me</p>
        </div>
         <div className="max-w-screen-lg flex flex-col mx-auto mt-18 mb-18 md:m-auto md:flex-row gap-x-3 justify-center items-center"> 
        {/* Left side */}
         <div className='flex flex-col justify-center gap-y-14 mt-0 md:-mt-20'>
               <div className='w-full flex gap-3 p-6 rounded-xl  shadow-emerald-600 shadow-lg '>
                  <div>
                    <FcPhone className="hover:animate-bounce" size="32px" />
                  </div>
                  <div>
                    <h1 className='text-xl font-bold '>Phone :</h1>
                    <h1 className='text-xl text-gray-500 '>+91 9968363840</h1>
                  </div>
               </div>
               <div className='w-full flex gap-3 p-6 rounded-xl shadow-lg shadow-red-400'>
                  <div>
                    <SiGmail  className="hover:animate-bounce" size="32px" color="red" />
                  </div>
                  <div>
                    <h1 className='text-xl font-bold'>Email :</h1>
                    <h1 className='text-xl text-gray-500'>Manojattri181@gmail.com</h1>
                  </div>
               </div>
               <div className='w-full flex gap-3 p-6 rounded-xl shadow-lg shadow-red-500'>
                  <div>
                    <a href="https://www.google.com/maps/place/Najafgarh,+New+Delhi,+Delhi/@28.6072707,76.9626659,14z/data=!4m5!3m4!1s0x390d0fdcb4d53a21:0x8800d482f7f39fc0!8m2!3d28.6090126!4d76.9854526" target="_blank" >
                    <FaMapMarkerAlt  className="hover:animate-bounce" size="32px" color="red" />
                    </a>
                  </div>
                  <div>
                    <h1 className='text-xl font-bold'>Address :</h1>
                    <h1 className='text-xl  text-gray-500'>Najafgarh, New Delhi </h1>
                  </div>
               </div>
           </div> 
           
  {/* Right side  */}

        <div className="w-full flex justify-center mt-10 md:m-auto ">
          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
            >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white hover:opacity-60 bg-gradient-to-b from-cyan-400 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
