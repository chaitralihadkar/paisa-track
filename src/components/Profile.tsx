import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import EditProfile from "./EditProfile";

const Profile = () => {

    const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      {/* main div containing everything : inner divs */}
      <div className=" flex flex-col gap-1.5 items-center text-center justify-center border-2 border-blue-900 rounded-2xl bg-blue-50 m-2 p-3 text-sm">
        <div className="w-full flex gap-3 justify-center items-center ">
          <span className="border-2 border-blue-950 rounded-full p-1">C</span>
          <span>CSH</span>
        </div>

        <div>csh@gmail.com</div>

        <button className="rounded-2xl cursor-pointer bg-blue-900 text-white px-2 mt-2 xl:text-2xl">My Profile</button>

        <button className="rounded-xl px-2 bg-blue-900 text-white my-2">
          Log out
        </button>
      </div>
    </div>
  );
};

export default Profile;
