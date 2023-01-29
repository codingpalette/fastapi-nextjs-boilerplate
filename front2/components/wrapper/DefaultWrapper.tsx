'use client';
import { ToastContainer } from 'react-toastify';
import {useGetUserMe, useGetUserTokenRefresh} from "../../lib/apis/user";
import {useEffect} from "react";
import {useQueryClient} from "@tanstack/react-query";


type Props = {
  children: React.ReactNode;
  userData: object
};

const DefaultWrapper = ({ children, userData }: Props) => {
  const queryClient = useQueryClient();

  /** 서버컴포넌트에서 받은 userData를 react-query 기본데이터에 넣어준다. */
  const {data: userMe} = useGetUserMe(userData)

  useEffect(() => {
    if (userMe?.result === 'success') {
      tokenRefresh()
    }
  }, [userMe])

  const tokenRefresh = async () => {
    try {
      // 유저 엑세트 토큰을 갱신시켜준다.
      await useGetUserTokenRefresh()
      onLoginSuccess();
    } catch (e) {
      // 리프레시에 실패하면 로그인 화면으로 이동
      /*
      * 실패 조건
      * 1. 서버오류
      * 2. 리프레시 토큰 기간 만료
      * **/
      await queryClient.invalidateQueries({ queryKey: ['user_me'] })
    }
  };

  const onLoginSuccess = () => {
    const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)
    setTimeout(() => {
      tokenRefresh();
    }, JWT_EXPIRY_TIME - 60000);
  };

  return(
    <>
      {children}
      <ToastContainer />
    </>
  )


}

export default DefaultWrapper