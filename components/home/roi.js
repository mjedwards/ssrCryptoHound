import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AssetsTable from '../tables/assetsTable'
import Pagination from './pagination'



const Roi = () => {
    let rows = { id:"", symbol: "", name: "", price: null, mcap: null, TwoFourH: null}
    const [assets, setAssets] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [assetsPerPage] = useState(5);

    
    useEffect(() => {
        setLoading(true);
        const fetchData = () => {axios.get('https://data.messari.io/api/v2/assets').then(res => {
            const data = res.data.data
            setAssets(data)
            setLoading(false);
        })}
            const timer = setTimeout(() => {
                fetchData();
              }, 10000);
            return () => clearTimeout(timer);
    }, [assets])


    rows = assets.map( (i) => {
        return {
            id: i.id,
            symbol: i.symbol,
            name: i.name,
            price: i.metrics.market_data.price_usd,
            mcap: i.metrics.marketcap.current_marketcap_usd,
            TwoFourH: i.metrics.market_data.percent_change_usd_last_24_hours
        }
    })

    const indexOfLastAsset = currentPage * assetsPerPage;
    const indexOfFirstAsset = indexOfLastAsset - assetsPerPage;
    const currentAssets = rows.slice(indexOfFirstAsset, indexOfLastAsset);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    

    return (
        <div style={{ height: 400, width: '100%' }}> 
            <AssetsTable assets={currentAssets} loading={loading} />
            <Pagination
            assetsPerPage={assetsPerPage}
            totalAssets={rows.length}
            paginate={paginate}
            />
        </div>
    );
  };
  
  export default Roi;