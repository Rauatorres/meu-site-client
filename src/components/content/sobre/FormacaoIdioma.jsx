import React from 'react'

export default props=>
<div className='Idioma'>
    <h4><span className={'fi fi-' + props.icone + ' IconeIdioma'}></span><span className='IdiomaNome'>{props.idioma}</span></h4><span className={'IdiomaNivel ' + props.nivel}>{props.nivel}</span>
</div>