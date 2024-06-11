import React from 'react'
import { Link } from 'react-router-dom';

const Portal = () => {
  return (
    <div>
      <div className="flex justify-center flex-col gap-7 items-center h-screen">
        <h1 className="text-3xl md:text-5xl text-[#0074B7]">Comming Soon!</h1>
        <Link to='/' className="bg-[#60A3D9]  text-[#003B73] py-2 px-4 rounded-md duration-300 ease-in-out hover:bg-[#407daf]">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Portal
