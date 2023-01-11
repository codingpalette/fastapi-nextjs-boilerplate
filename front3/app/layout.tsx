import './globals.css';
import Header from "../components/base/Header";
import ThemeWrapper from "../components/wrapper/ThemeWrapper";
import ReduxWrapper from "../components/wrapper/ReduxWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body>
        <ReduxWrapper>
          <ThemeWrapper>
            <Header />
            {children}
          </ThemeWrapper>
        </ReduxWrapper>
      </body>
    </html>
  )
}
