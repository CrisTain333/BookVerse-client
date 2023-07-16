/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../redux/feature/book/bookApi";
import { AiFillTag } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { useAppSelector } from "../redux/hooks/hook";

const BookDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleBookQuery(id as string);
  const { user } = useAppSelector((state) => state.auth);

  console.log(data?.data);
  return (
    <div>
      <div className="w-[80%] mx-auto shadow-md rounded-md h-[70vh] p-3">
        <div className=" flex items-center justify-end space-x-5">
          <button className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
            Edit
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Delete
          </button>
        </div>

        <div>
          <div className="mt-3 space-y-2">
            <h3 className="text-5xl font-mono text-gray-800 duration-150 group-hover:text-[#f62343] font-semibold h-14">
              {data?.data?.title}
            </h3>
            <div className="text-gray-600 text-sm duration-150 flex items-center group-hover:text-gray-800 mt-10">
              <div className="text-base flex items-center text-gray-500">
                <RxAvatar size={25} />
                <span className="ml-1 font-semibold text-2xl text-gray-500">
                  Author :
                </span>
              </div>
              <p className="text-xl text-slate-600 font-bold  ml-2">
                {data?.data?.author}
              </p>
            </div>
            <div className="text-gray-600 text-sm duration-150 flex items-center group-hover:text-gray-800">
              <div className="text-base flex items-center text-gray-500">
                <AiFillTag size={25} />
                <span className="ml-1 font-semibold text-xl text-gray-500">
                  Genre :
                </span>
              </div>
              <p className="text-base font-semibold text-gray-500 ml-2">
                {data?.data?.genre}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-base font-semibold">
                Published On :
              </span>
              <span className="block text-indigo-600 text-base font-semibold">
                {data?.data?.publicationDate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
