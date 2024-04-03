import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type nameType={
  first:string,last:string,
}


export interface IUsers{
id:number;
name:nameType;
age:number;
email:string;

}

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
    // getUserById: builder.query<IUsers, number>({
    //   query: (id) => (`/users/${id}`),
    // }),
  }),
});

export const { useGetUsersQuery } = usersApi;
