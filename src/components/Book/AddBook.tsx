/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useEffect, useState } from "react";
import { bookGenre } from "../../constant/genre";
import { useAppSelector } from "../../redux/hooks/hook";
import { useAddBooksMutation } from "../../redux/feature/book/bookApi";
import { IBook } from "../../types";
import SmallLoader from "../SmallLoader/SmallLoader";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddBooks = () => {
  const { user, token } = useAppSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const [addBook, { isLoading }] = useAddBooksMutation();
  const [formData, setFormData] = useState<IBook>({
    title: "",
    author: "",
    genre: "Fiction",
    publicationDate: "",
    addedBy: user?._id,
    reviews: [],
  });
  useEffect(() => {
    setFormData({
      title: "",
      author: "",
      genre: "Fiction",
      publicationDate: "",
      addedBy: user?._id,
      reviews: [],
    });
  }, [user]);

  const handleAddBook = async () => {
    if (formData.title === "") {
      toast.error("Title is required");
      return;
    } else if (formData.author === "") {
      toast.error("Author is required");
      return;
    } else if (formData.publicationDate === "") {
      toast.error("Publication date  is required");
      return;
    }

    const data = {
      formData,
      token,
    };
    const result: any = await addBook(data);
    const { error, data: response } = result;

    if (response?.statusCode === 200) {
      toast.success(response?.message);
      setFormData({
        title: "",
        author: "",
        genre: "Fiction",
        publicationDate: "",
        addedBy: user?._id,
        reviews: [],
      });
      navigate("/all-book");
    } else {
      toast.error(error?.data?.message);
    }
  };

  return (
    <div>
      <div className="bg-white rounded shadow-lg p-4 px-4 md:p-10 mb-6 w-[80%] mx-auto mt-10">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="text-gray-600">
            <p className="font-semibold text-3xl">
              Add Book
            </p>
            <p className="text-red-600 font-semibold text-base">
              Please fill out all the fields *
            </p>
          </div>

          <div className="lg:col-span-2">
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
                <label htmlFor="year">
                  Publication Year
                </label>

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

              <div className="md:col-span-5 text-right">
                <div className="flex justify-end items-end">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleAddBook}
                  >
                    {isLoading ? <SmallLoader /> : <>Add</>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
