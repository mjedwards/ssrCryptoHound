import {React, useState }from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import Pagination from '../home/pagination'

const FundamentalsTable = ({ assets, loading, properties }) => {
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
        <h1>FUNDAMNETALS</h1>
        <Table inverted sortable textAlign="center" striped fixed style={{background: "black !important"}}>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell style={{color: '#0070f3 !important'}}>NAME</Table.HeaderCell>
            <Table.HeaderCell style={{color: '#0070f3 !important'}}>CURRENT<br/>MCAP</Table.HeaderCell>
            <Table.HeaderCell style={{color: '#0070f3 !important'}}>Y+10 MCAP</Table.HeaderCell>
        </Table.Row>
        </Table.Header>

        <Table.Body>
            {assets.map((i, index)  => {
                return (
                    <Table.Row key={index} onClick={handleClick} className={isActivated}>
                        <Table.Cell singleLine>
                            <h5>{i.symbol}</h5>
                            {i.name}
                        </Table.Cell>
                        <Table.Cell>
                            {i.mcap}
                        </Table.Cell>
                        <Table.Cell>
                            {i.ymcap}
                        </Table.Cell>
                    </Table.Row>
                )
            })}
            
        </Table.Body>
    </Table> 
      </div>
    
  );
};

export default FundamentalsTable;