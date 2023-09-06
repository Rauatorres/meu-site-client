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
<section className='HomeSecaoFormacao'>
    <h2 className='FormacaoTitulo'>Minha Formação</h2>
    <div className='FormacaoArea'>
        <FormacaoCard icone={<FontAwesomeIcon  icon={faGraduationCap}/>} titulo='Formação Acadêmica'>
            <h4 className='FormacaoAcademicaTituloGraduacao'>Análise e Desenvolvimento de Sistemas</h4>
            <ul className='FormacaoAcademicaGraduacaoDesc'>
                <li><FontAwesomeIcon icon={faCheck} className='FormacaoAcademicaGraduacaoIcone IconeStatusCurso'/> Cursando 5° semestre</li>    
                <li><FontAwesomeIcon icon={faLandmark} className='FormacaoAcademicaGraduacaoIcone IconeUniversidade'/> Universidade Estácio de Sá</li>    
            </ul>
        </FormacaoCard>
        <FormacaoCard icone={<FontAwesomeIcon  icon={faAward}/>} titulo='Cursos'>
            <h4 className='CursoTitulo'><Link to='https://www.udemy.com/course/curso-completo-do-desenvolvedor-nodejs/' target='_blank' className='CursoLinks'>Curso Completo do Desenvolvedor NodeJS e MongoDB</Link></h4>
            <h5 className='CursoPlataforma'> Disponível na <Link to='https://www.udemy.com/' target='_blank' className='CursoLinks LinkPlataforma'>Udemy</Link></h5>
        </FormacaoCard>
        <FormacaoCard icone={<FontAwesomeIcon  icon={faBusinessTime}/>} titulo='Experiência'>
            <FormacaoExperienciaConteudo 
                titulo='Desenvolvimento de sistema de gerenciamento de hospitais'
                tempo='6 meses' 
                tecnologias='HTML, CSS, JavaScript, PHP e MySQL'
            />
            <FormacaoExperienciaConteudo 
                titulo='Desenvolvimento de sistemas com Node.JS'
                tempo='1 ano'
                tecnologias='HTML, CSS, JavaScript, Node.JS e MongoDB'
            />
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