import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel impedit nisi esse tempore, optio natus iure fugiat nam minus corrupti, quos aut ullam odio rerum hic omnis odit error laboriosam dolor non aspernatur accusamus? Quae corporis culpa ducimus ratione. Esse!</p>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel impedit nisi esse tempore, optio natus iure fugiat nam minus corrupti, quos aut ullam odio rerum hic omnis odit error laboriosam dolor non aspernatur accusamus? Quae corporis culpa ducimus ratione. Esse!</p>
      <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
    </div>
    </>

  )
}
