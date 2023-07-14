const AddBooks = () => {
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
                  id="full_name"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="email">Author Name</label>
                <input
                  type="text"
                  name="author"
                  id="email"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                  placeholder=""
                />
              </div>

              <div className="md:col-span-3">
                <label htmlFor="address">
                  Address / Street
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                  placeholder=""
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                  placeholder=""
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="country">
                  Country / region
                </label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input
                    name="country"
                    id="country"
                    placeholder="Country"
                    className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                    value=""
                  />
                  <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                    <svg
                      className="w-4 h-4 mx-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line
                        x1="18"
                        y1="6"
                        x2="6"
                        y2="18"
                      ></line>
                      <line
                        x1="6"
                        y1="6"
                        x2="18"
                        y2="18"
                      ></line>
                    </svg>
                  </button>
                  <button
                    // htmlFor="show_more"
                    className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                  >
                    <svg
                      className="w-4 h-4 mx-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="state">
                  State / province
                </label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input
                    name="state"
                    id="state"
                    placeholder="State"
                    className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                    value=""
                  />
                  <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                    <svg
                      className="w-4 h-4 mx-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line
                        x1="18"
                        y1="6"
                        x2="6"
                        y2="18"
                      ></line>
                      <line
                        x1="6"
                        y1="6"
                        x2="18"
                        y2="18"
                      ></line>
                    </svg>
                  </button>
                  <button
                    // htmlFor="show_more"
                    className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                  >
                    <svg
                      className="w-4 h-4 mx-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="md:col-span-1">
                <label htmlFor="zipcode">Zipcode</label>
                <input
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  placeholder=""
                  value=""
                />
              </div>

              <div className="md:col-span-5">
                <div className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="billing_same"
                    id="billing_same"
                    className="form-checkbox"
                  />
                  <label
                    htmlFor="billing_same"
                    className="ml-2"
                  >
                    My billing address is different than
                    above.
                  </label>
                </div>
              </div>

              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
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
