import React, { useState } from 'react'
import NewsTable from '../tables/newsTable'
import Pagination from './pagination'

const News = ({news}) => {
    let rows = { id: "", date: "", event: "", author: "", url: "" }
    const [currentPage, setCurrentPage] = useState(1)
    const [assetsPerPage] = useState(4);
    
    rows = news.data.map( (i) => {
        return {
            id: i.id,
            date: i.published_at, 
            event: i.title, 
            author: i.author.name, 
            url: i.url
        }
    })

    const indexOfLastAsset = currentPage * assetsPerPage;
    const indexOfFirstAsset = indexOfLastAsset - assetsPerPage;
    const currentAssets = rows.slice(indexOfFirstAsset, indexOfLastAsset);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    return (
        <div style={{ height: 400, width: '100%' }}> 
            <NewsTable assets={currentAssets} />
            <Pagination
            assetsPerPage={assetsPerPage}
            totalAssets={rows.length}
            paginate={paginate}
            />
        </div>
    )
}

export default News;
