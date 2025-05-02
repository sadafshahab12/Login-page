import React from "react";

const LoginPage = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 items-center gap-10">
        <div className="relative flex items-center justify-center">
          <img src="/bg.png" alt="background" className="" />
          <img
            src="/image.png"
            alt="image"
            className="absolute left-20 w-[403px] h-[422px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-15">
          <img
            src="/logo.jpeg"
            alt="logo"
            className="w-[108px] h-[98px]"
          />
          <form action="" className="space-y-4 w-full max-w-[300px] ">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full rounded-md py-2 border border-gray-300 px-4 block outline-none"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full rounded-md py-2 border border-gray-300 px-4 block outline-none"
            />
            <button
              type="submit"
              className="uppercase bg-darkOrange text-white w-full rounded-md py-2 block cursor-pointer "
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
