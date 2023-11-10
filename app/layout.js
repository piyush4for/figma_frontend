import { Inter } from 'next/font/google'
import './globals.css'
import {Providers} from "./providers";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Piyush's figma clone",
  description: 'a try hard work by piyush. clone of wine figma design',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}><Providers>
          {children}
        </Providers></body>
    </html>
  )
}
