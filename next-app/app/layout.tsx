'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StoreProvider from '@/redux/provider'
import {NextUIProvider} from "@nextui-org/system";
import React from "react";
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <StoreProvider>
          <React.StrictMode>

          <NextUIProvider>
            {children}
          </NextUIProvider>
          </React.StrictMode>
          <Toaster richColors closeButton/>
        </StoreProvider>
      </body>
    </html>
  )
}

