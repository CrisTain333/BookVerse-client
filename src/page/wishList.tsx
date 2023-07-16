/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { AiFillTag } from "react-icons/ai";
import {
  useAppDispatch,
  useAppSelector,
} from "../redux/hooks/hook";
import { INewBook } from "./allBook";
import { RxAvatar } from "react-icons/rx";
import {
  addToReading,
  removeBook,
  removeFromReading,
} from "../redux/feature/wishlist/wishlistSlice";
import { toast } from "react-hot-toast";

const WishList = () => {
  const { books, reading } = useAppSelector(
    (state) => state.wishlist
  );
  const dispatch = useAppDispatch();

  const handleToggleReadingList = (book: INewBook) => {
    const isBookInReadingList = reading.some(
      (readingBook: any) => readingBook._id === book._id
    );
    if (isBookInReadingList) {
      dispatch(removeFromReading(book._id));
    } else {
      dispatch(addToReading(book));
    }
  };

  return (
    <div>
      <div className="w-[80%] mx-auto  rounded-md ">
        {books?.map((book: INewBook) => {
          return (
            <div className="bg-slate-50 p-5 my-5 rounded-md">
              <div className="flex items-center justify-end">
                <button
                  className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
                  onClick={() =>
                    dispatch(removeBook(book?._id))
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                  Remove
                </button>
                <button
                  className="inline-flex items-center px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded-md ml-5"
                  onClick={() =>
                    handleToggleReadingList(book)
                  }
                >
                  {reading.some(
                    (readingBook: any) =>
                      readingBook._id === book._id
                  )
                    ? "Remove from Reading List"
                    : "Add to Reading List"}
                </button>
              </div>
              <h2 className="text-2xl font-bold">
                {book.title}
                <div className="text-gray-600 text-sm duration-150 flex items-center group-hover:text-gray-800 mt-2 text-start justify-start">
                  <div className="text-base flex items-center text-gray-500">
                    <RxAvatar size={18} />
                    <span className="ml-1 font-semibold text-xl text-gray-500">
                      Author :
                    </span>
                  </div>
                  <p className="text-xl text-slate-600 font-bold  ml-2">
                    {book?.author}
                  </p>
                </div>
                <div className="text-gray-600 text-sm duration-150 flex items-center group-hover:text-gray-800 text-center justify-start">
                  <div className="text-base flex items-center text-gray-500">
                    <AiFillTag size={18} />
                    <span className="ml-1 font-semibold text-xl text-gray-500">
                      Genre :
                    </span>
                  </div>
                  <p className="text-base font-semibold text-gray-500 ml-2">
                    {book?.genre}
                  </p>
                </div>
                <div className="flex items-center justify-start space-x-3 text-center">
                  <span className="text-base font-semibold ">
                    Published On :
                  </span>
                  <span className="block text-indigo-600 text-base font-semibold">
                    {book?.publicationDate}
                  </span>
                </div>
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WishList;
