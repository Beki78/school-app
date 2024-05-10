import React from 'react'
import NavBar from "../components/NavBar";


const Portal = () => {
  return (
    <div>
      <NavBar />
      <div className='flex justify-center items-center h-screen'>
        <h1 className='text-3xl md:text-5xl'>Comming Soon!</h1>
      </div>
    </div>
  );
}

export default Portal
