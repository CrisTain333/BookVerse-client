/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { RxAvatar } from "react-icons/rx";
import { AiFillTag } from "react-icons/ai";
import { useGetBookQuery } from "../../redux/feature/book/bookApi";
import { IBook } from "../../types";
import { ThreeCircles } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { INewBook } from "../../page/allBook";

const Feature = () => {
  const { data, isLoading, isError } =
    useGetBookQuery(null);

  if (isError) {
    return (
      <div className="flex items-center justify-center h-[40vh]">
        <p className="text-3xl font-semibold text-center text-red-600">
          Sorry, we encountered an error while fetching the
          data. <br /> Please refresh the page and try
          again.
        </p>
      </div>
    );
  }

  return (
    <div>
      <section className="pb-10">
        <div className="mx-auto px-4 md:px-8">
          <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
            <h1 className="text-gray-800 text-3xl font-bold sm:text-4xl">
              Latest Books
            </h1>
            <p className="text-gray-600 text-lg">
              Books that are loved by the community. Updated
              every hour.
            </p>
          </div>
          {isLoading ? (
            <>
              <div className="h-[40vh] flex items-center justify-center">
                <ThreeCircles
                  height="100"
                  width="100"
                  color="#f62343"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="three-circles-rotating"
                  outerCircleColor=""
                  innerCircleColor=""
                  middleCircleColor=""
                />
              </div>
            </>
          ) : (
            <>
              <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-4">
                {data?.data
                  ?.slice(0, 10)
                  ?.map((items: INewBook, key: number) => (
                    <li
                      className="w-full mx-auto group sm:max-w-sm shadow-lg p-5 rounded cursor-pointer"
                      key={key}
                    >
                      <Link
                        to={`/book-details/${items._id}`}
                      >
                        <div className="mt-3 space-y-2">
                          <span className="block text-indigo-600 text-base font-semibold">
                            {items?.publicationDate}
                          </span>
                          <h3 className="text-lg text-gray-800 duration-150 group-hover:text-[#f62343] font-semibold h-14">
                            {items?.title}
                          </h3>
                          <div className="text-gray-600 text-sm duration-150 flex items-center group-hover:text-gray-800">
                            <div className="text-base flex items-center">
                              <RxAvatar />
                              <span className="ml-1 font-semibold">
                                Author :
                              </span>
                            </div>
                            <p className="text-base font-semibold text-gray-500 ml-2">
                              {items?.author}
                            </p>
                          </div>
                          <div className="text-gray-600 text-sm duration-150 flex items-center group-hover:text-gray-800">
                            <div className="text-base flex items-center">
                              <AiFillTag />
                            </div>
                            <p className="text-base font-semibold text-gray-500 ml-2">
                              {items?.genre}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
              </ul>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Feature;
