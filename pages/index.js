import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import {useState} from "react"

import Layout from "../components/layout"
import Wacthlist from "../components/watchlist"
import Roi from "../components/roi"
import Chart from "../components/chart"
// import Layout from "../components/layout"

export default function Home() {
  const [watchList, setWatchList] = useState([]);
  return (
    <>
    <Layout>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <Wacthlist />
          <Roi />
          <div className={styles.cards}>Ecosysstem</div>
          <div className={styles.cards}>Sectors</div>
        </div>
        <div className={styles.centerContainer}>
          <Chart />
          <div className={styles.cards}>Research</div>
          <div className={styles.cards}>Intel</div>
          <div className={styles.cards}>Messari Lists</div>
          <div className={styles.cards}>Library</div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.cards}>Special Updates</div>
          <div className={styles.cards}>Volume</div>
          <div className={styles.cards}>Fundamentals</div>
        </div>
      </div>
    </Layout>
    </>
  )
}
