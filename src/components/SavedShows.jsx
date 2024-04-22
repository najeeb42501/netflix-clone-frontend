import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import Movie from "./Movie";

const SavedShows = () => {
  const { user } = UserAuth();
  const [movies, setMovies] = useState([]);
  console.log(user?.email);

  useEffect(() => {
    const getData = async () => {
      await onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
        setMovies(doc.data()?.savedShows);
      });
    };
    getData();
  }, [user.email]);

  console.log(movies);

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    console.log(slider);
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    console.log(slider);
    slider.scrollLeft += 500;
  };
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
      <div className="relative flex items-center group">
        <FaChevronLeft
          size={36}
          onClick={slideLeft}
          className="absolute left-0 bg-white z-10 rounded-full opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block"
        />
        <div
          id={"slider"}
          className="w-full h-full relative overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((item, id) => {
            return (
              <div
                key={id}
                className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[270px] relative inline-block cursor-pointer p-2"
              >
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                  alt={item?.title}
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                  <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                    {item?.title}
                  </p>
                </div>
              </div>
            );
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

export default SavedShows;
