/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { AiFillTag } from "react-icons/ai";
import { useAppSelector } from "../redux/hooks/hook";
import { INewBook } from "./allBook";
import { RxAvatar } from "react-icons/rx";

const WishList = () => {
  const { books } = useAppSelector(
    (state) => state.wishlist
  );

  console.log(books);

  return (
    <div>
      <div className="w-[80%] mx-auto  rounded-md ">
        {books?.map((book: INewBook) => {
          return (
            <div className="bg-slate-50 p-5 my-5 rounded-md">
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
