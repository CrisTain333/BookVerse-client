import { Link } from "react-router-dom";
import bookImage from "../../assets/book.jpg";
const Hero = () => {
  return (
    <div>
      <section className="py-24 w-[95%] mx-auto">
        <div className="mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h2 className="text-4xl text-gray-800 font-semibold md:text-5xl">
              Welcome to BookVerse <br />
              Discover a World of Books and Knowledge
            </h2>
            <p>
              Dive into the vast collection of books and
              explore new possibilities. BookVerse helps you
              explore, learn, and connect with the world of
              literature.
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <Link
                to="/all-books"
                className="block py-2 px-4 text-center text-white font-medium bg-[#f62343] duration-150 hover:bg-[#f623439a] rounded-lg shadow-lg hover:shadow-none"
              >
                Let's get started
              </Link>
            </div>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <img
              src={bookImage}
              className=" md:rounded-tl-[108px]"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
