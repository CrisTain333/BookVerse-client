import { useState } from "react";
import Logo from "../../assets/icon.png";
import { Link } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/hooks/hook";
import { logout } from "../../redux/feature/user/userSlice";

const Header = () => {
  const [state, setState] = useState(false);
  const [selected, setSelected] = useState("");
  const { user } = useAppSelector((state) => state.auth);
  // Replace javascript:void(0) paths with your paths
  const dispatch = useAppDispatch();
  const navigation = [
    { title: "All Books", path: "javascript:void(0)" },
    { title: "Add New Book", path: "/add-book" },
  ];

  return (
    <nav className="bg-white border-b w-full md:static md:text-sm md:border-none">
      <div className="items-center px-4 mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link
            to="/"
            className="flex items-center"
          >
            <img
              src={Logo}
              className="h-20"
              alt="brand_Logo"
            />
            <span className="text-3xl font-semibold -m-5">
              ookVerse
            </span>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className={` ${
                    selected === item.title
                      ? "text-[#f62343]"
                      : "text-gray-700"
                  }`}
                  onClick={() => setSelected(item.title)}
                >
                  <Link
                    to={item.path}
                    className="block text-xl"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
            <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
              {user !== null ? (
                <>
                  <button
                    className="block py-3 px-4 font-medium text-lg text-center text-white bg-[#f62343] active:shadow-none rounded-md shadow md:inline"
                    onClick={() => dispatch(logout())}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="block py-3 text-center text-gray-700 hover:text-[#f62343] border rounded-lg md:border-none text-lg"
                    >
                      Log in
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sign-up"
                      className="block py-3 px-4 font-medium text-lg text-center text-white bg-[#f62343] active:shadow-none rounded-md shadow md:inline"
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
