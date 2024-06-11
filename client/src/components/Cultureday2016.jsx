import React from "react";

const images = [
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2045.jpg?w=300",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2043.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2041.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2039.jpg?w=300",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2039.jpg?w=300",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2037.jpg?w=300",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2033.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2032.jpg?w=300",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2029.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2030.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2031.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2024.jpg?w=300",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2025.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2026.jpg?w=300",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2028.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2029.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2023.jpg?w=300",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2021.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2019.jpg?w=300",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2020.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2017.jpg?w=300",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2016.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2011.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2012.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2013.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2014.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2010.jpg?w=300",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2007.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2006.jpg?w=300",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2003.jpg?w=300",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_2001.jpg?w=300",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1996.jpg?w=300",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1998.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1992.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1987.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1990.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1985.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1983.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1974.jpg?w=300",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1967.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1972.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1969.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1966.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1963.jpg?w=300",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1962.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1961.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1960.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1959.jpg?w=300",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1957.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1952.jpg?w=300",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1956.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1932.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1940.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1946.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1930.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1928.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1924.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1926.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1925.jpg?w=200",
  },
  {
    url: "https://kidanemeheretschooladdisababa.wordpress.com/wp-content/uploads/2016/01/dsc_1923.jpg?w=200",
  },
];

const Cultureday2016 = () => {
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
};

export default Cultureday2016;
