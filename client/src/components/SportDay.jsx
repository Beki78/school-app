import React from 'react'

const images = [
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2013/06/kms-sports-day-2013_001.jpg?w=768",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2013/06/kms-sports-day-2013_002.jpg?w=1000",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2013/06/kms-sports-day-2013_003.jpg?w=1000",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2013/06/kms-sports-day-2013_004.jpg?w=680",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2013/06/kms-sports-day-2013_005.jpg?w=680",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2013/06/kms-sports-day-2013_006.jpg?w=680",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2013/06/kms-sports-day-2013_007.jpg?w=680",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2013/06/kms-sports-day-2013_008.jpg?w=680",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2013/06/kms-sports-day-2013_010.jpg?w=768",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2013/06/kms-sports-day-2013_011.jpg?w=768",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2013/06/kms-sports-day-2013_012.jpg?w=680",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2013/06/kms-sports-day-2013_013.jpg?w=768",
  },
  
];

const SportDay = () => {
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

export default SportDay
