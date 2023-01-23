'use client';
import { ToastContainer } from 'react-toastify';


type Props = {
  children: React.ReactNode;
};

const DefaultWrapper = ({ children }: Props) => {
  return(
    <>
      {children}
      <ToastContainer />
    </>
  )


}

export default DefaultWrapper