import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import 'semantic-ui-css/semantic.min.css'

const name = 'Crypto Hound'
export const siteTitle = 'Crypto Hound'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto Hound</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap" rel="stylesheet"></link> */}
        <meta
          name="description"
          content="Web Application for cryptocurrency and blockchain research"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link href="/">
            <Image
            priority
            src="/images/cryptohound.png"
            height={108}
            width={220}
            alt="crypto-hound logo"
            />
        </Link>
          <ul className={styles.navLinks}>
            <li className={styles.navLink}><i className="home icon" style={{maringLeft: '5px'}}></i><Link href="/">Home</Link></li>
            <li className={styles.navLink}><i className="bolt icon" style={{maringLeft: '5px'}}></i><Link href="about">About</Link></li>
            <li className={styles.navLink}><i className="chart line icon" style={{maringLeft: '5px'}}></i><Link href="chart">Chart</Link></li>
            <li className={styles.navLink}><i className="columns icon" style={{maringLeft: '5px'}}></i><Link href="screener">Screener</Link></li>
            <li className={styles.navLink}><i className="book icon" style={{maringLeft: '5px'}}></i><Link href="research">Research</Link></li>
            <li className={styles.navLink}><i className="fire icon" style={{maringLeft: '5px'}}></i><Link href="intel">Intel</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        
      </footer>
    </div>
  )
}