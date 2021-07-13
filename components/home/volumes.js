import React, { useState } from 'react'
import VolumeTable from '../tables/volumeTable'
import Pagination from './pagination'



const Volume = ({data}) => {
    let rows = { id:"", symbol: "", name: "", volReal: null, vol: null, mcap: null}
    const [currentPage, setCurrentPage] = useState(1)
    const [assetsPerPage] = useState(5);


    rows = data.data.map( (i) => {
        return {
            id: i.id,
            symbol: i.symbol,
            name: i.name,
            volReal: i.metrics.market_data.real_volume_last_24_hours,
            vol: i.metrics.market_data.volume_last_24_hours,
            mcap: i.metrics.marketcap.current_marketcap_usd
        }
    })

    const indexOfLastAsset = currentPage * assetsPerPage;
    const indexOfFirstAsset = indexOfLastAsset - assetsPerPage;
    const currentAssets = rows.slice(indexOfFirstAsset, indexOfLastAsset);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    

    return (
        <div style={{ height: 400, width: '100%' }}> 
            <VolumeTable assets={currentAssets} />
            <Pagination
            assetsPerPage={assetsPerPage}
            totalAssets={rows.length}
            paginate={paginate}
            />
        </div>
    );
  };
  
  export default Volume;