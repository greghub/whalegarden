import './globals.css'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ weight: ['300', '400', '600'], subsets: ['latin'] })

export const metadata = {
  title: 'Tailwarden',
  description: 'Greg Hovansyan\'s submission for the frontend engineer role challenge.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>{children}</body>
    </html>
  )
}
