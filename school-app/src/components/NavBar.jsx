import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import PcNavBar from "./PcNavBar"
import MobileNavBar from "./MobileNavBar";


const NavBar = () => {

  const [dropDown, setDropDown] = useState(false)
  const [isToggle, setIsToggle] = useState(false);
  const [isToggleEvent, setIsToggleEvent] = useState(false);
  const [sideBar, setSideBar] = useState(false)


  const hover = () =>{
    setDropDown(true)
  }
  const toggle = () => {
    setIsToggle(!isToggle);
  };
  const toggleEvent = () => {
    setIsToggleEvent(!isToggleEvent);
  };
  const openSidebar = ()=> {
    setSideBar(!sideBar);
  }
  return (
    <div>
      <PcNavBar/> 
      <MobileNavBar/>
    </div>
  );
}

export default NavBar
