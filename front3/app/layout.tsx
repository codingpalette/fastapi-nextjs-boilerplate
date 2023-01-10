import './globals.css';
import Header from "../components/base/Header";
import ThemeWrapper from "../components/wrapper/ThemeWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body>
        <ThemeWrapper>
          <Header />
          {children}
        </ThemeWrapper>
      </body>
    </html>
  )
}
