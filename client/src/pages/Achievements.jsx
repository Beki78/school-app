import React from 'react'
import NavBar from "../components/NavBar";
import Footer from "@/components/Footer";

const news = [
  {
    image:
      "https://cdn-attachments.timesofmalta.com/2d3af6dbcd93a10459dc8190ffbc54463f16ca1b-1689462707-056d89fd-1920x1280.jpg",
    title: "Congradulations!",
    date: "12/10/2023",
    disc: "Here are our Outstanding Gerji and Gulele Campus Grade 8 students‘. Congratulation all of the EPS community.",
  },
  {
    image:
      "https://cdn-attachments.timesofmalta.com/2d3af6dbcd93a10459dc8190ffbc54463f16ca1b-1689462707-056d89fd-1920x1280.jpg",
    title: "Congradulations!",
    date: "12/10/2023",
    disc: "Here are our Outstanding Gerji and Gulele Campus Grade 8 students‘. Congratulation all of the EPS community.",
  },
];


const Achievements = () => {
  return (
    <div>
      <NavBar />

      <h1 className="text-2xl sm:text-3xl lg:text-5xl text-center py-7 pt-20 font-[Dangrek] text-[#003B73]">
        Achievements
      </h1>
      <hr className="border-t-[1px] rounded-lg mx-28 border-[#BFD7ED]" />

      <div className="mx-auto px-5 lg:px-40 my-14 ">
        {news.map((data, index) => (
          <div className="shadow-lg shadow-[#BFD7ED] rounded-md p-5 bg-slate-100 hover:bg-slate-200 my-14">
            <img src={data.image} className="w-full h-full rounded-md" alt="" />
            <h1 className="text-xl md:text-3xl font-[Poppins] font-semibold  pt-3 ">
              {data.title}
            </h1>
            <p className="focus-desc pt-3 font-[Poppins] text-sm">
              {data.disc}
            </p>
            <p className="focus-desc font-[Poppins] font-light italic text-sm">
              {data.date}
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Achievements
