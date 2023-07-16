/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "../../api/api";

export const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBook: builder.query({
      query: () => `/books`,
      providesTags: ["book"],
    }),
    addBooks: builder.mutation({
      query: (data: any) => ({
        url: `/books/create-book`,
        headers: {
          authorization: `${data?.token}`,
        },
        method: `POST`,
        body: data?.formData,
      }),
      invalidatesTags: ["book"],
    }),
    getSingleBook: builder.query({
      query: (id: string) => ({
        url: `/books/${id}`,
      }),
      providesTags: ["singleBook"],
    }),
    addReview: builder.mutation({
      query: ({ data, id }) => ({
        url: `/books/add-review/${id}`,
        method: `PATCH`,
        body: data,
      }),
      invalidatesTags: ["singleBook"],
    }),
  }),
});

export const {
  useGetBookQuery,
  useAddBooksMutation,
  useGetSingleBookQuery,
  useAddReviewMutation,
} = bookApi;
