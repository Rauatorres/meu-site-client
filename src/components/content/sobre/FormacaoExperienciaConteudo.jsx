import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons'

export default props=>
<ul className='ExperienciaLista'>
    <li>
        <h4 className='ExperienciaTitulo'>{props.titulo}</h4>
    </li>
    <li className='ExperienciaTempo'>
        <FontAwesomeIcon className='ExperienciaTempoIcone' icon={faHourglassHalf}/> {props.tempo}
    </li>
</ul>