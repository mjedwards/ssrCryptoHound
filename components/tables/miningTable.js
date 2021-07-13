import {React, useState }from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import Pagination from '../home/pagination'

const MiningTable = ({ assets, loading}) => {
    const [isActivated, setIsActived] = useState("");
    const handleClick = (e) => {
        if (e) {
            setIsActived("active")
        } 
        if (e && isActivated === "active") {
            setIsActived("")
        }
    }

  return (
      <div>
        <h1>MINING STATS</h1>
        <Table inverted sortable  textAlign="center" striped fixed style={{background: "black !important"}}>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell style={{color: '#0070f3 !important'}}>Name</Table.HeaderCell>
            <Table.HeaderCell style={{color: '#0070f3 !important'}}>Hash Rate</Table.HeaderCell>
            <Table.HeaderCell style={{color: '#0070f3 !important'}}>30D Hash Rate</Table.HeaderCell>
            <Table.HeaderCell style={{color: '#0070f3 !important'}}>Mining Revenue</Table.HeaderCell>
        </Table.Row>
        </Table.Header>

        <Table.Body>
            {assets.map((i, index)  => {
                return (
                    <Table.Row key={index} onClick={handleClick} className={isActivated}>
                        <Table.Cell singleLine>
                            {i.name}
                        </Table.Cell>
                        <Table.Cell>
                            {i.hashRate}
                        </Table.Cell>
                        <Table.Cell>
                            {i.thirtyDayHR}
                        </Table.Cell>
                        <Table.Cell>
                            {i.miningRev}
                        </Table.Cell>
                    </Table.Row>
                )
            })}
            
        </Table.Body>
    </Table> 
      </div>
  );
};

export default MiningTable;