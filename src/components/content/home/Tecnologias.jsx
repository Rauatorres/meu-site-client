import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Row, Col, Container, OverlayTrigger, Tooltip, Spinner } from 'react-bootstrap'
import Tecnologia from './Tecnologia'
import TecnologiaAreaTipo from './TecnologiaAreaTipo'
import IconeSecao from './IconeSecao'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faGears } from '@fortawesome/free-solid-svg-icons'

import './css/Tecnologias.css'

export default props=>{
    const [listaTecnologias, setListaTecnologias] = useState([])
    const [listaTecnologiasNum, setListaTecnologiasNum] = useState(0)
    const [tecnologiasClasse, setTecnologiasClasse] = useState(null)

    
    useEffect(()=>{
        async function getListaTecnologias(){
            let getLista = await axios.get('https://meu-site-api.onrender.com/api/tecnologias')
            setListaTecnologias(getLista.data)
        }
        getListaTecnologias()
    }, [])

    function exibirTecnologias(tipo){
        if(listaTecnologias != undefined){
            return listaTecnologias.map((tecnologia, index)=>{
                if(tipo == tecnologia.tipo){
                    return (
                        <Tecnologia key={tecnologia._id} classe={tecnologiasClasse} img={tecnologia.img} nome={tecnologia.nome} link_original={tecnologia.credito}/>
                    )
                }
            })
        }else{
            return (
                <Spinner className='TecnologiasSpinner' animation='border' role='status' />
            )
        }
    }

    function exibirPontos(){
        if(listaTecnologias.length != 0){
            return listaTecnologias.map((tecnologiasGrupo, index)=>{
                return (
                    <div key={index} className={index == listaTecnologiasNum ? 'TecnologiasPontoAtivo' : 'TecnologiasPonto'} onClick={()=> {tecnologiasTransicionar(index)}}></div>
                )
            })
        }
    }

    function tecnologiasTransicionar(listaTecnologiasIndex){
        setTecnologiasClasse('TecnologiaDesaparecer')
        setTimeout(()=>{
            tecnologiasMudar(listaTecnologiasIndex)
            setTimeout(()=>{
                setTecnologiasClasse(null)
            }, 500)
        }, 500)
    }

    function tecnologiasMudar(index){
        if(index < 0){
            setListaTecnologiasNum(listaTecnologias.length - 1)
        }else if(index > listaTecnologias.length - 1){
            setListaTecnologiasNum(0)
        }else{
            setListaTecnologiasNum(index)
        }
    }

    return (
        <section className='HomeTecnologiasSection'>
            {/* <Container fluid>
                <div>
                    <h2 className='HomeTecnologiasSecaoTitulo Fonte2'>Minhas Tecnologias</h2>
                </div>
                <Row className='TecnologiasRow'>
                    <Col className='TecnologiasColIcone'>
                        <IconeSecao icone={faGears} />
                    </Col>
                    <Col className='TecnologiasColArea'>
                        <div className='HomeTecnologiasArea'>
                            {exibirTecnologias()}
                        </div>
                    </Col>

                </Row>
            </Container> */}
            <h2 className='HomeTecnologiasSecaoTitulo Fonte2'>Minhas Tecnologias</h2>
            <Container>
                <Row>
                    <Col sm={5} lg={4}>
                        <OverlayTrigger placement='bottom' overlay={<Tooltip>imagem por: icons8.com</Tooltip>}>
                            <img src="img/ImgAreaTecnologias.png" alt="img" className='HomeTecnologiasImg'/>
                        </OverlayTrigger>
                        <p className='HomeTecnologiasDescricao'>
                            Utilizo <strong className='HomePalavraJavascript'>javascript</strong> tanto no lado do cliente, quanto no servidor,
                            além de banco de dados SQL e NoSQL.
                        </p>
                    </Col>
                    <Col sm={7} lg={8}>
                        <div className='HomeTecnologiasArea'>
                            <TecnologiaAreaTipo tipo='Front-End'>
                                {exibirTecnologias('front-end')}
                            </TecnologiaAreaTipo>
                            <TecnologiaAreaTipo tipo='Back-End'>
                                {exibirTecnologias('back-end')}
                            </TecnologiaAreaTipo>
                            <TecnologiaAreaTipo tipo='Outras'>
                                {exibirTecnologias('outro')}
                            </TecnologiaAreaTipo>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <div className='HomeTecnologiasBottom'></div> */}
        </section>
    )
}