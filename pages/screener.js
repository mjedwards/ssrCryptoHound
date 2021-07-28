import React from 'react'
import dynamic from 'next/dynamic'

import Layout from "../components/layout"
import ScreenerTable from '../components/screener/screenerTable'
  
const DynamicComponent = dynamic(() =>import('../components/screener/screenerTable'))
export default function Screener({data}) {
    
  return (
    <Layout>
      <DynamicComponent data={data}/>
      {/* <ScreenerTable  data={data}/> */}
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