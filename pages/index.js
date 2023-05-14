import Head from 'next/head'

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="nextjs, huntingcoder blog, hunting coder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      {/* <Script src='/sc.js' strategy='lazyOnload'></Script> */}
      <nav className={styles.mainnav}>
        <ul>
          <Link href='/'>  <a><li>Home</li> </a></Link>
          <Link href='/about'> <a><li>About</li> </a></Link>
          <Link href='/blog'> <a><li>Blog</li> </a></Link>
          <Link href='/contact'> <a><li>Contact</li> </a></Link>
          
        </ul>
      </nav>
      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.title}>
          Hunting Coder
        </h1>
         
        <p className={styles.description}>
            A blog for hunting coders by a coder
        </p>
        
        <div className="blogs">
          <div className="blogItem">
            <h1>How to learn JavaScript in 2022?</h1>
            <p>JavaScript is the language used to design logic for  the web</p>
          </div>
          <div className="blogItem">
            <h1>How to learn JavaScript in 2022?</h1>
            <p>JavaScript is the language used to design logic for  the web</p>
          </div>
          <div className="blogItem">
            <h1>How to learn JavaScript in 2022?</h1>
            <p>JavaScript is the language used to design logic for  the web</p>
          </div>
        </div>



        
      </main>
    </div>
  )
}
