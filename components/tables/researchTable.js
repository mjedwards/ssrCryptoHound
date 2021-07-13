import {React, useState }from 'react';
import { Table } from 'semantic-ui-react'

const ResearchTable = ({ assets }) => {
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
        <Table inverted sortable  textAlign="center" striped fixed style={{background: "black !important"}}>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell style={{color: '#0070f3 !important'}}>DATE</Table.HeaderCell>
            <Table.HeaderCell style={{color: '#0070f3 !important'}}>TITLE</Table.HeaderCell>
            <Table.HeaderCell style={{color: '#0070f3 !important'}}>AUTHOR</Table.HeaderCell>
        </Table.Row>
        </Table.Header>
        <Table.Body> 
            {assets.map((i, index)  => {
                return (
                    <Table.Row key={index} onClick={handleClick} className={isActivated}>
                        <Table.Cell singleLine>
                            {!i.date || i.date === null ? "Not Available" : i.date.split('').slice(0,10)}
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

export default ResearchTable;