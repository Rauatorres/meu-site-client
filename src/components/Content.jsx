import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './content/home/Home'
import Projetos from './content/projetos/Projetos'
import Sobre from './content/sobre/Sobre'
import Erro404 from './content/erro/Erro404'

import './css/Content.css'

export default props=>
<main>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sobre' element={<Sobre/>} />
      <Route path='/projetos' element={<Projetos/>} />
      <Route path='*' element={<Erro404/>} />
    </Routes>
</main>