/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { bookGenre } from "../constant/genre";

import { FcFilledFilter } from "react-icons/fc";
import { useGetBookQuery } from "../redux/feature/book/bookApi";
import { IBook } from "../types";
import { RxAvatar } from "react-icons/rx";
import { AiFillTag } from "react-icons/ai";

const AllBook = () => {
  const { data, isLoading, isError } =
    useGetBookQuery(null);
  return (
    <div className="w-[80%] mx-auto">
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <div className="sidebar w-[90%] sticky top-20">
            <div className="widget user_widget_search rounded-md shadow-md p-2">
              <h2 className="text-center flex items-center justify-center">
                <span className="mr-1">
                  <FcFilledFilter size={20} />
                </span>
                Filters
              </h2>
              <form
                id="user_wiget_search_form"
                className="user_wiget_search_form"
                method="GET"
              >
                <div className="form-group mb-1">
                  <label
                    htmlFor="user_name"
                    className="mt-2 text-base font-semibold"
                  >
                    Books
                  </label>
                  <br />
                  <input
                    type="text"
                    className="w-[80%] border rounded-sm p-1 text-sm"
                    id="user_name"
                    // value={searchValue as string}
                    // onChange={(e) =>
                    //   setSearchValue(e.target.value)
                    // }
                    placeholder="e.g Search Books. . . ."
                  />
                </div>
                <div className="form-group mt-3">
                  <label
                    htmlFor="user_gender"
                    className="text-base font-semibold"
                  >
                    Category
                  </label>
                  {bookGenre.map((category) => (
                    <div key={category}>
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description ml-1 my-1">
                          {category}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-9">
          <ul className="grid gap-x-8 gap-y-10  sm:grid-cols-2 lg:grid-cols-3">
            {data?.data?.map(
              (items: IBook, key: number) => (
                <li
                  className="w-full mx-auto group sm:max-w-sm shadow-lg p-5 rounded cursor-pointer"
                  key={key}
                >
                  <a>
                    <div className="mt-3 space-y-2">
                      <span className="block text-indigo-600 text-base font-semibold">
                        {items.publicationDate}
                      </span>
                      <h3 className="text-lg text-gray-800 duration-150 group-hover:text-[#f62343] font-semibold h-10">
                        {items.title?.slice(0, 30)} ...
                      </h3>
                      <div className="text-gray-600 text-sm duration-150 flex items-center group-hover:text-gray-800">
                        <div className="text-base flex items-center">
                          <RxAvatar />
                          <span className="ml-1 font-semibold">
                            Author :
                          </span>
                        </div>
                        <p className="text-base font-semibold text-gray-500 ml-2">
                          {items.author}
                        </p>
                      </div>
                      <div className="text-gray-600 text-sm duration-150 flex items-center group-hover:text-gray-800">
                        <div className="text-base flex items-center">
                          <AiFillTag />
                        </div>
                        <p className="text-base font-semibold text-gray-500 ml-2">
                          {items.genre}
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllBook;
