import React from 'react'
import {Link} from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

import './css/Footer.css'

export default props=>
<footer>
  <div className='FooterRedes'>
    <h3 className='FooterTitulo'>Minhas Redes</h3>
    <div className='FooterRedesIcones FooterLinkArea'>
      <span><Link className='Link' to='https://github.com/Rauatorres' target='_blank'><FontAwesomeIcon icon={faGithub} /></Link></span>
      <span><Link className='Link' to='https://www.linkedin.com/in/rauatorres/' target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></Link></span>
    </div>
  </div>
  <div className='FooterContato'>
    <h3 className='FooterTitulo'>Contato</h3>
    <span className='FooterLinkArea'><Link to='/contato' className='Link FooterLinkContato'><FontAwesomeIcon icon={faEnvelope}/> Envie Sua Mensagem</Link></span>
  </div>
  <div className='FooterCreditos'>
    <div className='TextoCreditos'>Site Criado por <strong>Rauã Torres</strong></div>
  </div>
</footer>