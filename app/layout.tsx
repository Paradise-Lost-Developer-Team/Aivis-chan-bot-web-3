"use client"
import { NavBar } from "../components/navbar"
import { Provider } from "../components/provider"

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
