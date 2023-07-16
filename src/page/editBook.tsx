/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../redux/feature/book/bookApi";
import { bookGenre } from "../constant/genre";
import SmallLoader from "../components/SmallLoader/SmallLoader";
import { useEffect, useState } from "react";
import { IBook } from "../types";
import { ThreeCircles } from "react-loader-spinner";

const EditBook = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleBookQuery(
    id as string
  );
  const [formData, setFormData] = useState<IBook>({
    title: data?.data?.title,
    author: data?.data?.author,
    genre: data?.data?.genre,
    publicationDate: data?.data?.publicationDate,
    addedBy: data?.data?.addedBy,
    reviews: data?.data?.reviews,
  });
  useEffect(() => {
    setFormData({
      title: data?.data?.title,
      author: data?.data?.author,
      genre: data?.data?.genre,
      publicationDate: data?.data?.publicationDate,
      addedBy: data?.data?.addedBy,
      reviews: data?.data?.reviews,
    });
  }, [data]);

  if (isLoading) {
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
    </div>;
  }

  return (
    <div>
      <div className="text-center text-2xl">
        <h1 className="font-mono font-semibold">
          {" "}
          Update Book
        </h1>
      </div>
      <div className="w-[60%] mx-auto rounded-md shadow-md h-auto  lg:h-[50vh] p-5">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-5">
            <label htmlFor="full_name">Title</label>
            <input
              type="text"
              name="title"
              required
              onChange={(e) =>
                setFormData((prev: any) => {
                  return {
                    ...prev,
                    title: e.target.value,
                  };
                })
              }
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              value={formData?.title}
            />
          </div>

          <div className="md:col-span-5">
            <label htmlFor="email">Author Name</label>
            <input
              type="text"
              name="author"
              required
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              onChange={(e) =>
                setFormData((prev: any) => {
                  return {
                    ...prev,
                    author: e.target.value,
                  };
                })
              }
              placeholder=""
              value={formData?.author}
            />
          </div>

          <div className="md:col-span-3">
            <label htmlFor="year">Publication Year</label>

            <div
              className="relative max-w-sm"
              id="year"
            >
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                id="year"
                type="date"
                required
                value={formData?.publicationDate}
                onChange={(e) =>
                  setFormData((prev: any) => {
                    return {
                      ...prev,
                      publicationDate: e.target.value,
                    };
                  })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                placeholder="Select date"
              />
            </div>
            {/* <input  name="" id="" /> */}
          </div>

          <div className="md:col-span-2">
            <label htmlFor="city">Genre</label>
            <br />
            <select
              name="genre"
              value={formData?.genre}
              required
              onChange={(e) =>
                setFormData((prev: any) => {
                  return {
                    ...prev,
                    genre: e.target.value,
                  };
                })
              }
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            >
              {bookGenre?.map((e, i) => (
                <>
                  {/* <option value="">Select Genre</option> */}
                  <option
                    value={e}
                    key={i + 1}
                  >
                    {e}
                  </option>
                </>
              ))}
            </select>
          </div>

          <div className="md:col-span-5 my-5 text-right">
            <div className="flex justify-center items-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                // onClick={handleAddBook}
              >
                {isLoading ? <SmallLoader /> : <>Update</>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
