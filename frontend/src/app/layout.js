import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EduFam',
  description: 'Education platform for your family',
  icons: {
    icon: '/Images/EduFam-Fav.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <WhatsAppButton
          phoneNumber="919074506060"
          message="Hi! I'd like to know more."
          size={60}
          bottom={24}
          right={14}
        />
      </body>
    </html>
  )
}