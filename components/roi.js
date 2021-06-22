import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AssetsTable from './assetsTable'
import Pagination from './pagination'


// function sortReducer(state, action) {
//     switch (action.type) {
//       case 'CHANGE_SORT':
//         if (state.column === action.column) {
//           return {
//             ...state,
//             data: state.data.slice().reverse(),
//             direction:
//               state.direction === 'ascending' ? 'descending' : 'ascending',
//           }
//         }
  
//         return {
//           column: action.column,
//           data: _.sortBy(state.data, [action.column]),
//           direction: 'ascending',
//         }
//       default:
//         throw new Error()
//     }
//   }

const Roi = () => {
    let rows = { id:"", symbol: "", name: "", price: null, market_cap: null, TwoFourH: null}
    const [assets, setAssets] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [assetsPerPage] = useState(5);

    
    useEffect(() => {
        setLoading(true);
        try {
            axios.get('https://data.messari.io/api/v2/assets').then(res => {
                const data = res.data.data
                setAssets(data)
                setLoading(false);
            })
        } catch (error) {
            return error;
        }
    })
    rows = assets.map( (i) => {
        return {
            id: i.id,
            symbol: i.symbol,
            name: i.name,
            price: i.metrics.market_data.price_usd,
            market_cap: i.metrics.marketcap.current_marketcap_usd,
            TwoFourH: i.metrics.market_data.percent_change_usd_last_24_hours
        }
    })

    const indexOfLastAsset = currentPage * assetsPerPage;
    const indexOfFirstAsset = indexOfLastAsset - assetsPerPage;
    const currentAssets = rows.slice(indexOfFirstAsset, indexOfLastAsset);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    

    return (
        <div style={{ height: 400, width: '100%' }}> 
        <AssetsTable assets={currentAssets} loading={loading}/>
        <Pagination
        assetsPerPage={assetsPerPage}
        totalAssets={rows.length}
        paginate={paginate}
      />
            {/* <Table celled inverted sortable small textAlign="center" striped>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell sorted>NAME</Table.HeaderCell>
                    <Table.HeaderCell sorted>PRICE</Table.HeaderCell>
                    <Table.HeaderCell sorted>MCAP</Table.HeaderCell>
                    <Table.HeaderCell sorted>24H</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    {rows.map(i  => {
                        return (
                            <Table.Row key={i.id} onClick={handleClick} className={isActivated}>
                                <Table.Cell>
                                    <h5>{i.symbol}</h5>
                                    {i.name}
                                </Table.Cell>
                                <Table.Cell>
                                    {i.price}
                                </Table.Cell>
                                <Table.Cell>
                                    {i.market_cap}
                                </Table.Cell>
                                <Table.Cell className={i.TwoFourH > 0 ? "positive" : "negative"}>
                                    {i.TwoFourH}
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                    
                </Table.Body>

                <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='3'>
                    <Menu floated='right' pagination>
                        <Menu.Item as='a' icon>
                        <Icon name='chevron left' />
                        </Menu.Item>
                        <Menu.Item as='a'>1</Menu.Item>
                        <Menu.Item as='a'>2</Menu.Item>
                        <Menu.Item as='a'>3</Menu.Item>
                        <Menu.Item as='a'>4</Menu.Item>
                        <Menu.Item as='a' icon>
                        <Icon name='chevron right' />
                        </Menu.Item>
                    </Menu>
                    </Table.HeaderCell>
                </Table.Row>
                </Table.Footer>
            </Table> */}
        </div>
    );
  };
  
  export default Roi;