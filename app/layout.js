import './globals.css'
import NavBar from '../components/NavBar'

export const metadata = {
  title: 'William — Statistics & Data Science',
  description: 'Academic and professional profile of William'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">
        <NavBar />
        <main className="max-w-4xl mx-auto px-6">{children}</main>
      </body>
    </html>
  )
}
