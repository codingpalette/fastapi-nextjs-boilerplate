"use client";
import { ThemeProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
};


const ThemeWrapper = ({children}: Props) => {
  return(
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  )
}

export default ThemeWrapper