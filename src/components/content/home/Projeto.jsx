import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default props=>{
    const imgPath = `https://meu-site-api.onrender.com/projetos_img/${props.img}`
    return (
        <div className='HomeProjeto'>
            <h2 className={'HomeProjetoTitulo ' + props.classe}>{props.titulo}</h2>
            <div className={'HomeProjetoDesc ' + props.classe}>{props.desc}</div>
            <Button className='HomeProjetoBotaoVer' variant='outline-danger'>ver projeto</Button>
        </div>
    )
}