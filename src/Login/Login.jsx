import React from "react";
import NavBar from "../NavBar/NavBar";

const Login = () => {
  return (
    <><NavBar /><div class="min-h-screen  flex justify-center items-center p-4">
      <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h1 class="text-2xl font-bold text-blue-800 mb-4 text-center">
          Sign in to your account
        </h1>
        <p class="text-gray-600 text-center mb-6"></p>
        <form class="space-y-4">
          <div>
            <label
              htmlFor="name"
              class="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              class="w-full border-gray-300 border rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              required />
          </div>

          <div>
            <label
              htmlFor="email"
              class="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              class="w-full border-gray-300 border rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              required />
          </div>


          <div>
            <label
              htmlFor="email"
              class="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              class="w-full border-gray-300 border rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              required />
          </div>
          <div>
            <button
              type="submit"
              class="w-full bg-blue-900 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Log in
            </button>
          </div>

          <p class="flex w-full justify-center  font-semibold text-indigo-600 hover:text-indigo-500">
            {" "}
            OR
          </p>
          <div>
            <a
              href="newUser"
              class="flex w-full justify-center font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Register New User
            </a>
          </div>
        </form>
      </div>
    </div>
    
    
    </>
  );
};

export default Login;
