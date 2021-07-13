import {React, useState }from 'react';
import { Table } from 'semantic-ui-react'
import Pagination from '../home/pagination'

const WacthlistTable = ({ assets, loading, properties }) => {
    const [isActivated, setIsActived] = useState("");
    const handleClick = (e) => {
        if (e) {
            setIsActived("active")
        } 
        if (e && isActivated === "active") {
            setIsActived("")
        }
    }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
      <div>
        <h1>WATCHLIST</h1>
        <Table inverted sortable  textAlign="center" striped fixed style={{background: "black !important"}}>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell style={{color: '#0070f3 !important'}}>NAME</Table.HeaderCell>
            <Table.HeaderCell style={{color: '#0070f3 !important'}}>PRICE</Table.HeaderCell>
            <Table.HeaderCell style={{color: '#0070f3 !important'}}>MCAP</Table.HeaderCell>
            <Table.HeaderCell style={{color: '#0070f3 !important'}}>24H</Table.HeaderCell>
        </Table.Row>
        </Table.Header>
        <Table.Body> 
            {assets.map((i, index)  => {
                return (
                    !i.name ? <Table.Row as='tr'>
                        <Table.Cell><div></div></Table.Cell>
                        <Table.Cell>Your watchlist is empty.</Table.Cell>
                        <Table.Cell>Start adding the assets you want to track.</Table.Cell>
                        <Table.Cell><div></div></Table.Cell>
                    </Table.Row> :
                    <Table.Row key={index} onClick={handleClick} className={isActivated}>
                        <Table.Cell singleLine>
                            <h5>{i.symbol}</h5>
                            {i.name}
                        </Table.Cell>
                        <Table.Cell>
                            {i.price}
                        </Table.Cell>
                        <Table.Cell>
                            {i.mcap}
                        </Table.Cell>
                        <Table.Cell className={i.TwoFourH > 0 ? "positive" : "negative"}>
                            {i.TwoFourH}
                        </Table.Cell>
                    </Table.Row>   
                )
            })}
        </Table.Body>
    </Table> 
      </div>
    
  );
};

export default WacthlistTable;