// createApi를 import하기위해 React 엔트리 포인트 사용
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// base URL과 엔드포인트들로 서비스 정의
export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v1/posts/' }),
  endpoints: (builder) => ({
    getTestPost: builder.query({
      query: (name) => `/`
    }),


  }),
})

export const { useGetTestPostQuery } = postsApi