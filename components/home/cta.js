import React from 'react'
import { Message, Container, Button } from 'semantic-ui-react'

const Cta = () => {
    return (
        <Container fluid>
            <Message
                info
                header='Was this what you wanted?'
                content="Get ahead of the curve with industry leading market intelligence covering 100+ top protocols."
                size="big"
            />
            <Button color='blue'>TRY FOR FREE</Button>
        </Container>
    )
}

export default Cta;
