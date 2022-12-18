'use client';
import {useQuery, useQueryClient} from "@tanstack/react-query";
import fetcher from "../../lib/fetcher";

type Props = {
  children: React.ReactNode;
  userData?: any
};

const DefaultWrapper = ({ children, userData }: Props) => {

  const {data: me, isLoading, isError, error} = useQuery({
    queryKey: ['user_me'],
    queryFn: () => fetcher('/api/v1/users/test2') ,
    initialData: userData
  })

  return(
    <>
      {children}
    </>
  )
}

export default DefaultWrapper
