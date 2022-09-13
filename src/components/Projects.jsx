import React from "react";
import homePage from '../assets/portfolio/Expedia/HomePage.JPG'
import signin from '../assets/portfolio/Expedia/Signin.JPG'
import section from '../assets/portfolio/Expedia/Productsection.JPG'
import payment from '../assets/portfolio/Expedia/Payment.JPG'
import s1 from '../assets/portfolio/skinstore/s1.JPG'
import s2 from '../assets/portfolio/skinstore/s2.JPG'
import s3 from '../assets/portfolio/skinstore/s3.JPG'
import s4 from '../assets/portfolio/skinstore/s4.JPG'
import f1 from '../assets/portfolio/fitmeal/f1.JPG'
import f2 from '../assets/portfolio/fitmeal/f2.JPG'
import f3 from '../assets/portfolio/fitmeal/f3.JPG'
import f4 from '../assets/portfolio/fitmeal/f4.JPG'

import ImageSlider from "./ImageSlider";
import {SiCss3, SiHtml5, SiJavascript, SiReact, SiRedux} from "react-icons/si";
const Projects = () => {
  const expedia = [
    {
      id: 1,
      src: homePage,
    },
    {
      id: 2,
      src: signin,
    },
    {
      id: 3,
      src: section,
    },
    {
      id: 4,
      src: payment,
    }
  ];
  const skinstore =[
    {
      id:1,
      src:s1,
    },
    {
      id:2,
      src:s2,
    },
    {
      id:3,
      src:s3,
    },
    {
      id:4,
      src:s4,
    }
  ]
  const fitmeal =[
    {
      id:1,
      src:f1,
    },
    {
      id:2,
      src:f2,
    },
    {
      id:3,
      src:f3,
    },
    {
      id:4,
      src:f4,
    }
  ]
 
  let style_md = "mt-6 rounded-lg duration-200  sm:mt-8 sm:h-60  sm:max-w-screen-lg sm:object-cover object-center lg:hidden ";
  return (
    <div
      name="projects"
      className="bg-gradient-to-b to-black from-gray-800 w-full text-white pt-32 pb-32"
    >
       <div className="max-w-screen-lg mx-auto p-2 ">
          <p className="text-4xl  uppercase font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>

        <div className="max-w-screen-lg  mx-auto px-2 shadow-xl shadow-gray-600 mt-0 md:mt-10  ">
        <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2  "> 
        <div className='px-10 py-12 max-w-md mx-auto sm:max-w-xl lg:px-10 lg:py-6 lg:max-w-full'>
          <div className="block lg:hidden">
          <ImageSlider  data={expedia} imgStyle= {style_md} />
          </div>
          <h1 className="mt-6 text-xl text-blue-500 font-bold sm:mt-8  sm:text-3xl lg:text-2xl">Expedia Clone
            </h1>
            <p className="w-full  mt-2 text-gray-600 sm:mt-2 sm:text-xl">
            Expedia is one of the fastest growing online travel portals in Asia, offering travellers an extensive selection of hotels, activities and travel services.
            </p>
            <div className='flex justify-center items-center gap-x-2 mt-5'>
            <div><SiJavascript size="32px" color="yellow"/></div>
            <div><SiHtml5 size="32px" color="#e34c26"/></div>
            <div><SiCss3 size="32px" color="#264de4"/></div>
            <div><SiReact size="32px" color="#61DBFB"/></div>
            <div><SiRedux size="32px" color="#764abc"/></div>
            </div>
            <div className="max-w-screen-md flex justify-center space-x-6">
            <div className="mt-4 sm:mt-6">
              <a href="https://github.com/manojattri181/Expedia-clone" target={"_blank"}>
                <button className="inline-block px-4 py-2 rounded-lg  hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" > Code</button>
              </a>
            </div>
            <div className="mt-4 sm:mt-6">
              <a href="https://expedia-tawny.vercel.app/" target={"_blank"}>
                <button className="inline-block px-4 py-2 rounded-lg hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" >Demo</button>
              </a>
            </div>
            </div>
        </div>

      <div className="hidden relative lg:block " >
        <img className="absolute inset-0 w-full   hover:scale-y-150 hover:scale-x-150 -mx-3 h-full object-contain rounded-md duration-200 " src={homePage} alt="logo" />
        </div>
      </div>
      </div>
      {/* skin store project */}
        <div className="max-w-screen-lg  mx-auto px-2 shadow-xl shadow-gray-600 mt-10  ">
        <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2  "> 
        <div className='px-10 py-12 max-w-md mx-auto sm:max-w-xl lg:px-10 lg:py-6 lg:max-w-full'>
          <div className="block lg:hidden">
          <ImageSlider  data={skinstore} imgStyle= {style_md} />
          </div>
          <h1 className="mt-6 text-xl text-blue-500 font-bold sm:mt-8  sm:text-3xl lg:text-2xl">SkinStore Clone
            </h1>
            <p className="w-full  mt-2 text-gray-600 sm:mt-2 sm:text-xl">
            SkinStore offers premium beauty products like lipstick, Eyeliners, and many more products with the latest in innovative clinical skincare and luxury spa products.
            </p>
            <div className='flex justify-center items-center gap-x-2 mt-5'>
            <div><SiJavascript size="32px" color="yellow"/></div>
            <div><SiHtml5 size="32px" color="#e34c26"/></div>
            <div><SiCss3 size="32px" color="#264de4"/></div>
            </div>
            <div className="max-w-screen-md flex justify-center space-x-6">
            <div className="mt-4 sm:mt-6">
              <a href="https://github.com/pravindnikam07/Skin-Store-Clone" target={"_blank"}>
                <button className="inline-block px-4 py-2 rounded-lg  hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" > Code</button>
              </a>
            </div>
            <div className="mt-4 sm:mt-6">
              <a href="https://skinstoreclone.netlify.app/" target={"_blank"}>
                <button className="inline-block px-4 py-2 rounded-lg hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" >Demo</button>
              </a>
            </div>
            </div>
        </div>

      <div className="hidden relative lg:block " >
        <img className="absolute inset-0 w-full   hover:scale-y-150 hover:scale-x-150 -mx-3 h-full object-contain rounded-md duration-200 " src={s1} alt="logo" />
        </div>
      </div>
      </div>
      {/* Fitmeal  */}
      <div className="max-w-screen-lg  mx-auto px-2 shadow-xl shadow-gray-600 mt-10  ">
        <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2  "> 
        <div className='px-10 py-12 max-w-md mx-auto sm:max-w-xl lg:px-10 lg:py-6 lg:max-w-full'>
          <div className="block lg:hidden">
          <ImageSlider  data={fitmeal} imgStyle= {style_md} />
          </div>
          <h1 className="mt-6 text-xl text-blue-500 font-bold sm:mt-8  sm:text-3xl lg:text-2xl">FitMeal Clone
            </h1>
            <p className="w-full  mt-2 text-gray-600 sm:mt-2 sm:text-xl">
            SkinStore offers premium beauty products like lipstick, Eyeliners, and many more products with the latest in innovative clinical skincare and luxury spa products.
            </p>
            <div className='flex justify-center items-center gap-x-2 mt-5'>
            <div><SiJavascript size="32px" color="yellow"/></div>
            <div><SiHtml5 size="32px" color="#e34c26"/></div>
            <div><SiCss3 size="32px" color="#264de4"/></div>
            </div>
            <div className="max-w-screen-md flex justify-center space-x-6">
            <div className="mt-4 sm:mt-6">
              <a href="https://github.com/manojattri181/Fit-meal-website-clone" target={"_blank"}>
                <button className="inline-block px-4 py-2 rounded-lg  hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" > Code</button>
              </a>
            </div>
            <div className="mt-4 sm:mt-6">
              <a href="https://fit-meal.netlify.app/" target={"_blank"}>
                <button className="inline-block px-4 py-2 rounded-lg hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base" >Demo</button>
              </a>
            </div>
            </div>
        </div>

      <div className="hidden relative lg:block " >
        <img className="absolute inset-0 w-full   hover:scale-y-150 hover:scale-x-150 -mx-3 h-full object-contain rounded-lg  " src={f1} alt="logo" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Projects;
