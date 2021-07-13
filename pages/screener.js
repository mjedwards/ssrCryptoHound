import React from 'react'

import Layout from "../components/layout"
import ScreenerTable from '../components/screener/screenerTable'
  
export default function Screener({data}) {
    
  return (
    <Layout>
        <ScreenerTable  data={data}/>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://data.messari.io/api/v2/assets');
  const data = await res.json()
  return {
    props: {data},
  }
}