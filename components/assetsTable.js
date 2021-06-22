import {React, useState }from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import Pagination from './pagination'

const AssetsTable = ({ assets, loading }) => {
    const [isActivated, setIsActived] = useState("");
    const handleClick = (e) => {
        if (e) {
            setIsActived("active")
        } 
        if (e && isActivated === "active") {
            setIsActived("")
        }
    }
//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

  return (
    <Table celled inverted sortable small textAlign="center" striped fixed>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell sorted>NAME</Table.HeaderCell>
            <Table.HeaderCell sorted>PRICE</Table.HeaderCell>
            <Table.HeaderCell sorted>MCAP</Table.HeaderCell>
            <Table.HeaderCell sorted>24H</Table.HeaderCell>
        </Table.Row>
        </Table.Header>

        <Table.Body>
            {assets.map(i  => {
                return (
                    <Table.Row key={i.id} onClick={handleClick} className={isActivated}>
                        <Table.Cell singleLine>
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
    </Table> 
  );
};

export default AssetsTable;