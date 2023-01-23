'use client';
import { ToastContainer } from 'react-toastify';
import {useGetUserMe} from "../../lib/apis/user";


type Props = {
  children: React.ReactNode;
  userData: object
};

const DefaultWrapper = ({ children, userData }: Props) => {
  /** 서버컴포넌트에서 받은 userData를 react-query 기본데이터에 넣어준다. */
  useGetUserMe(userData)

  return(
    <>
      {children}
      <ToastContainer />
    </>
  )


}

export default DefaultWrapper