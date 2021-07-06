import {React, useState }from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import Pagination from '../home/pagination'

const SectorsTable = ({ assets, loading}) => {
    const mcap = ['750B', '360B', '84.56B', '7.5B', '53.86B', '22.67B', '21.14B', '9.43B', '113B']
    const random = Math.floor(Math.random() * mcap.length);
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
        <h1>SECTORS</h1>
        <Table inverted sortable  textAlign="center" striped fixed style={{background: "black !important"}}>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell style={{color: '#0070f3 !important'}}>Name</Table.HeaderCell>
            <Table.HeaderCell style={{color: '#0070f3 !important'}}>7D</Table.HeaderCell>
            <Table.HeaderCell style={{color: '#0070f3 !important'}}>MCAP</Table.HeaderCell>
        </Table.Row>
        </Table.Header>

        <Table.Body>
            {assets.map( (i, index)  => {
                return (
                    <Table.Row key={index} onClick={handleClick} className={isActivated}>
                        <Table.Cell singleLine>
                            {!i.sector ? "Privacy" : i.sector}
                        </Table.Cell>
                        <Table.Cell style={{color: "green"}}>
                            8%
                        </Table.Cell>
                        <Table.Cell>
                            113B
                        </Table.Cell>
                    </Table.Row>
                )
            })}
            
        </Table.Body>
    </Table> 
      </div>
  );
};

export default SectorsTable;