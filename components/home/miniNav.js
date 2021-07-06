import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Menu } from 'semantic-ui-react'
import styles from '../../styles/pagination.module.css';
import Research from './research';


const MiniNav = () => {
  let navItems = { id: "", symbol: ""}
  let rows = { id: "", date: "", event: "", author: "", url: "" }
  const [assets, setAssets] = useState([])
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    let mounted = true;
        axios.get(`https://data.messari.io/api/v2/assets`).then(res => {
            const data = res.data.data
            if(mounted) {
                setAssets(data)
                setLoading(false);
            }
        })
        return () => mounted = false;
    }, [])

    navItems = assets.map( (i) => {
        return {
            id: i.id,
            symbol: i.symbol,
        }
    });

    news === null ? rows = [{ id: "Not available", date: "N/A", event: "Not available", author: "Not available", url: "Not available"}] : rows = news.map( (i) => {
        return {
            id: i.id,
            date: i.published_at, 
            event: i.title, 
            author: i.author.name, 
            url: i.url
        }
    })
    return (
        <div>
            <h1>RESEARCH</h1>
            <nav>
            <Menu className={styles.pagination} inverted style={{overflowX: 'scroll', width: '650px', justifyContent: 'flex-start'}}>
                {navItems.map(item => (
                <Menu.Item style={{fontSize: "0.8rem"}} key={item.id} className='page-item' as='a' onClick={() => {
                    axios.get(`https://data.messari.io/api/v1/news/${item.symbol}`).then(res => {
                        const data = res.data.data
                        setNews(data)
                        setLoading(false);
                    })
                }}>
                    {item.symbol}
                </Menu.Item>
                ))}
            </Menu>
            {rows === [] ? <Research rows={news}/> : <Research rows={rows}/>}
            </nav>
        </div>
        );
};

export default MiniNav;