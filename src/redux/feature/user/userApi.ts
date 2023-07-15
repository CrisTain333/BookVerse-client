import { api } from "../../api/api";
import { IRegisterData } from "../../typs";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data: IRegisterData) => ({
        url: `/auth/sign-up`,
        body: data,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = userApi;
