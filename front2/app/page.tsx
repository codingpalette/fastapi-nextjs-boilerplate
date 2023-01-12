"use client";

import {useGetUserMe, usePostUserLogin, usePostUserLogOut} from "../lib/apis/user";
import {useEffect} from "react";
import {useQueryClient} from "@tanstack/react-query";


const Page = () => {
  const queryClient = useQueryClient();

  const {data: userMe} = useGetUserMe()

  useEffect(() => {
    console.log('userMe', userMe)
  }, [userMe])

  const loginTest = async () => {
    try {
      const res = await usePostUserLogin({
        user_login_id: 'string',
        user_password: 'string'
      })
      console.log(res)
      await queryClient.invalidateQueries(["user_me"]);



    } catch (e) {
      console.error(e)
    }

  }

  const logoutTest = async () => {
    try {
      const res = await usePostUserLogOut()
      console.log('res', res)
      await queryClient.invalidateQueries(["user_me"]);
    } catch (e) {
      console.error(e)
    }
  }

  return(
    <>
      <div className="p-4">
        <button onClick={loginTest}>로그인 테스트</button>
      </div>
      <div className="p-4">
        <button onClick={logoutTest}>로그아웃 테스트</button>
      </div>
    </>

  )
}

export default Page