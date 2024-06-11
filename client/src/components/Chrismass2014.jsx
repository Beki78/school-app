import React from 'react'

const images = [
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0562.jpg?w=1000",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0563.jpg?w=1000",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0564.jpg?w=1024",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0565.jpg?w=768",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0566.jpg?w=768",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0567.jpg?w=768",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0568.jpg?w=680",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0569.jpg?w=768",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0570.jpg?w=768",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0571.jpg?w=680",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0572.jpg?w=680",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0573.jpg?w=680",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0574.jpg?w=680",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0576.jpg?w=768",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0577.jpg?w=680",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0578.jpg?w=768",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0579.jpg?w=680",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0581.jpg?w=768",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0580.jpg?w=768",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0584.jpg?w=768",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0585.jpg?w=768",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0587.jpg?w=768",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0589.jpg?w=768",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0591.jpg?w=680",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0593.jpg?w=680",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0601.jpg?w=680",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0611.jpg?w=768",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0614.jpg?w=768",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0616.jpg?w=768",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2014/01/dsc_0620.jpg?w=680",
  },
];

const Chrismass2014 = () => {
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

export default Chrismass2014
