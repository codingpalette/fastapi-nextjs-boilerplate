import './globals.css';
import ReactQueryWrapper from "../components/wrapper/ReactQueryWrapper";
import ThemeWrapper from "../components/wrapper/ThemeWrapper";

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
            <ThemeWrapper>
              {children}
            </ThemeWrapper>
          </body>
      </ReactQueryWrapper>
    </html>
  )
}
