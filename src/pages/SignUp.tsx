import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// const userCredentials = [];  //bad practice, tip:use useState hook bcoz you are using react

const SignUp = () => {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [confirmUserPassword, setConfirmUserPassword] = useState<string>("");
  const [userCredentials, setUserCredentials] = useState<any>([]);

  const handleUserNameChange = (event: any) => {
    setUserName(event.target.value);
  };

  const handleUserEmailChange = (event: any) => {
    setUserEmail(event.target.value);
  };

  const handleUserPasswordChange = (event: any) => {
    setUserPassword(event.target.value);
  };

  const handleConfirmUserPasswordChange = (event: any) => {
    setConfirmUserPassword(event.target.value);
  };

  const handleSubmit = () => {
    userCredentials.push({
      id: uuidv4(),
      userName: userName,
      userEmail: userEmail,
      userPassword: userPassword,
      confirmUserPassword: confirmUserPassword,
    });

    // console.log(userCredentials);
    localStorage.setItem("userCredentials", JSON.stringify(userCredentials));

    const getCredentials = localStorage.getItem("userCredentials");
    console.log(JSON.parse(getCredentials));
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      {/* main div containing everything : inner divs */}
      <div className="flex flex-col gap-2 md:gap-3 items-center text-center justify-center border-2 border-blue-900 rounded-2xl bg-blue-50 m-2 py-5">
        <h1 className="text-xl font-bold text-blue-950 px-2 md:text-3xl md:px-4">
          Create account to track your <span className="uppercase">paisa</span> easily
        </h1>
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col">
            <label className="text-lg md:text-xl" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={userName}
              placeholder="Enter your name"
              onChange={handleUserNameChange}
              className="text-center border-2 bg-blue-100 rounded-sm px-2 mx-2 md:text-xl"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg md:text-xl" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userEmail}
              placeholder="Enter your email address"
              onChange={handleUserEmailChange}
              className="text-center border-2 bg-blue-100 rounded-sm px-2 mx-2 md:text-xl"
            />
          </div>

          <div className="flex flex-col">
            {/* add toggle function to hide and unhide password */}

            <label className="text-lg md:text-xl" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={userPassword}
              placeholder="Enter your password"
              onChange={handleUserPasswordChange}
              className="text-center border-2 bg-blue-100 rounded-sm px-2 mx-2 md:text-xl"
            />
          </div>

          <div className="flex flex-col">
            {/* add toggle function to hide and unhide password */}

            <label className="text-lg md:text-xl" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmUserPassword}
              placeholder="Enter your password again"
              onChange={handleConfirmUserPasswordChange}
              className="text-center border-2 bg-blue-100 rounded-sm px-2 mx-2 md:text-xl"
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="rounded-xl px-2 bg-blue-900 text-white text-base my-2 md:text-xl"
        >
          Sign up
        </button>

        <div className="text-base md:text-lg">
          Already have an account?{" "}
          <Link to={"/login"} className="underline text-blue-700">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
