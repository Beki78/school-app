import React from 'react'
import NavBar from '../components/NavBar'
import kmsscholarships from "../assets/kmsscholarships.jpg"
import Footer from '../components/Footer';


const AchievementImages = [
  {
    image: kmsscholarships,
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum libero dolores necessitatibus commodi. Soluta quam eveniet odiominima perspiciatis consequuntur,",
  },
  {
    image: kmsscholarships,
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum libero dolores necessitatibus commodi. Soluta quam eveniet odiominima perspiciatis consequuntur,",
  },
  {
    image: kmsscholarships,
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum libero dolores necessitatibus commodi. Soluta quam eveniet odiominima perspiciatis consequuntur,",
  },
  {
    image: kmsscholarships,
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum libero dolores necessitatibus commodi. Soluta quam eveniet odiominima perspiciatis consequuntur,",
  },
];

const Achievements = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-[#f1f7ff] pb-20">
        <h1 className="text-center text-4xl p-12">Achievements</h1>
        {AchievementImages.map((data, index) => (
          <div className="flex items-center mb-5 md:mb-9 gap-3 md:gap-5 mx-14 md:mx-32 mx-auto border-[2px] border-slate-400 rounded-md shadow-md shadow-neutral-300">
            <img src={data.image} alt="" className="w-40 md:w-96 p-2 rounded-md " />
            <p className="font-[poppins] text-xs md:text-sm p-3 sm:p-0">
              {data.details}
            </p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Achievements
