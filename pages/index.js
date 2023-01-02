import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
        <div className='container-lg bg-primary bg-gradient  bg-opacity-75'>
          <div className="alert alert-info text-center " role="alert">
            <h1>Listo NetxJS con Sass y bootstrap!</h1>
          </div>
        </div>
  )
}
