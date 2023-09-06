import React from 'react'
import { Link } from 'react-router-dom'
import FormacaoCard from './FormacaoCard'
import FormacaoExperienciaConteudo from './FormacaoExperienciaConteudo'
import FormacaoIdioma from './FormacaoIdioma'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faAward, faBusinessTime, faLanguage, faCheck, faLandmark } from '@fortawesome/free-solid-svg-icons'
import "/node_modules/flag-icons/css/flag-icons.min.css";

import './css/Formacao.css'

export default props=>
<section className='SobreSecaoFormacao'>
    <h2 className='FormacaoTitulo'>Minha Formação</h2>
    <div className='FormacaoArea'>
        <FormacaoCard icone={<FontAwesomeIcon  icon={faGraduationCap}/>} titulo='Acadêmica'>
            <h4 className='FormacaoAcademicaTituloGraduacao'>Análise e Desenvolvimento de Sistemas</h4>
            <ul className='FormacaoAcademicaGraduacaoDesc'>
                <li><FontAwesomeIcon icon={faLandmark} className='FormacaoAcademicaGraduacaoIcone IconeUniversidade'/> Universidade Estácio de Sá</li>    
                <li><FontAwesomeIcon icon={faCheck} className='FormacaoAcademicaGraduacaoIcone IconeStatusCurso'/> Cursando 5° semestre</li>    
            </ul>
        </FormacaoCard>
        <FormacaoCard icone={<FontAwesomeIcon  icon={faBusinessTime}/>} titulo='Experiência'>
            <FormacaoExperienciaConteudo 
                titulo='Desenvolvimento de sistema de gerenciamento hospitalar'
                tempo='6 meses' 
            />
            <FormacaoExperienciaConteudo 
                titulo='Programação web em Javascript'
                tempo='3 anos'
            />
        </FormacaoCard>
        <FormacaoCard icone={<FontAwesomeIcon  icon={faAward}/>} titulo='Cursos'>
            <div className='FormacaoCurso'>
                <h4 className='CursoTitulo'><Link to='https://www.udemy.com/course/curso-completo-do-desenvolvedor-nodejs/' target='_blank' className='CursoLink'>Curso Completo do Desenvolvedor NodeJS e MongoDB - Jorge Sant Ana</Link></h4>
                <h5 className='CursoPlataforma'> Disponível em <Link to='https://www.udemy.com/' target='_blank' className='CursoLink LinkPlataforma'>Udemy</Link></h5>
            </div>
        </FormacaoCard>
        <FormacaoCard icone={<FontAwesomeIcon  icon={faLanguage}/>} titulo='Idiomas'>
            <div className='AreaIdiomas'>
                <FormacaoIdioma 
                    idioma='Português'
                    icone='br'
                    nivel='Nativo'
                />
                <FormacaoIdioma 
                    idioma='Inglês'
                    icone='gb'
                    nivel='Fluente'
                />
            </div>
        </FormacaoCard>
    </div>
</section>