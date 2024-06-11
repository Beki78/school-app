import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const GalleryArr = [
  {
    year: 2017,
    more: "more",
    image:
      "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2012/06/dsc_0012.jpg?w=100",
    url: "/sportday",
  },
  {
    year: 2017,
    more: "more",
    image:
      "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2012/06/dsc_0012.jpg?w=100",
    url: "/cultureday-2016",
  },
  {
    year: 2017,
    more: "more",
    image:
      "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2012/06/dsc_0012.jpg?w=100",
    url: "/chrismass-2014",
  },
  {
    year: 2017,
    more: "more",
    image:
      "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2012/06/dsc_0012.jpg?w=100",
    url: "/cultureday-2022",
  },
  {
    year: 2017,
    more: "more",
    image:
      "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2012/06/dsc_0012.jpg?w=100",
  },
  {
    year: 2017,
    more: "more",
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2012/06/dsc_0012.jpg?w=100",
  },
];

const Gallery = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-[#f1f7ff] pb-20">
        <h1 className="text-center text-4xl p-12">Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-2 md:gap-x-4 gap-y-6 md:gap-y-10 px-7 md:px-16">
          {GalleryArr.map((data, index) => (
            <div className="p-3 border-2 border-black w-56 md:w-auto mx-auto">
              <img
                src={data.image}
                alt=""
                className="w-24
                 md:w-[25rem] p-2 bg-cover"
              />
              <div className="flex justify-between px-4">
                <h1 className="text-2xl">{data.year}</h1>
                <Link to={data.url}>
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
