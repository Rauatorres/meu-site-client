import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'

import './css/Sobre.css'
 
export default props=>
<section className='HomeSobreSecao'>
    <Container fluid>
        <Row className='HomeSobreArea'>
            <Col className='SobreCol'>
                <div className='MinhaFoto'></div>
            </Col>
            <Col className='SobreCol'>
                <h1 className='HomeSobreTitulo Fonte2'>Olá, Meu Nome é Rauã Torres!</h1>
                <p className='HomeSobreDescricao'>
                    Eu sou desenvolvedor web <strong className='HomeSobrePalavraFullstack'>fullstack</strong>
                </p>
                <Button className='HomeSobreButtonProjetos' variant='outline-light'>Saiba mais sobre mim</Button>
            </Col>
        </Row>
    </Container>
</section>