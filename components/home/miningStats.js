import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MiningTable from '../tables/miningTable'
import Pagination from './pagination'


const Mining = () => {
    let rows = { id: '',
        name: '',
        hashRate: null,
        thirtyDayHR: null,
        miningRev: null, }
    const [assets, setAssets] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [assetsPerPage] = useState(8);
    
    useEffect(() => {
        setLoading(true);
        let mounted = true;
            axios.get('https://data.messari.io/api/v2/assets?with-profiles').then(res => {
                const data = res.data.data
                if(mounted) {
                    setAssets(data)
                    setLoading(false);
                }
            })
            return () => mounted = false;
    }, [])

    rows = assets.map( (i) => {
        return {
            id: i.id,
            name: i.name,
            hashRate: i.metrics.mining_stats.hash_rate,
            thirtyDayHR: i.metrics.mining_stats.hash_rate_30d_average,
            miningRev: i.metrics.mining_stats.mining_revenue_usd,
        }
    })

   

    const indexOfLastAsset = currentPage * assetsPerPage;
    const indexOfFirstAsset = indexOfLastAsset - assetsPerPage;
    const currentAssets = rows.slice(indexOfFirstAsset, indexOfLastAsset);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    

    return (
        <div style={{ height: 400, width: '100%' }}> 
            <MiningTable assets={currentAssets} loading={loading}/>
            <Pagination
            assetsPerPage={assetsPerPage}
            totalAssets={rows.length}
            paginate={paginate}
            />
        </div>
    );
  };
  
  export default Mining;