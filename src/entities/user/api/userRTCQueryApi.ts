import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUsers } from "../model/types";

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:8000",
    }),
    endpoints: (builder) => ({
      getUsers: builder.query<IUsers[], {limit?:number,start:number}>({
        query: ({ limit = 10, start = 0 }) => ({
          url: "/users",
          params: {
            _limit: limit,
            _start: start,
          },
        }),
      }),
    }),
  });
  
export const {useGetUsersQuery}=usersApi
  