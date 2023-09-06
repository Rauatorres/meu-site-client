import React, { useState, useEffect } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import IconeSecao from './IconeSecao'
// import ProjetoSelecao from './ProjetoSelecao'
import ProjetosImg from './ProjetosImg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faChevronRight } from '@fortawesome/free-solid-svg-icons'


import Projeto from './Projeto'
import axios from 'axios'

import './css/Projetos.css'
import { MdSignalCellularNull } from 'react-icons/md'


export default props=>{

    const [projetosLista, setProjetosLista] = useState([])
    const [projetoSelecionado, setProjetoSelecionado] = useState(0)
    const [projetosClasse, setProjetosClasse] = useState('HomeProjetoAparecer')
    const [projetosClasseScroll, setProjetosClasseScroll] = useState(0)
    
    
    useEffect(()=>{
        async function getProjetosLista(){
            let res = await axios.get('https://meu-site-api.onrender.com/api/projetos')
            setProjetosLista(res.data)
        }
        getProjetosLista()
        
    }, [])

    function mostrarProjeto(){
        if(projetosLista.length > projetoSelecionado){
            return (
                <Projeto key={projetosLista[projetoSelecionado]._id} titulo={projetosLista[projetoSelecionado].titulo} desc={projetosLista[projetoSelecionado].descricao} img={projetosLista[projetoSelecionado].img} classe={projetosClasse}/>
            )
        }
    }

    function projetoTransicao(projetoIndex){
        // setTimeout(()=>{
        //     setTimeout(()=>{
        //         setProjetosClasse(null)
        //     }, 500)
        //     setProjetoSelecionado(projetoIndex)
        // }, 500)
        // setProjetosClasse('HomeProjetoDesaparecer')
        setProjetosClasse(null)
        setTimeout(()=>{
            setProjetoSelecionado(projetoIndex)
            setTimeout(()=>{
                setProjetosClasse('HomeProjetoAparecer')
                console.log(projetosClasse)
            }, 100)
        }, 100)
    }

    function projetosMostrarImg(){
        if(projetosLista.length > 0){
            return projetosLista.map((projeto, index)=>{
                return (
                    <ProjetosImg key={projeto._id} img={projeto.img} selecionado={projetoSelecionado == index ? true : false} selecionar={projetoTransicao} numProjeto={index} classe={projetosClasse} classeScroll={'HomeProjetoImgDiv' + projetosClasseScroll + ' '}/>
                )
            })
        }
    }


    function projetosSeletor(){
        if(projetosLista.length > 0){
            return projetosLista.map((projeto, index)=>{
                if (index == projetoSelecionado){
                    console.log('teste')
                    return (
                        <div key={projeto._id} className='HomeProjetosSeletor HomeProjetosSeletorSelecionado'></div>
                    )
                }else{
                    return (
                        <div key={projeto._id} className='HomeProjetosSeletor' onClick={()=>{setProjetosClasseScroll(index); projetoTransicao(index)}}></div>
                    )
                }
            })
        }
    }


    return (
        <section className='ProjetosSection'>
            <h1 className='HomeProjetosTitulo Fonte2'>Meus Projetos</h1>
            <Container fluid>
                <Row className='HomeProjetoRow'>
                    <Col className='HomeProjetosCol1'>
                        <div id='HomeProjetosImgArea' className='HomeProjetosImgArea'>
                            {projetosMostrarImg()}
                        </div>
                    </Col>
                    <Col className='HomeProjetosCol2' sm={7} >
                        <div className='HomeProjetosAreaSeletor'>
                            {projetosSeletor()}
                        </div>
                        {mostrarProjeto()}
                        <Button variant='light' className='HomeProjetosBotao'>conheça meus projetos</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}