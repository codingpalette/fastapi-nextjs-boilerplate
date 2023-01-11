'use client';
import styled from '@emotion/styled'
import tw from 'twin.macro';
import { useGetUserMeQuery, useUserLoginMutation, useUserLogoutMutation, useGetTestNameQuery, useGetQueryTextQuery, useAddTextMutation } from '../lib/apis/user'
import { useGetTestPostQuery} from '../lib/apis/posts'
import {useEffect} from "react";

const Page = () => {
  const {data: userMe, error: userMeError, isLoading: userMeLoading} = useGetUserMeQuery('')

  useEffect(() => {
    console.log('userMe', userMe)
  }, [userMe])

  // const { data, error, isLoading } = useGetTestNameQuery('bulbasaur')
  //
  // const { data: data2 } = useGetQueryTextQuery('안녕하세요111~~')
  //
  // const {data: data3} = useGetTestPostQuery('')
  //
  // const [addPost, response] = useAddTextMutation()
  //
  // useEffect(() => {
  //   console.log('data', data)
  // }, [data])
  //
  // useEffect(() => {
  //   console.log('data2', data2)
  // }, [data2])
  //
  // useEffect(() => {
  //   console.log('data3', data3)
  // }, [data3])

  // const testClick = async () => {
  //   const res = await addPost('')
  //   console.log('res', res)
  // }

  const [userLogin] = useUserLoginMutation()
  const [userLogout] = useUserLogoutMutation()

  const loginTest = async () => {
    const data = {
      user_login_id: 'string',
      user_password: 'string'
    }
    try {
      const res = await userLogin(data)
      console.log(res)
    } catch (e) {
      console.error(e)
    }
  }

  const logoutTest = async () =>{
    try {
      const res = await userLogout('')
      console.log(res)
    } catch (e) {
      console.error(e)
    }
  }

  return(
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div>sdf</div>
      <Button>sdfds</Button>
      <div>
        <button onClick={loginTest}>로그인 테스트</button>
      </div>
      <div>
        <button onClick={logoutTest}>로그아웃</button>
      </div>

      {/*<button onClick={testClick}>테스트 클릭</button>*/}
    </>
  )
}

const Button = styled.div(() => [
  tw`text-lg px-8 py-2 rounded focus:outline-none`,

])

export default Page