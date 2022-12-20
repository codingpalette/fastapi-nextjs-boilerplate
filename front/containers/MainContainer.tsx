'use client';
import React from 'react'
import Header from "../components/base/Header";
import Box from "@mui/material/Box";
import {Toolbar} from "@mui/material";

const MainContainer = ({children}: { children: React.ReactNode }) => {
  return(
    <>
      <Header />
      <Box component="main">
        <Toolbar />
        {children}
      </Box>
    </>
  )
}


export default MainContainer
