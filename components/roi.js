import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { interval } from 'rxjs';
import { XGrid, GridOverlay } from '@material-ui/x-grid';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';



// function CustomLoadingOverlay() {
//     return (
//       <GridOverlay>
//         <div style={{ position: 'absolute', top: 0, width: '100%' }}>
//           <LinearProgress />
//         </div>
//       </GridOverlay>
//     );
//   }
// const columns = [
//     { field: 'id' },
//     { field: 'symbol', width: 150 },
//     { field: 'name', width: 80, type: 'number' },
//   ];
  
//   const rows = [
//     { id: 1, username: randomUserName(), age: randomInt(10, 80) },
//     { id: 2, username: randomUserName(), age: randomInt(10, 80) },
//     { id: 3, username: randomUserName(), age: randomInt(10, 80) },
//     { id: 4, username: randomUserName(), age: randomInt(10, 80) },
//   ];

const Roi = () => {
    const columns = [ 
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'symbol', width: 150 },
        { field: 'name', width: 80 },
        { field: 'price', width: 80, type: 'number' }
    ]
    let rows = [{ id: 1, symbol: "", name: "", price: null}]
    const [assets, setAssets] = useState([])
    // const { data } = useDemoData({
    //     dataSet: assets,
    //     rowLength: 100,
    //     maxColumns: 6,
    //   });
    useEffect(() => {
        try {
            axios.get('https://data.messari.io/api/v2/assets').then(res => {
                const data = res.data.data
                setAssets(data)
            })
        } catch (error) {
            return error;
        }
    })

    rows = assets.map( (i) => {
        return [{
            id: i.id,
            symbol: i.symbol,
            name: i.name,
            price: i.metrics.market_data.price_usd
        }]
    })
    return (
        <div style={{ height: 400, width: '100%' }}>
            {/* <XGrid rows={rows} columns={columns} /> */}
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
        // <>
        // {console.log(assets)}
        // {console.log(rows)}
        // </>
    //   <div>
    //     {assets === [] ? "Loading Data": assets.map(info => {
    //         return info.name
    //     })}
    //   </div>
        // <div style={{ height: 400, width: '100%' }}>
        //     <DataGrid
        //     {...data}
        //     components={{
        //         Toolbar: GridToolbar,
        //     }}
        //     filterModel={{
        //         items: [
        //         { columnField: 'commodity', operatorValue: 'contains', value: 'rice' },
        //         ],
        //     }}
        //     />
        // </div>
    );
  };
  
  export default Roi;