import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#D3D8DF]">
      <footer className="flex flex-col md:flex-row items-center gap-10 md:gap-20 p-20 px-20 justify-center">
        <div>
          <h1 className="text-3xl text-center pb-6">Contact us</h1>
          <div className="flex gap-3 items-center pb-3">
            <FaLocationDot className="text-2xl" />{" "}
            <h1 className="font-[poppins]">
              Kebena square, Addis Ababa, Ethiopia
            </h1>
          </div>
          <div className="flex gap-3 items-center pb-3">
            <FaPhoneVolume className="text-2xl" />{" "}
            <h1 className="font-[poppins]">+211-23-26-67-36</h1>
          </div>
          <div className="flex gap-3 items-center pb-3">
            <MdEmail className="text-2xl" />{" "}
            <h1 className="font-[poppins]">kidanemehretschool@gmail.com</h1>
          </div>
        </div>
        <div>
          <iframe className='w-[300px] md:w-[400px]'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d921.3398492949052!2d38.77589793726617!3d9.034964337818945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f7f1b2e16e5%3A0x41daae3e631b05d4!2zS2lkYW5lIE1laGVyZXQgU2Nob29sIHwgS2ViZW5hIHwg4Yqq4Yuz4YqQIOGIneGIheGIqOGJtSDhibUv4Ymk4Ym1IHwg4YmA4Ymg4YqT!5e1!3m2!1sen!2set!4v1715105326326!5m2!1sen!2set"
            height="300"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </footer>
      <div className="w-full bg-black text-gray-400 text-center py-2">
        <small>© 2024 Bereket Getachew. All rights reserved.</small>
      </div>
    </div>
  );
}

export default Footer
