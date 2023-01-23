import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import ReactQueryWrapper from "../components/wrapper/ReactQueryWrapper";
import ThemeWrapper from "../components/wrapper/ThemeWrapper";
import EmotionWrapper from "../components/wrapper/EmotionWrapper";
import DefaultWrapper from "../components/wrapper/DefaultWrapper";
import {headers} from "next/headers";
import {backUrl} from "../config/config";


const fetchData = async () => {
  const headersInstance = headers()
  const authorization: any = headersInstance.get('authorization')
  const Cookie: any = headersInstance.get('Cookie')
  const res = await fetch(
    `${backUrl}/api/v1/users/me`, {
      headers: { authorization, Cookie },
      cache: 'no-store'
    })
  const data = await res.json()
  return data
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await fetchData()

  return (
    <html suppressHydrationWarning>
      <head />
      <ReactQueryWrapper>
          <body>
          {/*<ThemeWrapper>*/}
            <EmotionWrapper>
              <DefaultWrapper userData={data}>
                {children}
              </DefaultWrapper>
            </EmotionWrapper>
          {/*</ThemeWrapper>*/}
          </body>
      </ReactQueryWrapper>
    </html>
  )
}
