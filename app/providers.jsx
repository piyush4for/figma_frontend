// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Providers({children}) {
  return (
    <NextUIProvider>
      <ToastContainer 
              
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
              />
      {children}
    </NextUIProvider>
  )
}