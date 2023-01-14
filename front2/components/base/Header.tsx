/** @jsxImportSource @emotion/react */
"use client";
import {css} from "@emotion/react";
import tw from 'twin.macro';
import Button from "./Button";
import Link from "next/link";
import { Bars3Icon } from '@heroicons/react/24/solid'
import {SunIcon, MoonIcon} from '@heroicons/react/24/outline'
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";


const Header = () => {

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



  return(
    <>
      <header
        css={[style]}
        className="px-4 flex items-center justify-between"
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
          <Button theme="primary">
            로그인
          </Button>
        </div>
      </header>
    </>
  )
}





export default Header