import React, { useState } from 'react'
import WacthlistTable from './tables/wacthlistTable'
import Pagination from './home/pagination'


const Watchlist = () => {
    let rows = [{ id:0, symbol: "", name: "", price: null, mcap: null}]
    const [assets, setAssets] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [assetsPerPage] = useState(5);

    
    const indexOfLastAsset = currentPage * assetsPerPage;
    const indexOfFirstAsset = indexOfLastAsset - assetsPerPage;
    const currentAssets = rows.slice(indexOfFirstAsset, indexOfLastAsset);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    

    return (
        <div style={{ height: 400, width: '100%' }}> 
            <WacthlistTable assets={currentAssets} loading={loading} />
            <Pagination
            assetsPerPage={assetsPerPage}
            totalAssets={rows.length}
            paginate={paginate}
            />
        </div>
    );
  };
  
  export default Watchlist;