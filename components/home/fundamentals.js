import React, { useState } from 'react'
import FundamentalsTable from '../tables/fundamentalsTable'
import Pagination from './pagination'



const Fundamentals = ({data}) => {
    let rows = { id:"", symbol: "", name: "", mcap: null, ymcap: null}
    const [currentPage, setCurrentPage] = useState(1)
    const [assetsPerPage] = useState(9);


    rows = data.data.map( (i) => {
        return {
            id: i.id,
            symbol: i.symbol,
            name: i.name,
            mcap: i.metrics.marketcap.current_marketcap_usd,
            ymcap: i.metrics.marketcap.y_plus10_marketcap_usd
        }
    })

    const indexOfLastAsset = currentPage * assetsPerPage;
    const indexOfFirstAsset = indexOfLastAsset - assetsPerPage;
    const currentAssets = rows.slice(indexOfFirstAsset, indexOfLastAsset);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    

    return (
        <div style={{ height: 400, width: '100%' }}> 
            <FundamentalsTable assets={currentAssets} />
            <Pagination
            assetsPerPage={assetsPerPage}
            totalAssets={rows.length}
            paginate={paginate}
            />
        </div>
    );
  };
  
  export default Fundamentals;