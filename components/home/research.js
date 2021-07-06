import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ResearchTable from '../tables/researchTable'
import Pagination from './pagination'

const Research = (props) => {
    let row = props.rows === null ? [{id: "Not Available", date: "Not Available", event: "Not Available", author: "Not Available", url: "Not Available"}*20] : props.rows
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [assetsPerPage] = useState(4);

    const indexOfLastAsset = currentPage * assetsPerPage;
    const indexOfFirstAsset = indexOfLastAsset - assetsPerPage;
    const currentAssets = row.slice(indexOfFirstAsset, indexOfLastAsset)
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    return (
        <div style={{ height: 400, width: '100%' }}> 
            <ResearchTable assets={currentAssets} loading={loading}/>
            <Pagination
            assetsPerPage={assetsPerPage}
            totalAssets={row.length}
            paginate={paginate}
            />
        </div>
    )
}

export default Research;
