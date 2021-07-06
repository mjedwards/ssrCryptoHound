import React from 'react'
import { List } from 'semantic-ui-react'

const Footer = () => (
  <List link horizontal inverted style={{marginBottom: '20px'}}>
    <List.Item as='a'>Home</List.Item>
    <List.Item as='a'>About</List.Item>
    <List.Item as='a'>Jobs</List.Item>
    <List.Item as='a'>Team</List.Item>
  </List>
)

export default Footer