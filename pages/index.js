import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
        <div className="container-lg content">
          <a>Hola Mundo Primera app de NextJS</a>
        </div>
  )
}
