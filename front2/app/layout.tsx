import './globals.css';
import ReactQueryWrapper from "../components/wrapper/ReactQueryWrapper";
import ThemeWrapper from "../components/wrapper/ThemeWrapper";
import EmotionWrapper from "../components/wrapper/EmotionWrapper";

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
          <EmotionWrapper>
            <ThemeWrapper>
              {children}
            </ThemeWrapper>
          </EmotionWrapper>
          </body>
      </ReactQueryWrapper>
    </html>
  )
}
