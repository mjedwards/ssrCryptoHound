import React from 'react'
import { Table, Message, Button  } from 'semantic-ui-react'

const SpecialUpdates = () => (
    <div>
        <h1>UPDATES</h1>
        <Table singleLine inverted>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell style={{color: '#0070f3 !important'}}>SPECIAL UPDATES</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body style={{backgroundColor: '#080A0C'}}>
            <Table.Row>
                <Table.Cell style={{display: 'flex', justifyContent: 'center'}}>
                    <Message compact style={{backgroundColor: '#080A0C', color: 'white', textAlign: 'center'}}>
                        <Message.Header>"An Event" is Back!</Message.Header>
                        <p>
                        Join Us for "An Event" 2021, September 20-22 <br/>
                        at the Pallet Town Gym. <br/>
                        The agenda-setting summit returns, <br/>
                        inviting operators, builders, <br/>
                        and investors to 3-days of future-focused <br/>
                        collaboration, networking, and programming.<br/>
                        Come build with us. 
                        Passes are limited.
                        </p>
                        <Button primary>Register Today</Button>
                    </Message>
                </Table.Cell>
            </Table.Row>
            </Table.Body>
        </Table>
    </div>
)

export default SpecialUpdates