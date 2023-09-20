import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

import './css/Header.css'

export default props =>{
  const [navClasse, setNavClasse] = useState(null)

  return (
    <Navbar expand='sm' className={"Navbar " + navClasse} variant='dark'>
      <Container className='NavbarContainer'>
        <Navbar.Brand>
          <div className='MiniFoto'></div>
          <div className='TituloSiteArea'>
            <h1 className='TituloSite'>RAUÃ TORRES</h1>
            <h2 className='SubtituloSite'>web developer</h2>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar' className='MenuButton'/>
        <Navbar.Collapse id='navbar'>
          <Nav className='justify-content-end' style={{width: "100%"}}>
            <Nav.Link className='NavLink' href='/' onClick={()=>{setNavClasse(null)}}>Home</Nav.Link>
            <Nav.Link className='NavLink' href='/sobre' onClick={()=>{setNavClasse('NavProjetos')}}>Sobre mim</Nav.Link>
            <Nav.Link className='NavLink' href='/projetos' onClick={()=>{setNavClasse('NavContato')}}>Projetos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}