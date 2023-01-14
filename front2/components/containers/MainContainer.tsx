"use client";

import Header from "../base/Header";

type Props = {
  children: React.ReactNode;
};

const MainContainer = ({children}: Props) => {
  return(
    <>
      <Header />
      <div>
        {children}
      </div>
    </>
  )
}

export default MainContainer