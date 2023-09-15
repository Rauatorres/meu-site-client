import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

export default props=>
<Form className='ContatoFormulario' action='mailto:rauatorres@gmail.com' method='post'>
    <Form.Group className='FormRow'>
        <Form.Control className='FormInput' id='nome' type='text' name='nome' placeholder='Nome' size='sm'/>
    </Form.Group>
    <Row className='FormRow'>
        <Form.Group as={Col}>
            <Form.Control className='FormInput' id='email' type='email' name='email' placeholder='Email' size='sm'/>
        </Form.Group>
        <Form.Group as={Col}>
            <Form.Control className='FormInput' id='tel' type='tel' name='tel' placeholder='Telefone' size='sm'/>
        </Form.Group>
    </Row>
    <Form.Group className='FormRow MsgRow'>
        <Form.Control className='FormInput MsgInput' id='msg' as='textarea' name='msg' placeholder='Escreva uma mensagem...' size='sm' rows={6}/>
    </Form.Group>
    <Button type='submit' variant='light' className='Submit'>Enviar</Button>
</Form>