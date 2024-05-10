import React from 'react'
import kmssportday from "../assets/kmssportday.jpg"
import dsc1 from "../assets/christmas-2006/dsc_0463.webp"
import { useParams } from 'react-router-dom';
// import images from "../PhotoData"

// const images = [
//   kmssportday,
//   kmssportday,
//   kmssportday,
//   kmssportday,
//   kmssportday,
//   kmssportday,
//   kmssportday,
//   kmssportday,
// ];

const PhotoLayout = () => {
    const {id} = useParams()
  return (
    <div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 px-7 p-16 gap-2'>
        {images.map((image, index) => (
          <img key={index} src={image.default} alt="" className='w-[20rem] bg-cover' />
        ))}
      </div>
    </div>
  );
}

export default PhotoLayout
