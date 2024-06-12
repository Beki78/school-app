import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const GalleryArr = [
  {
    year: "Sport Day-2013",
    more: "more",
    image:
      "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2013/06/kms-sports-day-2013_004.jpg?w=768",
    url: "/sportday",
  },
  {
    year: "Culture Day-2016",
    more: "more",
    image:
      "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2018.jpg?w=300",
    url: "/cultureday-2016",
  },
  {
    year: "Chris-mass-2014",
    more: "more",
    image:
      "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0581.jpg?w=1024",
    url: "/chrismass-2014",
  },
  
  // {
  //   year: 2017,
  //   more: "more",
  //   image:
  //     "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2012/06/dsc_0012.jpg?w=100",
  // },
  // {
  //   year: 2017,
  //   more: "more",
  //   url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2012/06/dsc_0012.jpg?w=100",
  // },
];

const Gallery = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-[#f1f7ff] pb-20">
        <h1 className="text-5xl text-center py-7 pt-20 font-[Dangrek] text-[#003B73]">
          Gallery
        </h1>
        <hr className="border-t-[1px] rounded-lg mx-28 border-[#BFD7ED]" />

        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-2 md:gap-x-4 gap-y-6 md:gap-y-10 px-7 md:px-16 my-12">
          {GalleryArr.map((data, index) => (
            <div className="shadow-lg shadow-[#BFD7ED] rounded-md p-1 bg-slate-200 hover:bg-slate-200 md:w-auto mx-auto">
              <div className="overflow-hidden inline-block">
                <img
                  src={data.image}
                  alt=""
                  className="w-24
                 md:w-[25rem] h-72 object-cover p-1 bg-cover rounded-md hover:scale-105 duration-300 transition-transform"
                />
              </div>
              <div className="flex justify-between px-4 py-3">
                <h1 className="text-xl font-[Poppins]">{data.year}</h1>
                <Link
                  className="font-[Poppins] underline text-[#003B73] "
                  to={data.url}
                >
                  <p>{data.more}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
