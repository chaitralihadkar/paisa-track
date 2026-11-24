import { useState } from "react";
import EditProfile from "../components/EditProfile";

const MyProfile = () => {

  const [isEditProfileClicked, setIsEditProfileClicked] = useState<boolean>(false)
  
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      {/* main div containing everything : inner divs */}
      <div className="relative flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 items-center text-center justify-center border-2 border-blue-900 rounded-2xl bg-blue-50 m-2 py-5 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
        <h1 className="text-xl font-bold text-blue-950 px-2 md:text-3xl md:px-4">
          My Profile
        </h1>

        <div>
          <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 px-2">
            <div className="w-full flex justify-between gap-2">
              <label
                className="font-semibold text-blue-950 text-left"
                htmlFor="username"
              >
                Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your name"
                onChange="{handleUserNameChange}"
                value="CSH"
                className="h-fit text-center border-2 bg-blue-100 rounded-sm md:text-xl"
              />
            </div>

            <div className="w-full flex justify-between gap-2">
              <label
                className="font-semibold text-blue-950 text-left"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                onChange="{handleUserEmailChange}"
                value="csh@gmail.com"
                className="h-fit text-center border-2 bg-blue-100 rounded-sm md:text-xl"
              />
            </div>

            <div className="w-full flex justify-between gap-2">
              <label
                className="font-semibold text-blue-950 text-left"
                htmlFor="password"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                placeholder="Enter your age"
                onChange="{handleUserAgeChange}"
                value="22"
                className="h-fit text-center border-2 bg-blue-100 rounded-sm md:text-xl"
              />
            </div>

            <div className="w-full flex justify-between gap-2">
              <label
                className="font-semibold text-blue-950 text-left"
                htmlFor="confirmPassword"
              >
                Phone number
              </label>
              <input type="tel" name="phoneNo" id="phoneNo" placeholder="Enter your phone number" value="1234567890" className="h-fit text-center border-2 bg-blue-100 rounded-sm md:text-xl"/>
            </div>
          </div>
        </div>

        <div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
          <button onClick={()=> {setIsEditProfileClicked(!isEditProfileClicked)}} className="rounded-xl px-2 bg-blue-100 border-2 border-blue-600 text-blue-600">
            Edit
          </button>
          <button className="rounded-xl px-2 bg-red-100 border-2 border-red-600 text-red-600">
            Log out
          </button>
        </div>

        {isEditProfileClicked && (
        <div className="fixed bg-black/50 top-0 bottom-0 left-0 right-0">
          <EditProfile isEditProfileOpen={isEditProfileClicked} setIsEditProfileOpen={setIsEditProfileClicked}/> 
        </div>
      )}
      </div>
    </div>
  );
};

export default MyProfile;
