import React from 'react'
import _ from 'lodash'
import axios from 'axios'

import { Table } from 'semantic-ui-react'

  
const ScreenerTable = () => {    
    //   const [assets, setAssets] = React.useState([])
    //   let tableData = [
    //     { id: '', symbol: '', name: '', price: null, vsUsdOne: null, vsUsdTwoFour: null, mcap: null, volume: null, sector: '' }
    //   ]
      
    //   React.useEffect(() => {
    //       const fetchData = () => {axios.get('https://data.messari.io/api/v2/assets').then(res => {
    //           const data = res.data.data
    //           setAssets(data)
    //       })}
    //       fetchData();
    //   }, [])

    //   tableData = assets.map( (i) => {
    //       return {
    //           id: i.id,
    //           symbol: i.symbol,
    //           name: i.name,
    //           price: i.metrics.market_data.price_usd,
    //           vsUsdOne: i.metrics.market_data.percent_change_usd_last_1_hour,
    //           vsUsdTwoFour: i.metrics.market_data.percent_change_usd_last_24_hours,
    //           mcap: i.metrics.marketcap.current_marketcap_usd,
    //           volume: i.metrics.market_data.real_volume_last_24_hours,
    //           sector: i.profile.general.overview.sector
    //       }
    //   })
      function screenerReducer(state, action) {
        switch (action.type) {
          case 'CHANGE_SORT':
            if (state.column === action.column) {
              return {
                ...state,
                data: state.data.slice().reverse(),
                direction:
                  state.direction === 'ascending' ? 'descending' : 'ascending',
              }
            }
            return {
              column: action.column,
              data: _.sortBy(state.data, [action.column]),
              direction: 'ascending',
            }
        }
      }

    const [state, dispatch] = React.useReducer(screenerReducer, [])

    const fetchData = async () => {
        const response = await axios.get('https://data.messari.io/api/v2/assets');
        console.log(response.data.data.map(i => i.name))
        dispatch({ column: null, data: response.data.data.map(i => {
            return {
                id: i.id,
                symbol: i.symbol,
                name: i.name,
                price: i.metrics.market_data.price_usd,
                vsUsdOne: i.metrics.market_data.percent_change_usd_last_1_hour,
                vsUsdTwoFour: i.metrics.market_data.percent_change_usd_last_24_hours,
                mcap: i.metrics.marketcap.current_marketcap_usd,
                volume: i.metrics.market_data.real_volume_last_24_hours,
                sector: i.profile.general.overview.sector
            }
        }), direction: null });
    };
    React.useEffect(() => {
        fetchData();
      }, []);
      console.log(state)
    // const { column, data, direction } = state
  return (
        <Table sortable inverted striped celled fixed style={{background: "black !important"}}>
            <Table.Header>
                <Table.Row>
                <Table.HeaderCell
                    // sorted={column === 'name' ? direction : null}
                    // onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}
                >
                    NAME
                </Table.HeaderCell>
                <Table.HeaderCell
                    // sorted={column === 'price (usd)' ? direction : null}
                    // onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'price (usd)' })}
                >
                    PRICE (USD)
                </Table.HeaderCell>
                <Table.HeaderCell
                    // sorted={column === 'change vs usd (1h)' ? direction : null}
                    // onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'change vs usd (1h)' })}
                >
                    CHANGE VS USD (1H)
                </Table.HeaderCell>
                <Table.HeaderCell
                    // sorted={column === 'change vs usd (24h)' ? direction : null}
                    // onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'change vs usd (24h)' })}
                >
                    CHANGE VS USD (24H)
                </Table.HeaderCell>
                <Table.HeaderCell
                    // sorted={column === 'reported mcap' ? direction : null}
                    // onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'reported mcap' })}
                >
                    REPORTED MCAP
                </Table.HeaderCell>
                <Table.HeaderCell
                    // sorted={column === 'real volume' ? direction : null}
                    // onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'real volume' })}
                >
                    REAL VOLUME
                </Table.HeaderCell>
                <Table.HeaderCell
                    // sorted={column === 'sector' ? direction : null}
                    // onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'sector' })}
                >
                    SECTOR
                </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            {/* <Table.Body>
                {data.map(({ id, symbol, name, price, vsUsdOne, vsUsdTwoFour, mcap, volume, sector }) => (
                <Table.Row key={id}>
                    <Table.Cell>{name}<br/>{symbol}</Table.Cell>
                    <Table.Cell>{price}</Table.Cell>
                    <Table.Cell style={ vsUsdOne > 0 ? {color: 'green'} : {color: 'red'}}>{vsUsdOne}</Table.Cell>
                    <Table.Cell style={ vsUsdTwoFour > 0 ? {color: 'green'} : {color: 'red'}}>{vsUsdTwoFour}</Table.Cell>
                    <Table.Cell>{mcap}</Table.Cell>
                    <Table.Cell>{volume}</Table.Cell>
                    <Table.Cell>{sector}</Table.Cell>
                </Table.Row>
                ))}
            </Table.Body> */}
        </Table>
  )
}

export default ScreenerTable;