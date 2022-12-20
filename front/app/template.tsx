'use client';

import {useQuery, useQueryClient} from "@tanstack/react-query";
import fetcher from "../lib/fetcher";
import {useEffect} from "react";
import Header from "../components/base/Header";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const template = ({children}: { children: React.ReactNode }) => {
  const {data: me, isLoading, isError, error} = useQuery({
    queryKey: ['user_me'],
    queryFn: () => fetcher('/api/v1/users/test2') ,
  })

  useEffect(() => {
    console.log('me', me)
  }, [me])

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
        {me && (
          <>
            <Header />
          </>
        )}
        <h1>templage</h1>
        {children}
      </ThemeProvider>


    </>
  )
}

export default template