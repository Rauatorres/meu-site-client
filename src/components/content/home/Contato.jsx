import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ContatoFormulario from './ContatoFormulario'
import ContatoOpcao from './ContatoOpcao'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMessage } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import './css/Contato.css'

export default props=>
<section className='ContatoSecao'>
    <h1 className='ContatoTitulo Fonte2'>Me Mande uma Mensagem</h1>
    <Container fluid>
        <Row className='ContatoRow'>
            <Col>
                <ContatoFormulario/>
            </Col>
            <Col>
                <h2 className='ContatoOpcoesTitulo Fonte2'>Ou se preferir, entre em contato</h2>
                <div className='ContatoOpcoesIconeGrandeArea'>
                    <span className='ContatoOpcoesIconeGrande'><FontAwesomeIcon icon={faMessage}/></span>
                </div>
                <div className='ContatoOpcoes'>
                    <ContatoOpcao texto='rauatorres@gmail.com' icone={<FontAwesomeIcon icon={faEnvelope}/>}/>
                    <ContatoOpcao texto='71 996445495' icone={<FontAwesomeIcon icon={faPhone}/>}/>
                    <ContatoOpcao texto='www.linkedin.com/in/rauatorres' icone={<FontAwesomeIcon icon={faLinkedinIn}/>}/>
                </div>
            </Col>
        </Row>
    </Container>
</section>