'use client';
import {useQuery, useQueryClient} from "@tanstack/react-query";
import fetcher from "../../lib/fetcher";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

type Props = {
  children: React.ReactNode;
  userData?: any
};

const DefaultWrapper = ({ children, userData }: Props) => {
  // 라우터
  const router = useRouter()

  const {data: me, isLoading, isError, error} = useQuery({
    queryKey: ['user_me'],
    queryFn: () => fetcher('/api/v1/users/me') ,
    initialData: userData
  })

  useEffect(() => {
    if (me?.result === 'success') {

    } else {
      router.replace('/login')
    }
  }, [me])

  return(
    <>
      {children}
    </>
  )
}

export default DefaultWrapper
