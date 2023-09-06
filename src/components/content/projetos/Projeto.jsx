import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default props => {
    var imgPath = `http://localhost:3001/projetos_img/${props.img}`

    function mostrarProjetoTecnologias(){
        if(props.tecnologias.length > 0){
            return props.tecnologias.map(tecnologia=>{
                return(
                    <span className='ProjetoTecnologia'>{tecnologia}</span>
                )
            })
        }
    }
    return (
        <Container className={'Projeto ' + props.classe}>
            <Row className='Row'>
                <Col sm={6} className='Col1'>
                    <img className='ProjetoImg' src={imgPath} alt={props.img} />
                </Col>
                <Col className='Col2'>
                    <h2 className='ProjetoTitulo Fonte2'>{props.titulo}</h2>
                    <p className='ProjetoDesc'>{props.desc}</p>
                </Col>
                <Button className='ProjetoBotao' variant='outline-danger' href={props.link} target='_blank'>Ver Projeto</Button>
                <div className='ProjetoTecnologiasArea'>
                    {mostrarProjetoTecnologias()}
                </div>
            </Row>
        </Container>
    )
}
