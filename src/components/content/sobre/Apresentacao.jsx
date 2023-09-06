import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './css/Apresentacao.css'

export default props=>
<section className='SobreSecaoApresentacao'>
    <Container>
        <h1 className='SobreApresentacaoTitulo'>Sobre Mim</h1>
        <Row>
            <Col sm={6} className='SobreApresentacaoCol'>
                {/* <img src="" alt="" /> */}
                <div className='SobreMinhaFoto'></div>
            </Col>
            <Col className='SobreApresentacaoCol'>
                <p className='SobreApresentacaoDescricao'>
                    Sou desenvolvedor web <strong>fullstack</strong> com foco
                    na linguagem <strong>javascript</strong>. Crio interfaces
                    simples, elegantes e minimalistas, além de sistemas
                    completos e funcionais, aplicando padrões de design e de
                    código.
                </p>
            </Col>
        </Row>
    </Container>
</section>