import React from 'react'
import { Message, Container, Button } from 'semantic-ui-react'

const CtaTwo = () => {
    return (
        <Container fluid>
            <Message
                info
                header='Was this what you wanted?'
                content="Gain an edge over the market with professional grade data, tools, and research."
                color="yellow"
                size="big"
            />
            <Button color='yellow'>TRY FOR FREE</Button>
        </Container>
    )
}

export default CtaTwo;
