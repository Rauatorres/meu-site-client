import React from 'react'

export default props=>{
    // function mostrarProjeto(projeto){
    //     props.selecionar(projeto)
    // }

    // return(
    //     <h3 onClick={()=>{mostrarProjeto(props.index)}} className={'ProjetoBotaoSelecao ' + props.classe}>{props.titulo}</h3>
    // )
    const imgPath = `https://meu-site-api.onrender.com/projetos_img/${props.img}`
    return (
        <div className={props.classeScroll + (props.selecionado ? 'HomeProjetoImgSelecionado' : null)} onClick={()=>{props.selecionar(props.numProjeto)}}>
            <img className='HomeProjetoImg' src={imgPath} alt="" />
        </div>
    )
}
