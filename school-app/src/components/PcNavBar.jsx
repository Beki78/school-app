import React,{useState} from 'react'
import { Link, NavLink } from "react-router-dom";
import kmslogo from "../assets/kmslogo-removebg.png";
import { CiMenuFries } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";



const PcNavbar = () => {
     const [isToggle, setIsToggle] = useState(false);
     const [isToggleEvent, setIsToggleEvent] = useState(false);

     const toggle = () => {
       setIsToggle(!isToggle);
     };
     const toggleEvent = () => {
       setIsToggleEvent(!isToggleEvent);
     };
     
  return (
    <div>
      <nav className=" w-full flex flex-wrap items-center mx-auto p-2 bg-[#0056CC] text-white pl-3 md:pl-10 shadow-lg shadow-slate-500 rounded-b-lg">
        <Link to="/"><img src={kmslogo} alt="kms logo" className="w-[70px] lg:w-[100px] md:w-[90px]" /></Link>
          <CiMenuFries className="text-2xl md:hidden" />

        <ul className="relative font-[Dangrek] flex flex-col md:flex-row justify-between mx-auto gap-5 lg:gap-12 md:text-base ">
          <NavLink  to="/"><li className='hover:text-[#000000] hover:scale-x-125 transition- duration-300 ease-in-out'>Home</li></NavLink>
          <Link><li onClick={toggle} className=' flex items-center gap-1 hover:text-[#000000] hover:scale-x-125 transition- duration-300 ease-in-out'>About <FaAngleDown/></li></Link>
          {
            isToggle?<div className='absolute top-7 bg-blue-500 rounded-md p-3'><Link to="/school-history"><li className='hover:bg-[#0056CC] p-2 rounded-md'>School history</li></Link><Link to="/achievements"><li className='hover:bg-[#0056CC] p-2 rounded-md'>Achievements</li></Link> </div>:<div className='hidden'><h1>asdsadasdasd</h1></div>
          }
          <NavLink to="/admission"><li className='hover:text-[#000000] hover:scale-x-125 transition- duration-300 ease-in-out'>Admission</li></NavLink>
          <NavLink to="/facilities"><li className='hover:text-[#000000] hover:scale-x-125 transition- duration-300 ease-in-out'>Facilities</li></NavLink>
          <Link><li onClick={toggleEvent} className=' flex items-center gap-1 hover:text-[#000000] hover:scale-x-125 transition- duration-300 ease-in-out'>Event <FaAngleDown/></li></Link>
          {
            isToggleEvent?<div className='absolute top-7 right-80 lg:right-96 w-40 text-center bg-blue-500 rounded-md p-3'><Link to="/event"><li className='hover:bg-[#0056CC] p-2 rounded-md'>Events</li></Link><Link to="/news"><li className='hover:bg-[#0056CC] p-2 rounded-md'>News</li></Link> </div>:<div className='hidden'><h1>asdsadasdasd</h1></div>
          }
          <NavLink to="/gallery"><li className='hover:text-[#000000] hover:scale-x-125 transition- duration-300 ease-in-out'>Gallery</li></NavLink>
          <NavLink to="/activity"><li className='hover:text-[#000000] hover:scale-x-125 transition- duration-300 ease-in-out'>Activity</li></NavLink>
          <NavLink to="/contact"><li className='hover:text-[#000000] hover:scale-x-125 transition- duration-300 ease-in-out'>Contact</li></NavLink>
          <NavLink to="/portal"><li className='hover:text-[#000000] hover:scale-x-125 transition- duration-300 ease-in-out'>Portal</li></NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default PcNavbar
