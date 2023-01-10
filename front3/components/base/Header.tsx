'use client';

import styled from '@emotion/styled'
import tw from 'twin.macro';
import { useTheme } from 'next-themes'
import {useEffect} from "react";
import Link from "next/link";
import { SunIcon } from '@heroicons/react/24/solid'

const Header = () => {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    console.log('theme', theme)
  }, [theme])
  return(
    <>
      <HeaderBox>
        <div className="w-full flex justify-between">
          <Link href="/">
            Logo
          </Link>
          <div className="flex">

          </div>
        </div>
        {/*<button onClick={() => setTheme('light')}>Light Mode</button>*/}
        {/*<button onClick={() => setTheme('dark')}>Dark Mode</button>*/}
      </HeaderBox>
    </>
  )
}


const HeaderBox = styled.header`
  ${tw`px-4 sticky left-0 top-0 w-full shadow`};
  height: 55px;
`


export default Header