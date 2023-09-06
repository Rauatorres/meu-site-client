import React from 'react'

export default props=>
<ul className='ExperienciaLista'>
    <li>
        <h4 className='ExperienciaTitulo'>{props.titulo}</h4>
    </li>
    <li className='ExperienciaItemLista'>
        <span className='ExperienciaItemTitulo'>Tempo:</span> {props.tempo}
    </li>
    <li className='ExperienciaItemLista'>
        <span className='ExperienciaItemTitulo'>Tecnologias usadas:</span> {props.tecnologias}
    </li>
</ul>