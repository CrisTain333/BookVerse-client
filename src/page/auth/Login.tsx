/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/icon.png";
import {
  useGetUserQuery,
  useLoginUserMutation,
} from "../../redux/feature/user/userApi";
import SmallLoader from "../../components/SmallLoader/SmallLoader";
// import { toast } from "react-hot-toast/headless";
import { toast } from "react-hot-toast";
import { useAppDispatch } from "../../redux/hooks/hook";
import {
  setUser,
  setToken,
  getUser,
} from "../../redux/feature/user/userSlice";
const Login = () => {
  const dispatch = useAppDispatch();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  // const getUserQuery = useGetUserQuery(null);
  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const data = {
      email,
      password,
    };
    const response: any = await loginUser(data);
    const { data: responseData, error } = response;

    if (responseData?.statusCode === 200) {
      toast.success(responseData?.message);
      await dispatch(
        getUser(responseData?.data?.accessToken)
      );
      dispatch(setToken(responseData?.data?.accessToken));
    } else {
      toast.error(error?.data?.message);
    }
  };

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
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                name="email"
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
                name="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border  shadow-sm rounded-lg"
              />
            </div>
            <button
              className="w-full px-4 py-2 text-white font-medium  rounded-md duration-150 bg-[#f62343]"
              type="submit"
            >
              {isLoading ? <SmallLoader /> : <>Login </>}
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
