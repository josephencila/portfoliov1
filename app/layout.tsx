import "./globals.css"
import React from "react"
import type { Metadata } from "next"
import { headers } from "next/headers"
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "next-themes"

export const dynamic = "force-dynamic"

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
})


export async function generateMetadata(): Promise<Metadata> {
  const host = (await headers()).get("host")
  return {
    title: `${process.env.NEXT_PUBLIC_NAME} | Portfolio`,
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    metadataBase: new URL(`https://${host}`),
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"
      suppressHydrationWarning>
      <body className={`${jakarta.className}`}>
        <Toaster richColors position="top-right" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
