/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { bookGenre } from "../constant/genre";

import { FaFilter } from "react-icons/fa";
import { useGetBookQuery } from "../redux/feature/book/bookApi";
import {
  BsBookmarkHeart,
  BsBookmarkHeartFill,
} from "react-icons/bs";
import { IBook } from "../types";
import { RxAvatar } from "react-icons/rx";
import { AiFillTag } from "react-icons/ai";
import {
  useAppDispatch,
  useAppSelector,
} from "../redux/hooks/hook";
import {
  setFilteredGenre,
  setFilteredPublicationYear,
  setSearchQuery,
  setSearchResults,
} from "../redux/feature/book/bookSlice";
import { useState } from "react";
import React from "react";
import { ThreeCircles } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { addBook } from "../redux/feature/wishlist/wishlistSlice";
import { toast } from "react-hot-toast";

export type INewBook = {
  _id: string;
  title: string;
  author: string;
  genre:
    | "Fiction"
    | "Fantasy"
    | "Mystery"
    | "Poetry"
    | "Young Adult"
    | "Non-Fiction"
    | "Science Fiction"
    | "Romance"
    | "Thriller"
    | "Historical Fiction"
    | "Biography"
    | "Self-Help"
    | "Humor"
    | "Drama"
    | "Horror"
    | "Adventure"
    | "Action"
    | "Classic"
    | "Other";
  publicationDate: string;
  reviews: string[];
  addedBy?: string;
};

const AllBook = () => {
  const {
    data: allBooks,
    isLoading,
    isError,
  } = useGetBookQuery(null);
  const [searchQuery, setSearchQueryLocal] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<
    string[]
  >([]);
  const publicationYears = [
    ...new Set(
      allBooks?.data?.map((book: IBook) =>
        book.publicationDate.slice(0, 4)
      )
    ),
  ];
  const dispatch = useAppDispatch();
  const { searchResults, filteredPublicationYear } =
    useAppSelector((state) => state.book);

  const { books } = useAppSelector(
    (state) => state.wishlist
  );

  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const query = event.target.value;
    setSearchQueryLocal(query);
    dispatch(setSearchQuery(query));
  };
  // console.log(allBooks);
  React.useEffect(() => {
    let filteredBooks = allBooks?.data;

    if (searchQuery) {
      filteredBooks = filteredBooks?.filter(
        (book: any) =>
          book.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          book.author
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          book.genre
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      );
    }

    if (selectedGenres.length > 0) {
      filteredBooks = filteredBooks?.filter((book: any) =>
        selectedGenres.includes(book.genre.toLowerCase())
      );
    }
    if (filteredPublicationYear) {
      filteredBooks = filteredBooks?.filter((book: any) =>
        book.publicationDate.includes(
          filteredPublicationYear
        )
      );
    }

    dispatch(setSearchResults(filteredBooks));
  }, [
    searchQuery,
    selectedGenres,
    allBooks,
    dispatch,
    filteredPublicationYear,
  ]);

  const handleGenreChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const genre = event.target.value.toLowerCase();
    if (event.target.checked) {
      setSelectedGenres((prevGenres) => [
        ...prevGenres,
        genre,
      ]);
    } else {
      setSelectedGenres((prevGenres) =>
        prevGenres.filter(
          (prevGenre) => prevGenre !== genre
        )
      );
    }
    dispatch(
      setFilteredGenre(
        selectedGenres.length === 0 ? null : genre
      )
    );
  };

  const handlePublicationYearFilter = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedPublicationYear = event.target.value;
    dispatch(
      setFilteredPublicationYear(selectedPublicationYear)
    );
  };

  if (isLoading) {
    return (
      <>
        <div className=" flex items-center justify-center h-[40vh]">
          <ThreeCircles
            height="120"
            width="120"
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
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-[40vh]">
        <p className="text-3xl font-semibold text-center text-red-600">
          Sorry, we encountered an error while Loading the
          data. <br /> Please refresh the page and try
          again.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full md:w-[95%] lg:w-[80%] mx-auto">
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <div className="sidebar w-[90%] sticky top-20">
            <div className="widget user_widget_search rounded-md shadow-md p-2">
              <h2 className="text-center flex items-center justify-center">
                <span className="mr-1 text-[#f62343]">
                  <FaFilter size={23} />
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
                    htmlFor="search"
                    className="mt-2 text-base font-semibold"
                  >
                    Books
                  </label>
                  <br />
                  <input
                    type="text"
                    className="w-[80%] border rounded-sm p-1 text-sm"
                    id="user_name"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="e.g Search Books..."
                  />
                </div>
                <div className="form-group mt-3">
                  <label
                    htmlFor="user_gender"
                    className="text-base font-semibold"
                  >
                    Category
                  </label>
                  {bookGenre?.map((category: any) => (
                    <div key={category}>
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          checked={selectedGenres.includes(
                            category.toLowerCase()
                          )}
                          value={category}
                          onChange={handleGenreChange}
                        />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description ml-1 my-1">
                          {category}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
                <div>
                  <label
                    htmlFor="user_gender"
                    className="text-base font-semibold"
                  >
                    Publication Years
                  </label>{" "}
                  <br />
                  <select
                    value={filteredPublicationYear!}
                    onChange={handlePublicationYearFilter}
                    className="w-[80%] border rounded-sm p-1 text-sm my-1"
                  >
                    <option value="">
                      All Publication Years
                    </option>
                    {publicationYears?.map((year: any) => (
                      <option
                        key={year}
                        value={year}
                      >
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-9">
          <ul className="grid gap-x-8 gap-y-10  sm:grid-cols-2 lg:grid-cols-3">
            {searchResults?.map(
              (items: INewBook, key: number) => {
                const isBookInWishlist = books.some(
                  (book: any) => book._id === items._id
                );
                return (
                  <li
                    className="w-full mx-auto group sm:max-w-sm shadow-lg p-5 rounded cursor-pointer"
                    key={key}
                  >
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="block text-indigo-600 text-base font-semibold">
                          {items?.publicationDate}
                        </span>
                        {isBookInWishlist ? (
                          <>
                            <span className="cursor-pointer text-red-600">
                              <BsBookmarkHeartFill
                                onClick={() => {
                                  dispatch(addBook(items));
                                  toast.success(
                                    "removed from wishlist"
                                  );
                                }}
                                size={22}
                              />
                            </span>
                          </>
                        ) : (
                          <>
                            <span
                              className="cursor-pointer"
                              onClick={() => {
                                dispatch(addBook(items));
                                toast.success(
                                  "add to wishlist"
                                );
                              }}
                            >
                              <BsBookmarkHeart size={22} />
                            </span>
                          </>
                        )}
                      </div>
                      <Link
                        to={`/book-details/${items?._id}`}
                      >
                        <h3 className="text-lg text-gray-800 duration-150  font-semibold h-10">
                          {items?.title?.slice(0, 30)} ...
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
                      </Link>
                    </div>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllBook;
