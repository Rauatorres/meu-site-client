import React, { useState, useEffect } from 'react'
// import ProjetosBotaoSelecao from './ProjetosBotaoSelecao'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

export default props=>{
    const [listaProjetos, setListaProjetos] = useState([])
    
    useEffect(()=>{
        async function getListaProjetos(){
            let res = await axios.get('http://localhost:3001/api/projetos')
            setListaProjetos(res.data)
        }
        getListaProjetos()
    }, [])

    

    return (
            <div className='AreaBotoesSelecaoProjeto'>
                {
                    // listaProjetos.map((projeto, index)=>{
                    //     return (
                    //         <ProjetosBotaoSelecao index={index} selecionar={props.selecionar} titulo={projeto.titulo} key={projeto._id} classe={index == props.selecionado ? 'ProjetoBotaoSelecaoAtual' : null}/>
                    //     )
                    // })
                }
            </div>
    )
}