import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

import '../../css/content/Descricao.css'
import '../../css/content/Home.css'

export default props=>
<section className='HomeDescricaoSection'>
  <article className='HomeDescricao'>
    <h2 className='HomeTitulo DescTitulo Fonte1'>Sobre Mim</h2>
    <h3 className='DescTexto Fonte2'>
      Programador web fullstack. 
      Desenvolvo a parte visual e interativa do site no lado do cliente e o código no lado do servidor, 
       manipulação de banco de dados e APIs. Programo em React e Node.JS</h3>
    <button className='DescButton'>
      <Link to='/sobre' className='Link DescButtonColor'>Veja Minhas Habilidades <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{margin: "0px", marginLeft: "1rem"}}/></Link>
      </button>
  </article>
</section>
