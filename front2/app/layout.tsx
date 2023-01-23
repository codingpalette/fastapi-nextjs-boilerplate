import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import ReactQueryWrapper from "../components/wrapper/ReactQueryWrapper";
import ThemeWrapper from "../components/wrapper/ThemeWrapper";
import EmotionWrapper from "../components/wrapper/EmotionWrapper";
import DefaultWrapper from "../components/wrapper/DefaultWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <head />
      <ReactQueryWrapper>
          <body>
          {/*<ThemeWrapper>*/}
            <EmotionWrapper>
              <DefaultWrapper>
                {children}
              </DefaultWrapper>
            </EmotionWrapper>
          {/*</ThemeWrapper>*/}
          </body>
      </ReactQueryWrapper>
    </html>
  )
}
