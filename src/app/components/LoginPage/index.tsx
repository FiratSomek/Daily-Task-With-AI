import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="border-3 border-gray-300 rounded-lg w-1/3 p-5 flex flex-col ">
      <h1 className="font-bold text-center text-2xl">Login</h1>
      <div className="flex flex-col">
        <label htmlFor="" className="flex flex-col mt-5 font-serif">
          username
          <input
            className="border-b-1 border-gray-200 p-2"
            type="text"
            id="username"
            placeholder="Type your username"
          />
        </label>
        <label htmlFor="" className="flex flex-col mt-5 font-serif">
          password
          <input
            className="border-b-1 border-gray-200 p-2"
            type="text"
            id="password"
            placeholder="Type your password"
          />
        </label>
      </div>
      <Link href="/pages/dashboard">
        {" "}
        <button className=" rounded-3xl p-1 font-bold text-white bg-blue-500 cursor-pointer mt-5">
          LOGIN
        </button>
      </Link>
      <Link href="/pages/ai">
        <button>ai page</button>
      </Link>
    </div>
  );
};

export default Login;
