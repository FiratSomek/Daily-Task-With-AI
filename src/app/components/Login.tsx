import React from "react";

const Login = () => {
  return (
    <div className="border-2 w-1/3 p-5 flex flex-col">
      <h1 className="font-bold text-center">Login</h1>
      <div className="flex flex-col">
        <label htmlFor="" className="flex flex-col">
          username
          <input type="text" id="username" placeholder="username" />
        </label>
        <label htmlFor="" className="flex flex-col">
          password
          <input type="text" id="password" placeholder="password" />
        </label>
      </div>
      <button>LOGIN</button>
    </div>
  );
};

export default Login;
