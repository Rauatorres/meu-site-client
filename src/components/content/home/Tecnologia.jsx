import React from 'react'
import { Link } from 'react-router-dom'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

export default props=>{
    var imgUrl = `https://meu-site-api.onrender.com/tecnologias_img/${props.img}`
    return (
        <div className={'Tecnologia ' + props.classe}>
            <div className='TecnologiaImgArea'>
                <OverlayTrigger placement='bottom' overlay={<Tooltip>{props.link_original}</Tooltip>}>
                    <img src={imgUrl} alt={props.img} className={'TecnologiaImg ' + props.classe}/>
                </OverlayTrigger>
            </div>
            <h4 className={'TecnologiaNome ' + props.classe}>{props.nome}</h4>
        </div>
    )

}