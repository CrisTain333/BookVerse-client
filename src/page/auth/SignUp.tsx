/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import SmallLoader from "../../components/SmallLoader/SmallLoader";
import { useRegisterUserMutation } from "../../redux/feature/user/userApi";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const [registerUser, { isLoading }] =
    useRegisterUserMutation();

  const navigate = useNavigate();

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const data = {
      name,
      email,
      password,
    };
    const result: any = await registerUser(data);
    const { data: responseData, error } = result;
    if (responseData?.statusCode === 200) {
      toast.success(responseData?.message);
      navigate("/login");
    }
    if (error?.status === 400) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <div>
      <main className="w-full h-screen flex flex-col items-center justify-center sm:px-4">
        <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
          <div className="text-center">
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Create an account
              </h3>
            </div>
          </div>
          <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <label className="font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
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
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              {/* {error && (
                <p className="text-red-600 text-center">
                  {error?.data?.message}
                </p>
              )} */}
              <button
                className={`w-full px-4 py-2 text-white font-medium  rounded-md duration-150 ${
                  isLoading
                    ? "bg-[#f62343df] cursor-not-allowed"
                    : "bg-[#f62343] cursor-pointer"
                }`}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <SmallLoader />
                ) : (
                  <>Create account </>
                )}
              </button>
            </form>
            <div className="mt-5">
              <p className="text-center">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
