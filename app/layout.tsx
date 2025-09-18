import { Provider } from "../components/provider"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
