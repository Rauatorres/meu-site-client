import React, { useState, useEffect } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import Projeto from './Projeto'
import ProjetoMiniatura from './ProjetoMiniatura'
import axios from 'axios'

import './css/Projetos.css'

export default props=> {
  const [projetos, setProjetos] = useState([])
  const [projetoSelecionado, setProjetoSelecionado] = useState(0)
  const [classe, setClasse] = useState(null)

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        //correção
        const response = await axios.get('https://meu-site-api.onrender.com/api/projetos')
        setProjetos(response.data)
      } catch (error) {
        console.error('Erro ao buscar projetos:', error)
      }
    }

    fetchProjetos()
  }, [])

  function mostrarProjeto(){
    if(projetos.length > 0){
        return(
            <Projeto
            img={projetos[projetoSelecionado].img}
            titulo={projetos[projetoSelecionado].titulo}
            desc={projetos[projetoSelecionado].descricao}
            link={projetos[projetoSelecionado].link}
            tecnologias={projetos[projetoSelecionado].tecnologias}
            classe={classe}
            />
        )
    }else{
      return(
        <Spinner className='ProjetosProjetoSpinner' animation='border' role='status'/>
      )
    }
  }

  function mostrarProjetosMiniatura(){
    if(projetos.length > 0){
      return projetos.map((projeto, index) => {
          return(
            <ProjetoMiniatura
                key={projeto._id}
                img={projeto.img}
                titulo={projeto.titulo}
                click={() => projetoTransicao(index)}
                classe={index == projetoSelecionado ? 'ProjetoMiniaturaSelecionado' : null}
            />
          )
        }
      )
    }else{
      return(
        <Spinner className='ProjetosProjetoMiniaturaSpinner' animation='border' role='status' />
      )
    }
  }

  function projetoTransicao(index){
    setClasse('ProjetoTransicao')
    setTimeout(()=>{
      setProjetoSelecionado(index)
      setTimeout(()=>{
        setClasse(null)
      }, 0)
    }, 500)
  }

  return (
    <section className='ProjetosSecao'>
        <h1 className='ProjetosSecaoTitulo'>Meus Projetos</h1>
        <Container className="AreaProjeto mt-4">
            {mostrarProjeto()}
        </Container>
        <Container className="mt-4 ProjetosSelecaoArea">
            {mostrarProjetosMiniatura( )} 
        </Container>
    </section>
  )
}
