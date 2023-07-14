import { Link } from "react-router-dom";
import logo from "../../assets/icon.png";

const Login = () => {
  return (
    <div>
      <main className="w-full h-screen flex flex-col items-center justify-center px-4 ">
        <div className="max-w-md p-2 w-full text-gray-600 ">
          <div className="text-center">
            <div className="flex items-center justify-center">
              <img
                src={logo}
                width={90}
                // className="mx-auto"
              />
              <span className="text-3xl text-black font-semibold -ml-5">
                ookVerse
              </span>
            </div>
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Log in to your account
              </h3>
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 space-y-5"
          >
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border  shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border  shadow-sm rounded-lg"
              />
            </div>
            <button className="w-full px-4 py-2 text-white font-medium  rounded-md duration-150 bg-[#f62343]">
              Sign in
            </button>
          </form>
          <div className="mt-5 text-center">
            <p className="">
              Don't have an account?{" "}
              <Link
                to="/sign-up"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
