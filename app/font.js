import { Inter } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'

export const inter = Inter({ subsets: ['latin'] })
export const hard_to_download_font = localFont({
  src: '../public/fonts/AestheticRegular-8M5dM.ttf',
  display: 'swap',
  variable: 'hard-to-download-font'
})