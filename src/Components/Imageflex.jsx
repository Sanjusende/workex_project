import React from 'react'
import logo1 from '../assets/logo1.webp';
import logo2 from '../assets/logo2.webp';
import Bitmap from '../assets/Bitmap.webp';

const imagesflex = () => {
  return (
    <>
<div className='flex justify-center items-center gap-96 h-full w-screen'>
    <img src={logo1} alt="" /><img src={logo2} alt="" /><img src={Bitmap} alt="" />
</div>
    </>
  )
}

export default imagesflex