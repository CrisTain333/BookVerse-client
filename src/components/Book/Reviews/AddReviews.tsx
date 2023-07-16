/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useAddReviewMutation } from "../../../redux/feature/book/bookApi";
import { useAppSelector } from "../../../redux/hooks/hook";

const AddReviews = ({ id }: any) => {
  const [addReview, { isLoading }] = useAddReviewMutation();
  const { user } = useAppSelector((state) => state.auth);

  const handleAddReview = async (e: any) => {
    e.preventDefault();

    const message = e.target.message.value;
    const name = user?.name!;

    const data = {
      review: {
        message,
        name,
      },
    };

    const response = await addReview({ data, id });
    console.log(response);
  };
  return (
    <div>
      {/* <!-- component -->
<!-- comment form --> */}
      <div className="flex  shadow-lg mt-5 mx-8 mb-4 max-w-lg">
        <form
          className="w-full  bg-white rounded-lg px-4 pt-2"
          onSubmit={handleAddReview}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
              Add a Review
            </h2>
            <div className="w-full md:w-full px-3 mb-2 mt-2">
              <textarea
                className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                name="message"
                placeholder="Type Your Review"
                required
              ></textarea>
            </div>
            <div className="w-full flex items-start md:w-full px-3">
              <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto"></div>
              <div className="-mr-1">
                <input
                  type="submit"
                  className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                  value="Add Review"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReviews;
