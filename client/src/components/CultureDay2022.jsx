import React from 'react'

const images = [
  {
    url: "https://www.dropbox.com/scl/fi/sta54l3wxcd6gb15tspkk/photo_1_2024-06-11_22-41-50.jpg?rlkey=4hwgrxhk9qftbdigmhqdq2tit&st=4kziultc&dl=0",
  },
];

const CultureDay2022 = () => {
  return (
    <div>
      <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-3 w-full mx-auto space-y-3 py-12 px-8 lg:px-20">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt=""
            className="w-[20rem] bg-cover rounded-md hover:opacity-85 duration-150 ease-in-out "
          />
        ))}
      </div>
    </div>
  );
}

export default CultureDay2022
