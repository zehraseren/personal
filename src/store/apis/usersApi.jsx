import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints(builder) {
    return {
      fetchUsers: builder.query({
        query: () => {
          return {
            url: "users",
            method: "GET",
          };
        },
      }),
      addUsers: builder.mutation({
        query: () => {
          return {
            url: "users",
            method: "POST",
            body: {
              name: "Zehra",
            },
          };
        },
      }),
      removeUsers: builder.mutation({
        query: (user) => {
          return {
            url: `users/${user.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export { usersApi };
export const {
  useFetchUsersQuery,
  useAddUsersMutation,
  useRemoveUsersMutation,
} = usersApi;
