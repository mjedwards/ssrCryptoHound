import {React, useState }from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import Pagination from '../home/pagination'

const NewsTable = ({ assets, loading, properties }) => {
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
        <h1>LATEST NEWS</h1>
        <Table inverted sortable  textAlign="center" striped fixed style={{background: "black !important"}}>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell style={{color: '#0070f3 !important'}}>DATE</Table.HeaderCell>
            <Table.HeaderCell style={{color: '#0070f3 !important'}}>TITLE</Table.HeaderCell>
            <Table.HeaderCell style={{color: '#0070f3 !important'}}>AUTHOR</Table.HeaderCell>
        </Table.Row>
        </Table.Header>
        <Table.Body> 
            {assets.map(i  => {
                return (
                    <Table.Row key={i.id} onClick={handleClick} className={isActivated}>
                        <Table.Cell singleLine>
                            {i.date.split('').slice(0,10)}
                        </Table.Cell>
                        <Table.Cell>
                            <a href={i.url}>{i.event}</a>
                        </Table.Cell>
                        <Table.Cell>
                            {i.author}
                        </Table.Cell>
                    </Table.Row>   
                )
            })}
        </Table.Body>
    </Table> 
      </div>
    
  );
};

export default NewsTable;