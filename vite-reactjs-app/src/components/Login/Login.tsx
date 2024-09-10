import React from "react";

function Login() {
  return (
    // <div className="w-full max-w-xs">
    <div className="flex flex-col justify-center items-center mt-[150px]">
      <form className="bg-white border shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[30rem] md:w-[30rem]">
        <h1 className="text-2xl text-center font-bold mb-[2rem]">Login</h1>
        <div className="mb-4 pl-2 pr-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Enter your email"
          />
        </div>
        <div className="pl-2 pr-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your assword"
          />
        </div>
        <a
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 text-right mt-[1.5rem] mb-[1.5rem] pl-2"
          href="#"
        >
          Forgot Password?
        </a>
        <div className="flex items-center justify-between pl-2 pr-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full pl-2 pr-2"
            type="button"
          >
            Log In
          </button>
          {/* <div>
            Do you have account?
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Sign up
            </a>
          </div> */}
        </div>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-100 text-gray-800">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div>
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <img
                  className="h-5 w-5"
                  src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                  alt=""
                />
                Facebook
              </a>
            </div>
            <div>
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <img
                  className="h-5 w-5"
                  src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                  alt=""
                />
                Twitter
              </a>
            </div>
            <div>
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <img
                  className="h-6 w-6"
                  src="https://www.svgrepo.com/show/506498/google.svg"
                  alt=""
                />
                Google
              </a>
            </div>
          </div>
        </div>
        <div className="m-auto mt-6 w-fit md:mt-8">
          <span className="m-auto dark:text-gray-400">
            Don't have an account?
            <a
              className="font-semibold text-indigo-600 dark:text-indigo-100"
              href="/register"
            >
              Create Account
            </a>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
