'use client';
import React from 'react'
import Header from "../components/base/Header";
import Box from "@mui/material/Box";
import {Toolbar} from "@mui/material";
import {useQuery} from "@tanstack/react-query";
import fetcher from "../lib/fetcher";

const MainContainer = ({children}: { children: React.ReactNode }) => {
  const {data: me, isLoading, isError, error} = useQuery({
    queryKey: ['user_me'],
    queryFn: () => fetcher('/api/v1/users/me')
  })

  return(
    <>
      {me?.result === 'success' && (
        <>
          <Header />
          <Box component="main">
            <Toolbar />
            {children}
          </Box>
        </>
      )}
    </>
  )
}

export default MainContainer
