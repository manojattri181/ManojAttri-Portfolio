import React, { useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const ImageSlider = ({data,imgStyle }) => {
  const [image,setImage] = useState(0);
  const [count,setCount] = useState(0);

  const handleFunc =(value)=>{
    let temp = (count%data.length);
    setCount(prev=> Math.abs(prev+value));
    setImage(temp);
  }
  return (
    <div className='max-w-screen-lg h-full flex justify-center relative'>
        <div className='flex items-center rounded-full hover:opacity-60 justify-center w-8 h-8 z-10 bg-black opacity-40 absolute top-[50%] hover:cursor-pointer left-[2%] ' >
        <button disabled={count===0} onClick={()=>handleFunc(-1)}>
        <BiChevronLeft size="36px" color="white"/>
        </button>
        </div >
        <div>
       <img  className={imgStyle}  src={data[image].src} alt="img"/>
        </div>
       <div className='flex items-center rounded-full hover:opacity-60  justify-center w-8 h-8 z-10 bg-black cursor-pointer opacity-40 absolute top-[50%] right-[2%]'>
       <button  onClick={()=>handleFunc(1)}>
        <BiChevronRight size="36px" color="white"/>
        </button>
       </div>
    </div>
  )
}

export default ImageSlider;
