import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log('Clicked');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText='View Store near you!' handleOnClick={handleOnBannerBtnClick} />
        <Link href='courses/nextjs'><a>NextJs</a></Link>
        <Link href='/doit'><a>This is a Dynamic</a></Link>
      </main>
    </div>
  )
}
