import React from 'react'
import NavBar from "../components/NavBar"
import Caurosel from "../components/Carousel"
import HeaderSection from '@/components/HeaderSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Footer from "../components/Footer"



const Home = () => {
  return (
    <>
      <NavBar />
      <Caurosel />
      <div className="font-[Poppins]">
        <h1 className="text-5xl text-center py-7 pt-20 font-[Dangrek] text-[#003B73]">
          Welcome To Kidane Mehret School
        </h1>
        <hr className="border-t-[1px] rounded-lg mx-28 border-[#BFD7ED]" />

        <p className="mt-16 mx-auto px-48 leading-6">
          Lideta Catholic Cathedral School (LCCS) stands as one of Ethiopia’s
          most esteemed educational institutions. At LCCS, we uphold the
          conviction that every individual merits an environment that fosters
          growth, encourages potential, and is nurturing at its core. Our
          diverse community of students and staff, from various religious
          backgrounds, collectively embrace and uphold essential human values.
          We deeply respect the intrinsic worth of every individual. LCCS
          consistently delivers unparalleled educational quality, a testament to
          which is the remarkable success of our students. Each year, many from
          LCCS secure positions in prestigious universities worldwide, including
          renowned institutions like Harvard, MIT, Yale, Stanford, and
          Cambridge, among others.
        </p>
        <div className="flex justify-center mt-7">
          <Link className="bg-[#60A3D9]  text-[#003B73] py-2 px-4 rounded-md duration-300 ease-in-out hover:bg-[#407daf]">
            Read More
          </Link>
        </div>
      </div>
      <HeaderSection />
     <Footer/>
    </>
  );
}

export default Home
