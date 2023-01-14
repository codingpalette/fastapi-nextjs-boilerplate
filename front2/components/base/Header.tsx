/** @jsxImportSource @emotion/react */

"use client";
import styled from '@emotion/styled'
import {css} from "@emotion/css";
import tw from "twin.macro";


const Header = () => {
  return(
    <>
      {/*<header className={`${css([style])} px-4 shadow flex items-center`}>*/}
      {/*</header>*/}
      <header css={[style]}>111212</header>
    </>
  )
}


const style = css`
  height: 60px; 
  color: red;
`

const HeaderBox = styled.header`
  height: 60px;
`

export default Header