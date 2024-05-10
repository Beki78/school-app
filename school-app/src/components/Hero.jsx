import React, { useState } from 'react'
import kmssportday from "../assets/kmssportday.jpg";
import kmsschool from "../assets/kmsschool.jpg";
import kmsscholarships from "../assets/kmsscholarships.jpg";
import kmsstudents1 from "../assets/kmsstudents1.webp"



const images = [kmssportday, kmsschool, kmsscholarships, kmsstudents1];

const Hero = () => {
   const [slideImage, setSlideImage] = useState([0])
   setTimeout(() => {
    
   }, 2000);
  return (
    <div>
      <div>
        <img src={images[1]} alt="" />
      </div>
    </div>
  );
}

export default Hero
