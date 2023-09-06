import React, { useState, useEffect } from 'react'
import Projeto from './Projeto'
import axios from 'axios'

export default props=>{
    const [projetosLista, setProjetosLista] = useState([])

    async function getProjetosLista(){
        let res = await axios.get('https://meu-site-api.onrender.com/api/projetos')
        setProjetosLista(res.data)
    }

    useEffect(async ()=>{
        await getProjetosLista()
    }, [])




    return (
        <section className='ProjetosSection'>
            {
                projetosLista.map(projeto=>{
                    return (
                        <Projeto titulo={projeto.titulo} img={projeto.img} link={projeto.link}>
                            {projeto.descricao}
                        </Projeto>
                    )
                })
            }
        </section>
    )
}