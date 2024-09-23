interface RegisterProps {
  handleStateChange: (field: string, value: string) => void;
  handleRegister: () => void;
}

function Register({ handleStateChange, handleRegister }: RegisterProps) {
  return (
    <div className="flex flex-col justify-center items-center mt-[150px]">
      <form className="bg-white border shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[30rem] md:w-[30rem]">
        <h1 className="text-2xl text-center font-bold mb-[2rem]">
          Register New Account
        </h1>
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
            onChange={(e) => handleStateChange("email", e.target.value)}
          />
        </div>
        <div className="pl-2 pr-2 mb-4">
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
            placeholder="Enter your password"
            onChange={(e) => handleStateChange("password", e.target.value)}
          />
        </div>
        <div className="pl-2 pr-2 mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="first-name"
          >
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="first-name"
            type="text"
            placeholder="Enter your first name"
            onChange={(e) => handleStateChange("firstName", e.target.value)}
          />
        </div>
        <div className="pl-2 pr-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="last-name"
          >
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="last-name"
            type="text"
            placeholder="Enter your last name"
            onChange={(e) => handleStateChange("lastName", e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between pl-2 pr-2 mt-[2.5rem]">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full pl-2 pr-2"
            type="button"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
