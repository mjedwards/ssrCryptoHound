import React, { useState } from 'react'
import AssetsTable from '../tables/assetsTable'
import Pagination from './pagination'



const Roi = ({data}) => {
    let rows = { id:"", symbol: "", name: "", price: null, mcap: null, TwoFourH: null}
    const [currentPage, setCurrentPage] = useState(1)
    const [assetsPerPage] = useState(5);

    rows = data.data.map( (i) => {
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
            <AssetsTable assets={currentAssets} />
            <Pagination
            assetsPerPage={assetsPerPage}
            totalAssets={rows.length}
            paginate={paginate}
            />
        </div>
    );
  };
  
  export default Roi;