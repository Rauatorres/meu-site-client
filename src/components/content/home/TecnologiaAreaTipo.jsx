import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft, faAnglesRight, faSort } from '@fortawesome/free-solid-svg-icons'

export default props=>
<div className='TecnologiasTipoArea'>
    <h3 className='TecnologiasTipoTitulo' >{props.tipo}</h3>
    <div className='TecnologiasArea'>
        {props.children}
    </div>
    <div className='TecnologiasAreaDeslize'>
        <FontAwesomeIcon icon={faAnglesLeft}/>
        <FontAwesomeIcon icon={faAnglesLeft}/>
        <span className='TecnologiasPalavraDeslize'>Deslize</span> 
        <FontAwesomeIcon icon={faAnglesRight}/>
        <FontAwesomeIcon icon={faAnglesRight}/>
    </div>
    <div className='TecnologiasAreaDeslizeVertical'>
        <span className='TecnologiasPalavraDeslize'>Rolagem</span> 
        <FontAwesomeIcon icon={faSort}/>
    </div>
</div>