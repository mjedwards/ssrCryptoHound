import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import {useState} from "react"

import 'semantic-ui-css/semantic.min.css';

import Layout from "../components/layout"
import Wacthlist from "../components/home/watchlist"
import Roi from "../components/home/roi"
import Sectors from "../components/home/sectors"
import Mining from "../components/home/miningStats"
import Chart from "../components/chart"
import News from "../components/home/news"
import MiniNav from '../components/home/miniNav'
import Cta from '../components/home/cta'
import CtaTwo from '../components/home/ctaTwo'
import Footer from '../components/home/footer'

import SpecialUpdates from '../components/home/specialUpdates'
import Volume from '../components/home/volumes'
import Subscribe from '../components/home/subscribe'
import Fundamentals from '../components/home/fundamentals'

export default function Home() {
  const [watchList, setWatchList] = useState([]);
  return (
    <>
    <Layout>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <Wacthlist />
          <Roi />
          <Mining />
          <Sectors />
        </div>
        <div className={styles.centerContainer}>
          <Chart />
          <CtaTwo />
          <News />
          <MiniNav />
          <Cta />
          <Footer />
        </div>
        <div className={styles.rightContainer}>
          <SpecialUpdates />
          <Volume />
          <Subscribe />
          <Fundamentals />
        </div>
      </div>
    </Layout>
    </>
  )
}
