import { api } from "../../api/api";

export const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBook: builder.query({
      query: () => `/books`,
      providesTags: ["book"],
    }),
  }),
});

export const { useGetBookQuery } = bookApi;
