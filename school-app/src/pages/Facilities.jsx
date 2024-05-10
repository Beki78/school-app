import React from 'react'
import NavBar from "../components/NavBar";
import kmssportday from "../assets/kmssportday.jpg"
import Footer from '../components/Footer';

const facilitiesArr = [
  {
    facilities: "Library",
    image: kmssportday,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, facere!",
  },
  {
    facilities: "Library",
    image: kmssportday,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, facere!",
  },
  {
    facilities: "Library",
    image: kmssportday,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, facere!",
  },
  {
    facilities: "IT Lab",
    image: kmssportday,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, facere!",
  },
];

const Facilities = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-[#f1f7ff] pb-20">
        <h1 className="text-center text-4xl p-12">Facilities</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {facilitiesArr.map((data, idex) => (
            <div className="flex justify-center items-center gap-4 md:12 border-black border-2 w-[500px] mx-auto">
              <div className="text-center">
                <h1 className="">{data.facilities}</h1>
                <img src={data.image} alt="" className="w-56 md-96 p-2" />
              </div>
              <div className="">
                <p className="font-[poppins] text-xs md:text-sm p-3 sm:p-0">
                  {data.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Facilities
