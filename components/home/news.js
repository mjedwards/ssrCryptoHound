import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewsTable from '../tables/newsTable'
import Pagination from './pagination'

const News = () => {
    let rows = { id: "", date: "", event: "", author: "", url: "" }
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [assetsPerPage] = useState(4);
    useEffect(() => {
        setLoading(true);
        let mounted = true;
            axios.get("https://data.messari.io/api/v1/news").then(res => {
                const data = res.data.data
                if(mounted) {
                    setNews(data)
                    setLoading(false);
                    return () => mounted = false;
                }
            })
    },[])
    rows = news.map( (i) => {
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
            <NewsTable assets={currentAssets} loading={loading}/>
            <Pagination
            assetsPerPage={assetsPerPage}
            totalAssets={rows.length}
            paginate={paginate}
            />
        </div>
    )
}

export default News;
