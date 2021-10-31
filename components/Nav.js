import React from "react";
import requests from "../utils/requests";
import { useRouter } from "next/router";

const Nav = () => {
  const [genre, setGenre] = React.useState("Trending");
  const router = useRouter();

  const handleClick = (key, title) => {
    router.push(`/?genre=${key}`);
    setGenre(title);
  };

  console.log(genre);

  return (
    <nav className="relative">
      <div className="flex px-10 py-1 sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20 overflow-none overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => handleClick(key, title)}
            className={`last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125  ${
              genre == title && "scale-125 text-blue-400"
            } `}
          >
            {title}
          </h2>
        ))}
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
      </div>
    </nav>
  );
};

export default Nav;
