import { Html } from "next/document";
import { Provider } from "../components/provider"

export default function RootLayout({ children }) {
  return (
    <Html>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </Html>
  )
}
