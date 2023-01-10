import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const elaminCollegeApi = createApi({
    reducerPath: 'elaminCollegeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/v1/'
    }),

    endpoints: (builder) => ({
        getAllStudent: builder.query({ query: () => '/admin/records'})
    }),
});

export const {
    useGetAllStudentQuery,
} = elaminCollegeApi;