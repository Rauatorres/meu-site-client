import React from 'react'
import {Link} from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

import './css/Footer.css'

export default props=>
<footer>
  <div className='FooterBox FooterLinks'>
    <h3 className='FooterTitulo'>Ir Para</h3>
    <div className='FooterSiteLinks'>
      <Link className='FooterLink FooterSiteLink' to='https://meu-site-client.onrender.com/'>Home</Link>
      <Link className='FooterLink FooterSiteLink' to='https://meu-site-client.onrender.com/sobre'>Sobre Mim</Link>
      <Link className='FooterLink FooterSiteLink' to='https://meu-site-client.onrender.com/projetos'>Projetos</Link>
    </div>
  </div>
  <div className='FooterBox FooterRedes'>
    <h3 className='FooterTitulo'>Minhas Redes</h3>
    <div className='FooterRedesLinks'>
      <span><Link className='FooterLink FooterRedeLink' to='https://github.com/Rauatorres' target='_blank'><FontAwesomeIcon icon={faGithub} /></Link></span>
      <span><Link className='FooterLink FooterRedeLink' to='https://www.linkedin.com/in/rauatorres/' target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></Link></span>
    </div>
  </div>
  <div className='FooterBox FooterCreditos'>
    <h3 className='FooterTitulo'>Criado por</h3>
    <div className='TextoCreditos'>Rauã Torres &copy;</div>
  </div>
</footer>