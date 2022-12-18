'use client';

import {useQuery, useQueryClient} from "@tanstack/react-query";
import fetcher from "../lib/fetcher";
import {useEffect} from "react";
import Header from "../components/base/Header";

const template = ({children}: { children: React.ReactNode }) => {
  const {data: me, isLoading, isError, error} = useQuery({
    queryKey: ['user_me'],
    queryFn: () => fetcher('/api/v1/users/test2') ,
  })

  useEffect(() => {
    console.log('me', me)
  }, [me])

  return(
    <>
      {me && (
        <>
          <Header />
        </>
      )}
      <h1>templage</h1>
      {children}
    </>
  )
}

export default template