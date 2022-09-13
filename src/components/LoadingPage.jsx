import React from 'react'
import loadingGif2 from "../assets/loading.gif"
const LoadingPage = () => {
  return (
    <div className='w-full min-h-screen mx-auto bg-black '>
      <div className='max-w-screen-lg flex flex-col items-center justify-center m-auto pt-32 md:pt-[5%] '>
        <img src={loadingGif2} className="w-8/12 md:w-6/12" alt="" />
        <div className='m-auto mt-5'>
        <h1 className="text-5xl text-white font-signature ml-2 capitalize">Manoj Attri</h1>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage;