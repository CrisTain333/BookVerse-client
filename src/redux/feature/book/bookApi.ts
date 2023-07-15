import { api } from "../../api/api";

export const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBook: builder.query({
      query: () => `/books`,
    }),
  }),
});

export const { useGetBookQuery } = bookApi;
