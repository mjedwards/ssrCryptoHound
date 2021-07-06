import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SectorsTable from '../tables/sectorsTable'
import Pagination from './pagination'


const Sectors = () => {
    let rows = { sector: "" }
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
            sector: i.profile.general.overview.sector,
        }
    })

    const objectsMap = new Map();
    let a = rows.forEach((object) => {
        objectsMap.set(object.sector, object);
    });
    let newData = []
    objectsMap.forEach(item => newData.push({sector: item.sector}));

    const indexOfLastAsset = currentPage * assetsPerPage;
    const indexOfFirstAsset = indexOfLastAsset - assetsPerPage;
    const currentAssets = newData.slice(indexOfFirstAsset, indexOfLastAsset);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    

    return (
        <div style={{ height: 400, width: '100%' }}> 
            <SectorsTable assets={currentAssets} loading={loading}/>
            <Pagination
            assetsPerPage={assetsPerPage}
            totalAssets={rows.length}
            paginate={paginate}
            />
        </div>
    );
  };
  
  export default Sectors;