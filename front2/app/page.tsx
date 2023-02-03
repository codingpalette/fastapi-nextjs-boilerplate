/** @jsxImportSource @emotion/react */
"use client";

import {UseApiGetUserMe, apiPostUserLogin, apiPostUserLogOut} from "../lib/apis/user";
import {useEffect, useState} from "react";
import {useQueryClient} from "@tanstack/react-query";
import MainContainer from "../components/containers/MainContainer";
import Button from "../components/base/Button";
import Modal from "../components/base/modal";
import Input from "../components/base/input";


const Page = () => {
  const queryClient = useQueryClient();

  const {data: userMe} = UseApiGetUserMe()

  useEffect(() => {
    console.log('userMe', userMe)
  }, [userMe])



  return(
    <>
      <MainContainer>


      </MainContainer>
    </>

  )
}

export default Page