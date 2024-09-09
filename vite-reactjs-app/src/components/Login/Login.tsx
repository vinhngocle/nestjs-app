import React from "react";

function Login() {
  return (
    // <div className="w-full max-w-xs">
    <div className="flex flex-col justify-center items-center mt-[150px]">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[32rem] border">
        <h1 className="text-2xl text-center text-extrabold">Login</h1>
        <div className="mb-4">
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
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div>
          <div className="p-2 text-center">Or Sign in with</div>
          <div className="flex justify-center ">
            <div className="m-2">Google</div>
            <div className="m-2">Facebook</div>
            <div className="m-2">Twiter</div>
          </div>
        </div>
      </form>
      {/* <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p> */}
    </div>
  );
}

export default Login;
