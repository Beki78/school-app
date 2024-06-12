import React from "react";
import NavBar from "../components/NavBar";
import Caurosel from "../components/Carousel";
import HeaderSection from "@/components/HeaderSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import maths from "../assets/undraw_mathematics_4otb.png";
import chat from "../assets/undraw_Chat_re_re1u.png";
import physics from "../assets/undraw_geniuses_9h9g.png";
import science from "../assets/undraw_Science_re_mnnr.png";
import ethics from "../assets/undraw_Walking_outside_re_56xo.png";
import winner from "../assets/undraw_Winners_re_wr1l.png";

const ourfocus = [
  {
    image: maths,
    disc: "The Ethio-Parents’ School has long placed strong emphasis on science education. Modern laboratories support the school’s science teaching.",
    title: "Mathematics",
  },
  {
    image: chat,
    disc: "The Ethio-Parents’ School has long placed strong emphasis on science education. Modern laboratories support the school’s science teaching.",
    title: "Mathematics",
  },
  {
    image: physics,
    disc: "The Ethio-Parents’ School has long placed strong emphasis on science education. Modern laboratories support the school’s science teaching.",
    title: "Mathematics",
  },
  {
    image: science,
    disc: "The Ethio-Parents’ School has long placed strong emphasis on science education. Modern laboratories support the school’s science teaching.",
    title: "Mathematics",
  },
  {
    image: ethics,
    disc: "The Ethio-Parents’ School has long placed strong emphasis on science education. Modern laboratories support the school’s science teaching.",
    title: "Mathematics",
  },
  {
    image: winner,
    disc: "The Ethio-Parents’ School has long placed strong emphasis on science education. Modern laboratories support the school’s science teaching.",
    title: "Mathematics",
  },
];

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
          <Link to="/about-kms" className="bg-[#60A3D9]  text-[#003B73] py-2 px-4 rounded-md duration-300 ease-in-out hover:bg-[#407daf]">
            Read More
          </Link>
        </div>
      </div>
      <HeaderSection />
      <div>
        <h1 className="text-5xl text-center py-7 pt-20 font-[Dangrek] text-[#003B73]">
          Our focus
        </h1>
        <hr className="border-t-[1px] rounded-lg mx-28 border-[#BFD7ED]" />

        <div className="my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-20">
          {ourfocus.map((data, index) => (
            <div
              key={index}
              className="focus-item shadow-lg shadow-[#BFD7ED] rounded-md p-3 bg-slate-100 hover:bg-slate-200"
            >
              <img
                src={data.image}
                alt=""
                className="focus-image h-56 w-full object-cover hover:opacity-75 duration-150 ease-in-out rounded-lg"
              />
              <h1 className="text-3xl font-[Poppins] font-semibold  pt-3 ">{data.title}</h1>
              <p className="focus-desc pt-3 font-[Poppins] text-sm">
                {data.disc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
