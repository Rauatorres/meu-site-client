import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

export default props=>{
    const [mailerState, setMailerState] = useState({
        nome: "",
        email: "",
        tel: "",
        msg: ""
    })

    async function submitEmail(e) {
        e.preventDefault()
        const response = await fetch('https://meu-site-client.onrender.com:10000/sendemail', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ mailerState })
        })
        .then((res) => res.json())
        .then(() => {
            setMailerState({
                nome: "",
                email: "",
                tel: "",
                msg: ""
            })
        })
    }

    function handleStateChange(e) {
        setMailerState({
            ...mailerState,
            [e.target.name]: e.target.value
        })
    }

    return(
        <Form className='ContatoFormulario' onSubmit={submitEmail}>
            <Form.Group className='FormRow'>
                <Form.Control className='FormInput' onChange={handleStateChange} id='nome' type='text' name='nome' placeholder='Nome' size='sm'/>
            </Form.Group>
            <Row className='FormRow'>
                <Form.Group as={Col}>
                    <Form.Control className='FormInput' onChange={handleStateChange} id='email' type='email' name='email' placeholder='Email' size='sm'/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Control className='FormInput' onChange={handleStateChange} id='tel' type='tel' name='tel' placeholder='Telefone' size='sm'/>
                </Form.Group>
            </Row>
            <Form.Group className='FormRow MsgRow'>
                <Form.Control className='FormInput MsgInput' onChange={handleStateChange} id='msg' as='textarea' name='msg' placeholder='Escreva uma mensagem...' size='sm' rows={6}/>
            </Form.Group>
            <Button type='submit' variant='light' className='Submit'>Enviar</Button>
        </Form>
    )
}