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

export default function Home({data, news, prices}) {
  const [watchList, setWatchList] = useState([]);
  return (
    <>
    <Layout>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <Wacthlist />
          <Roi data={data}/>
          <Mining data={data}/>
          <Sectors data={data} />
        </div>
        <div className={styles.centerContainer}>
          <Chart prices={prices}/>
          <CtaTwo />
          <News news={news}/>
          <MiniNav data={data}/>
          <Cta />
          <Footer />
        </div>
        <div className={styles.rightContainer}>
          <SpecialUpdates />
          <Volume data={data}/>
          <Subscribe />
          <Fundamentals data={data}/>
        </div>
      </div>
    </Layout>
    </>
  )
}


export async function getServerSideProps() {
  const [res, newsRes, pricesRes] = await Promise.all([
    fetch('https://data.messari.io/api/v2/assets'),
    fetch('https://data.messari.io/api/v1/news'),
    fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1622525134&to=1625030734')
  ])
  const [data, news, prices] = await Promise.all([
    res.json(), 
    newsRes.json(),
    pricesRes.json()
  ]) 
  return {
    props: {data, news, prices},
  }
}