import apiCreator from "../apiCreator";
import {UserCreate, UserLogin} from "../types/user_type";
import {useQuery, useMutation} from "@tanstack/react-query";
import fetcher from "../fetcher";


/**
 * 사용자 확인 api
 * */
export const UseApiGetUserMe = (userData?: any) => {
  // Queries
  const {data, isLoading, isError, error} = useQuery({
    queryKey: ['user_me'],
    queryFn: () => fetcher('/api/v1/users/me'),
    initialData: userData
  })
  return {
    data,
    isLoading,
    isError,
    error
  }
}

/**
 * 사용자 로그인 api
 * */
export const apiPostUserLogin = async (post_data: UserLogin) => {
  return await apiCreator.post('/api/v1/users/login', post_data)
}

/**
 * 사용자 로그아웃 api
 * */
export const apiPostUserLogOut = async () => {
  return await apiCreator.post('/api/v1/users/logout')
}

/** 사용자 회원가입 api */
export const apiPostUserCreate = async (post_data: UserCreate) => {
  return await apiCreator.post('/api/v1/users/create', post_data)
}

/** 사용자 토큰 갱신 api */
export const apiGetUserTokenRefresh = async () => {
  return await apiCreator.get('/api/v1/users/token_refresh')
}