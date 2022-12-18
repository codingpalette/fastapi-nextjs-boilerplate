import './globals.css';
import {headers} from "next/headers";
import ReactQueryWrapper from "../components/wrapper/ReactQueryWrapper";
import DefaultWrapper from "../components/wrapper/DefaultWrapper";

const fetchData = async () => {
  const headersInstance = headers()
  const authorization: any = headersInstance.get('authorization')
  const Cookie: any = headersInstance.get('Cookie')
  const res = await fetch(
    'http://127.0.0.1:8000/api/v1/users/test2', {
      headers: { authorization, Cookie },
      cache: 'no-store'
    })
  const data = await res.json()
  return data
}

export default async function RootLayout({children,}: { children: React.ReactNode }) {

  const data = await fetchData()
  console.log('data', data)

  return (
    <html>
      <head />
      <body>
        <ReactQueryWrapper>
          <DefaultWrapper userData={data}>
            {children}
          </DefaultWrapper>
        </ReactQueryWrapper>
      </body>
    </html>
  )
}
