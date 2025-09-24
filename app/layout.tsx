"use client"
import { NavBar } from "../components/navbar"
import { Provider } from "../components/provider"

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true}>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
