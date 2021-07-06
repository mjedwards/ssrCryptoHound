import React, {useEffect, useState} from "react";
import LineChart from "./chart/LineChart";
import Label from "./chart/AxisLabel";
import ChartTitle from "./chart/ChartTitle";
import axios from 'axios'



const styles = {
  chartComponentsContainer: {
    display: 'grid', gridTemplateColumns: 'max-content 600px', alignItems: 'center'
  },
  chartWrapper: { maxWidth: 600, alignSelf: 'flex-start' }
}


const Chart = () => {
  let coinHistory = []
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    
        axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1622525134&to=1625030734`).then(res => {
          const data = res.data.prices  
            if(mounted) {
              setData(data)
              setLoading(false);
            }
            })
        return () => mounted = false;
    }, [])
    
    
    coinHistory.push(data.map((i, index) => {
      return (
        { 
          label: new Date(i[0]).toDateString().slice(0,3), 
          x: index, 
          y: i[1] 
        }
      )
    })) 

  return (
    <div style={styles.chartComponentsContainer}>
      <div/>
      <ChartTitle text="Chart"/>
      <Label text="Price" rotate/>
      <div style={styles.chartWrapper}>
        <LineChart
          width={500 }
          height={300}
          data={coinHistory}
          horizontalGuides={5}
          precision={2}
          verticalGuides={1}
        />
      </div>
      <div/>
      <Label text="Time"/>
    </div>
  );
}

export default Chart;