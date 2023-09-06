import React from 'react'

export default props=> {
    const imgPath = `http://localhost:3001/projetos_img/${props.img}`
    return (
        <div className='ProjetoMiniatura' onClick={props.click}>
            <img className='ProjetoMiniaturaImg' src={imgPath} alt="Imagem" />
            <div className='ProjetoMiniaturaTituloArea'>
                <h3 className='ProjetoMiniaturaTitulo'>{props.titulo}</h3>
            </div>
        </div>
    )
}
