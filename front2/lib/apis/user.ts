import apiCreator from "../apiCreator";
import { UserLogin } from "../types/user_type";
import {useQuery, useMutation} from "@tanstack/react-query";
import fetcher from "../fetcher";


/**
 * 사용자 확인 api
 * */
export const useGetUserMe = () => {
  // Queries
  const {data, isLoading, isError, error} = useQuery({ queryKey: ['user_me'], queryFn: () => fetcher('/api/v1/users/me') })
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
export const usePostUserLogin = async (post_data: UserLogin) => {
  return await apiCreator.post('/api/v1/users/login', post_data)
}

/**
 * 사용자 로그아웃 api
 * */
export const usePostUserLogOut = async () => {
  return await apiCreator.post('/api/v1/users/logout')
}