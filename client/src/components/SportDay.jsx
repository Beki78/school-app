import React from 'react'

const images = [
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2012/06/dsc_0201.jpg?w=100",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2012/06/dsc_0168.jpg?w=150",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2012/06/dsc_0173.jpg?w=100",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2012/06/dsc_0230.jpg?w=150",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2012/06/dsc_0240.jpg?w=150",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/current-events-2004-ec-2011-2012-gc/sports-day-2012/",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2012/06/dsc_0012.jpg?w=100",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2012/06/dsc_0020.jpg?w=100",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2012/06/dsc_0229.jpg?w=150",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2012/06/dsc_0028.jpg?w=150",
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
