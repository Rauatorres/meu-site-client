import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

export default props=>
<section className='FormSection'>
    <Form action='/contato' method='get' >
        <Form.Group className='FormRow'>
            <Form.Label htmlFor='nome' className='FormLabel'>Nome</Form.Label>
            <Form.Control className='FormInput' id='nome' type='text' name='nome' placeholder='Digite o seu nome' size='sm'/>
        </Form.Group>
        <Row className='FormRow'>
            <Form.Group as={Col}>
                <Form.Label htmlFor='email' className='FormLabel'>Email</Form.Label>
                <Form.Control className='FormInput' id='email' type='email' name='email' placeholder='Digite seu email' size='sm'/>
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label htmlFor='tel' className='FormLabel'>Telefone</Form.Label>
                <Form.Control className='FormInput' id='tel' type='tel' name='tel' placeholder='Ex: 00 91234 5678' size='sm' pattern='[0-9]{2} [9-9]{1}[0-9] {4}[0-9]{4}'/>
            </Form.Group>
        </Row>
        <Form.Group className='FormRow'>
            <Form.Label htmlFor='msg' className='FormLabel'>Mensagem</Form.Label>
            <Form.Control className='FormInput' id='msg' as='textarea' name='msg' placeholder='Escreva uma mensagem...' size='sm' rows={6}/>
        </Form.Group>
        <Button type='submit' className='Submit'>Enviar</Button>
    </Form>
</section>