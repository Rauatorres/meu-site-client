import React from 'react'
import { Card } from 'react-bootstrap'



export default props=>
<Card className='FormacaoCard'>
    <div className='FormacaoCardIcone'>{props.icone}</div>
    <Card.Title className='FormacaoCardTitulo'>{props.titulo}</Card.Title>
    <Card.Body>
        {props.children}
    </Card.Body>
</Card>