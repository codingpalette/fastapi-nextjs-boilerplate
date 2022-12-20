'use client';

import {useQuery, useQueryClient} from "@tanstack/react-query";
import fetcher from "../lib/fetcher";
import {useEffect, useState} from "react";
import Header from "../components/base/Header";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from "@mui/material/Box";
import {Toolbar} from "@mui/material";

const template = ({children}: { children: React.ReactNode }) => {
  // 페이지 시작 상태 값
  const [start, setStart] = useState(false)

  const {data: me, isLoading, isError, error} = useQuery({
    queryKey: ['user_me'],
    queryFn: () => fetcher('/api/v1/users/test2') ,
  })

  useEffect(() => {
    console.log('me', me)
  }, [me])

  useEffect(() => {
    console.log('isLoading', isLoading)
  }, [isLoading])

  const darkTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  // https://github.com/codingpalette/next-fastapi-blog/blob/main/front3/components/Layout/index.js 참고

  return(
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  )
}

export default template