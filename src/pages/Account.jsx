import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/5fa39822-bfc2-4c7c-be4d-7cc77cb9ff4e/PK-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="fixed top-0 left-0 bg-black/60 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl text-white md:text-5xl font-bold">
            My Shows
          </h1>
        </div>
        <SavedShows />
      </div>
    </>
  );
};

export default Account;
