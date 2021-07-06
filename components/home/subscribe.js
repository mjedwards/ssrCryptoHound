import React from 'react'
import { Table, Segment, Input, Message  } from 'semantic-ui-react'

const Subscribe = () => (
    <div>
        <Table singleLine inverted>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell style={{color: '#0070f3 !important'}}>SUBSCRIBE</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body style={{backgroundColor: '#080A0C'}}>
            <Table.Row>
                <Table.Cell style={{display: 'flex', justifyContent: 'center'}}>
                    <Message compact style={{backgroundColor: '#080A0C', color: 'white', textAlign: 'center'}}>
                        <Message.Header>SUBSCRIBE TO OUR DAILY NEWSLETTER</Message.Header>
                        <p>Join 100,000 professionals and investors who read daily insights 
                            <br/>from the most experienced research team in crypto.</p>
                        <Segment basic textAlign='center'>
                        <Input
                        action={{ color: 'blue', content: 'Subscribe'}}
                        iconPosition='left'
                        placeholder='Email Address'
                        />
                        </Segment>
                    </Message>
                </Table.Cell>
            </Table.Row>
            </Table.Body>
        </Table>
    </div>
)

export default Subscribe;