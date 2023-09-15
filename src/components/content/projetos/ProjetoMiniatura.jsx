import React from 'react'

export default props=> {
    const imgPath = `https://meu-site-api.onrender.com/projetos_img/${props.img}`
    return (
        <div className={'ProjetoMiniatura ' + props.classe} onClick={props.click}>
            <img className='ProjetoMiniaturaImg' src={imgPath} alt="Imagem" />
            <div className='ProjetoMiniaturaTituloArea'>
                <h3 className='ProjetoMiniaturaTitulo'>{props.titulo}</h3>
            </div>
        </div>
    )
}
