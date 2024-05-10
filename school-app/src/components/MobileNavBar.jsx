import React from 'react'
import { Link, NavLink } from "react-router-dom";
import kmslogo from "../assets/kmslogo-removebg.png";
import { CiMenuFries } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";

const MobileNavBar = () => {
  return (
    <div>
       {/* <nav className="md:hidden w-full flex flex-wrap  items-center mx-auto p-2 bg-[#0056CC] text-white pl-3 md:pl-10 shadow-lg shadow-slate-500 rounded-b-lg">
        <Link to="/"><img src={kmslogo} alt="kms logo" className="w-[70px] lg:w-[100px] md:w-[90px]" /></Link>
        <ul className="relative font-[Dangrek] flex justify-between flex-col mx-auto gap-5 lg:gap-12 md:text-base ">
          <NavLink  to="/"><li className='hover:text-[#000000] hover:scale-x-125 transition- duration-300 ease-in-out'>Home</li></NavLink>
          <Link><li  className=' flex items-center gap-1 hover:text-[#000000] hover:scale-x-125 transition- duration-300 ease-in-out'>About <FaAngleDown/></li></Link>
          <NavLink to="/admission"><li className='hover:text-[#000000] hover:scale-x-125 transition- duration-300 ease-in-out'>Admission</li></NavLink>
          <NavLink to="/facilities"><li className='hover:text-[#000000] hover:scale-x-125 transition- duration-300 ease-in-out'>Facilities</li></NavLink>
          <Link><li  className=' flex items-center gap-1 hover:text-[#000000] hover:scale-x-125 transition- duration-300 ease-in-out'>Event <FaAngleDown/></li></Link>
          <NavLink to="/gallery"><li className='hover:text-[#000000] hover:scale-x-125 transition- duration-300 ease-in-out'>Gallery</li></NavLink>
          <NavLink to="/activity"><li className='hover:text-[#000000] hover:scale-x-125 transition- duration-300 ease-in-out'>Activity</li></NavLink>
          <NavLink to="/contact"><li className='hover:text-[#000000] hover:scale-x-125 transition- duration-300 ease-in-out'>Contact</li></NavLink>
          <NavLink to="/portal"><li className='hover:text-[#000000] hover:scale-x-125 transition- duration-300 ease-in-out'>Portal</li></NavLink>
          <CiMenuFries className="text-2xl md:hidden" />
        </ul>
      </nav> */}
    </div>
  )
}

export default MobileNavBar
