import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <Navbar className="bg-dark">
    <Container>
   
    <Link to={'/'} style={{textDecoration:'none'}}>
     <Navbar.Brand style={{color:'white',fontSize:'30px',fontWeight:'bold'}}>
     <i className="fa-solid fa-book me-2"></i>
      BookHub
      </Navbar.Brand>

    </Link>
    
    </Container>
  </Navbar>
  )
}

export default Header