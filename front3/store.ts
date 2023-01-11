import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import {userApi} from './lib/apis/user'
import {postsApi} from "./lib/apis/posts";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware, postsApi.middleware),

})

setupListeners(store.dispatch)