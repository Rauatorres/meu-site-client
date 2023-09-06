import React from 'react'
import Habilidade from './Habilidade'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faGears, faDatabase, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { MdDevices } from 'react-icons/md'

import './css/Habilidades.css'

export default props=>
<section className='HabilidadesSection'>
    <div className='ImagemDeFundo'></div>
    <h1 className='HabilidadesTitulo Fonte2'>Minhas Habilidades</h1>
    <div className='HabilidadesArea'>
        <Habilidade icone={MdDevices()} texto='Desenvolvimento de interfaces responsivas com design elegante, inteligente e minimalista' />
        <Habilidade icone={<FontAwesomeIcon icon={faBarsStaggered}/>} texto='Programação estruturada e orientada a objetos com arquitetura MVC' />
        <Habilidade icone={<FontAwesomeIcon icon={faGears}/>} texto='Criação de APIs REST' />
        <Habilidade icone={<FontAwesomeIcon icon={faDatabase}/>} texto='Sistemas de banco de dados relacionais e não relacionais' />
        <Habilidade icone={<FontAwesomeIcon icon={faCodeBranch}/>} texto='Versionamento e gerenciamento de código fonte com git e github' />
    </div>

</section>