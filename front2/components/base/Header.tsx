/** @jsxImportSource @emotion/react */
"use client";
import {css} from "@emotion/react";
import tw from 'twin.macro';
import Button from "./Button";
import Link from "next/link";
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/solid'
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import Modal from "./modal";
import Input from "./input";
import useInput from "../../hooks/useInput";
import {ErrorMessageOpen, SuccessMessageOpen} from "../../hooks/useToast";
import {useGetUserMe, usePostUserLogin, usePostUserLogOut} from "../../lib/apis/user";
import Dropdown from "./Dropdown";
import {useQueryClient} from "@tanstack/react-query";


const Header = () => {
  const queryClient = useQueryClient()

  /** 유저 데이터 */
  const {data: userMe, error} = useGetUserMe();

  // header 스타일 지정
  const style = css`
    height: 50px;
  `
  // 테마 속성 값
  const { theme, setTheme } = useTheme()
  // const [siteTheme, setSiteTheme] = useState<string | null>(null)


  // useEffect(() => {
  //   if (theme) setSiteTheme(theme)
  // }, [theme])

  const [userMenuActive, setUserMenuActive] = useState(false)
  const userMenuOpen = () => {
    setUserMenuActive(true)
  }
  const userMenuClose = () => {
    setUserMenuActive(false)
  }
  const userMenuToggle = () => {
    setUserMenuActive(!userMenuActive)
  }

  /** 로그아웃 이벤트 */
  const onClickLogOut = async () => {
    try {
      const res = await usePostUserLogOut()
      if (res.data.result === 'success') {
        queryClient.clear();
      }
      // await queryClient.invalidateQueries({ queryKey: ['user_me'] })
    } catch (e: any) {
      if (e.response.data) {
        ErrorMessageOpen(e.response.data.message)
      } else {
        ErrorMessageOpen('에러가 발생 하였습니다.')
      }
    }
  }

  const items = [
    {
      label: <span onClick={onClickLogOut} className="cursor-pointer block">로그아웃</span>,
      key: '0',
    },
  ];

  const [userLoginId, onChangeUserLoginId] = useInput('')
  const [userPassword, onChangeUserPassword] = useInput('')

  /** 로그인, 회원가입 모달 상태값 */
  const [signModalActive, setSignModalActive] = useState(false)
  /** 로그인, 회원가입 모달 열기 이벤트 */
  const signModalOpen = () => {
    setSignModalActive(true)
  }
  /** 로그인, 회원가입 모달 닫기 이벤트 */
  const signModalClose = () => {
    setSignModalActive(false)
  }
  /** 로그인, 회원가입 이벤트 */
  const signSubmit = async (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (userLoginId === '') {
      ErrorMessageOpen('아이디를 입력해 주세요.');
      return;
    }
    if (userPassword === '') {
      ErrorMessageOpen('비밀번호를 입력해 주세요.');
      return;
    }
    try {
      const post_data = {
        user_login_id: userLoginId,
        user_password: userPassword
      }
      const res = await usePostUserLogin(post_data)
      if (res.data.result === 'success') {
        SuccessMessageOpen('로그인 성공')
        signModalClose()
        await queryClient.invalidateQueries({ queryKey: ['user_me'] })
      }
    } catch (e: any) {
      if (e.response.data) {
        ErrorMessageOpen(e.response.data.message)
      } else {
        ErrorMessageOpen('에러가 발생 하였습니다.')
      }
    }

  }




  return(
    <>
      <header
        css={[style]}
        className="px-4 flex items-center justify-between shadow"
      >
        <div className="left flex items-center">
          <Button circle className="mr-4">
            <Bars3Icon className="w-5 h-5" />
          </Button>
          <Link href='/' className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round"
                 strokeWidth="2"
                 className="w-8 h-8 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Next</span>
          </Link>
        </div>
        <div className="right flex items-center">
          {/*{siteTheme && (*/}
          {/*  <>*/}
          {/*    {siteTheme === 'light' ? (*/}
          {/*      <Button circle className="mr-4" onClick={() => setTheme('dark')}>*/}
          {/*        <MoonIcon className="w-4 h-4" />*/}
          {/*      </Button>*/}
          {/*    ) : (*/}
          {/*      <Button circle className="mr-4" onClick={() => setTheme('light')}>*/}
          {/*        <SunIcon className="w-4 h-4" />*/}
          {/*      </Button>*/}
          {/*    )}*/}
          {/*  </>*/}
          {/*)}*/}
          {userMe?.result === 'success' ? (
            <div className="relative">
              {/*<Button theme="primary" onClick={signModalOpen}>*/}
              {/*  로그아웃*/}
              {/*</Button>*/}
              <Dropdown open={userMenuActive} onCancel={userMenuClose} items={items} placement="right">
                <Button circle className="" onClick={userMenuToggle}>
                  <UserCircleIcon className="w-5 h-5" />
                </Button>

              </Dropdown>
            </div>
          ) : (
            <Button theme="primary" onClick={signModalOpen}>
              로그인
            </Button>
          )}
        </div>
        <Modal
          open={signModalActive}
          onCancel={signModalClose}
          title="로그인"
          footerRender={false}
        >
          <form id="joinForm" onSubmit={signSubmit}>
            <Input.Group label="아이디" name="user_login_id">
              <Input
                id="user_login_id"
                name="user_login_id"
                maxLength={30}
                value={userLoginId}
                onChange={onChangeUserLoginId}
              />
            </Input.Group>
            <Input.Group label="비밀번호" name="user_password">
              <Input
                id="user_password"
                name="user_password"
                htmlType="password"
                maxLength={30}
                value={userPassword}
                onChange={onChangeUserPassword}
              />
            </Input.Group>
            <div className=" flex justify-end gap-2">
              <Button onClick={signModalClose}>닫기</Button>
              <Button theme="primary" htmlType="submit">확인</Button>
            </div>
          </form>
        </Modal>
      </header>
    </>
  )
}





export default Header