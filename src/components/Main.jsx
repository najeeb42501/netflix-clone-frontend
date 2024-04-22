import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length - 1)];

  const getMovies = () => {
    axios
      .get(requests.requestPopular)
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
    getMovies();
  }, []);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="font-bold md:text-3xl text-xl">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 border-gray-300 text-black py-2 px-5">
              Play
            </button>
            <button className="border py-2 px-5 ml-4">Watch</button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="text-gray-200 w-full md:max-w-[70%] lg:max-w-[50%] lg:max-w-[32%]:">
            {movie?.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
