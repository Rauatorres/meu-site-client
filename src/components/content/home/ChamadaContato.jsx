import React from 'react'
import { Button } from 'react-bootstrap'

import './css/ChamadaContato.css'

export default props=>
<section className='ChamadaContatoSection'>
    <h2 className='ChamadaContatoTexto1'>Quer desenvolver um projeto comigo?</h2>
    <h4 className='ChamadaContatoTexto2'>Me Mande uma mensagem e vamos trabalhar juntos!</h4>
    <Button variant='warning' href='/contato' className='ChamadaContatoBotao'>Contato</Button>
</section>