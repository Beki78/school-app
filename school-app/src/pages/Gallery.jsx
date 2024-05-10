import React from "react";
import NavBar from "../components/NavBar";
import kmssportday from "../assets/kmssportday.jpg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const GalleryArr = [
  {
    image: kmssportday,
    year: 2017,
    more: "more",
    url: "/gallery/2017",
  },
  {
    image: kmssportday,
    year: 2017,
    more: "more",
    url: "/gallery/2017",
  },
  {
    image: kmssportday,
    year: 2017,
    more: "more",
    url: "/gallery/2017",
  },
  {
    image: kmssportday,
    year: 2017,
    more: "more",
    url: "/gallery/2017",
  },
  {
    image: kmssportday,
    year: 2017,
    more: "more",
    url: "/gallery/2017",
  },
  {
    image: kmssportday,
    year: 2017,
    more: "more",
    url: "/gallery/2020",
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
                className="w-56 md:w-[25rem] p-2 bg-cover"
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
