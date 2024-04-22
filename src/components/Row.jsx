import React, { useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import axios from "axios";
import Movie from "./Movie";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  const getMovies = (url) => {
    axios
      .get(url)
      .then((response) => {
        // Handle the API response data here
        //console.log("Response data:", response.data);
        setMovies(response.data.results);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getMovies(fetchURL);
  }, [fetchURL]);

  //console.log(movies);

  const slideLeft = () => {
    const slider = document.getElementById("slider" + rowID);
    console.log(slider);
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider" + rowID);
    console.log(slider);
    slider.scrollLeft += 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <FaChevronLeft
          size={36}
          onClick={slideLeft}
          className="absolute left-0 bg-white z-10 rounded-full opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block"
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full relative overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((item, id) => {
            return <Movie key={id} movie={item} />;
          })}
        </div>
        <FaChevronRight
          size={36}
          onClick={slideRight}
          className="absolute right-0 bg-white z-10 rounded-full opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block"
        />
      </div>
    </>
  );
};

export default Row;
