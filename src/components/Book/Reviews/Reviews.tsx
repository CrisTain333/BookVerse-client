/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import AOS from "aos";
import "aos/dist/aos.css";
const Reviews = ({ data }: any) => {
  console.log(data);
  AOS.init();
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    delay: 0,
    duration: 800,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
  });
  return (
    <div className="">
      <div className="">
        <div className="flex justify-start items-start">
          <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
            Reviews
          </p>
        </div>
        {data?.data?.reviews?.map((e: any, i: number) => {
          return (
            <div
              key={i}
              className="w-full flex justify-start items-start flex-col bg-gray-50 p-5 my-2"
              data-aos="flip-up"
            >
              {/* className={"md:block " + (menu1 ? "block" : "hidden")} */}
              <div>
                <p className="mt-1 text-base leading-normal text-gray-600 w-full">
                  {e?.message}
                </p>
                <div className="mt-2 flex justify-start items-center flex-row space-x-2.5">
                  <div className="flex flex-col justify-start items-start space-y-2">
                    <p className="text-base leading-none  font-bold text-teal-500">
                      {e?.name}
                    </p>
                    <p className="text-sm leading-none text-gray-500  font-semibold">
                      14 July 2021
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
