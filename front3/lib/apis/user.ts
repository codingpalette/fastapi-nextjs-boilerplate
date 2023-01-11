// createApi를 import하기위해 React 엔트리 포인트 사용
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export interface UserLogin {
  user_login_id: string
  user_password: string
}

// base URL과 엔드포인트들로 서비스 정의
export const userApi = createApi({
  reducerPath: 'userApi', // 없는 경우는 api가 디폴트로 정해진다.
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/v1/users/',
    credentials: "include",
  }),
  // 재 랜드링을 위한 테그 설정. RTK Query의 기본 랜드링은 tag시스템으로 동작한다.
  //만약 자료가 수정되었을 때 Tag를 invalides로 설정하면 해당 tag가 설정된

  // 캐쉬 자료를 리플레시하는 기본 tag 이름 정의 , 예 ['Users', 'Posts']
  tagTypes: ['Users', 'UserMe'],

  //각각의 query/mutation 동작을 여기서 정의한다.
  endpoints: (build) => ({
    // build.query는 get에 해당되는 query이다.
    getUserMe: build.query({
      query:() => ({url: '/me'}),
      // query의 결과로 받은 내용을 변경.
      // resposedData는 query의 결과로 받은 값,
      // meta는 호출하는 곳에서 세팅한 Object,
      // arg는 호출하는 곳에 전달한 기본 parameter 값, 여기서는 id
      // 리턴 값 responsedData.data는 Data를 이용하는 곳에서 nest을 줄이기 위함.
      // transformResponse: (responsedData, meta, arg) => responsedData.data,

      // 쿼리 결과에 tag을 주입한다. 나중에 invalidesTags로 재 호출/랜드링한다.
      providesTags: (result, error, id) => [{ type: 'UserMe', id }],

      // query결과를 받아서 서버에 요청하여 결과를 받기 전에 캐쉬를 update하거나 다른 처리로 가공할 수 있다
      // async onQueryStarted(arg, {dispatch,getState,extra,requestId,queryFulfilled,getCacheEntry,updateCachedData}
      //   //queryFulfilled는 Promise
      // ) {},

      // The 2nd parameter is the destructured `QueryCacheLifecycleApi`
      // async onCacheEntryAdded(arg, //endpoint 호출에서 전달된 값 예, { id, post}
      //   { dispatch, getState, extra, requestId,cacheEntryRemoved, cacheDataLoaded, getCacheEntry, updateCachedData}
      // ) {},

    }),
    userLogin: build.mutation({
      query: (body: UserLogin) => ({
        url: '/login',
        method: 'POST',
        body
      }),

      //Post로 등록된 모든 캐쉬 내용을 업데이트, tag에 따라 수정한 곳만 업데이트 가능.
      // [{type:'Post', id}]가 등록되어 있고 이 것을 invalidatesTags로 호출하면 행당 id만 재 호출/랜드링.
      invalidatesTags: ['UserMe'],
    }),

    userLogout: build.mutation({
      query: (body) => ({
        url: '/logout',
        method: 'POST'
      }),

      invalidatesTags: ['UserMe'],
    }),


    getTestName: build.query({
      query: (name) => `/test`
    }),
    // getPokemonByName: builder.query<Pokemon, string>({
    //   query: (name) => `pokemon/${name}`,
    // }),
    getQueryText: build.query({
      query: (text) => `/query?text=${text}`
    }),
    addText: build.mutation({
      query: (body) => ({
        url: `/add`,
        method: 'POST',
        body,
      }),
      // invalidatesTags: ['User'],
    })
    // getQueryText: (text) => ({
    //   query: (text) => `/query?text=${text}`
    // })
  }),
})

export const { useGetUserMeQuery, useUserLoginMutation, useUserLogoutMutation, useGetTestNameQuery, useGetQueryTextQuery, useAddTextMutation } = userApi