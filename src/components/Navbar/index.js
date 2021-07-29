import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavBarContainer, NavBarBrand, NavLogo } from './styledComponents'

class Header extends Component {
   render() {
      return (
         <NavBarContainer collapseOnSelect expand='lg' bg='dark' variant='dark'>
            <Container>
               <NavBarBrand>
                  <NavLogo
                     src={'/images/logo.png'}
                     width='35'
                     height='35'
                     alt='Bug Tracker Logo'
                  />
               </NavBarBrand>
               <Navbar.Toggle aria-controls='responsive-navbar-nav' />
               <Navbar.Collapse id='responsive-navbar-nav'>
                  <Nav className='ms-auto'>
                     <Nav.Link as={Link} to='/dashboard'>
                        Dashboard
                     </Nav.Link>
                     <Nav.Link as={Link} to='/register'>
                        Register
                     </Nav.Link>
                     <Nav.Link as={Link} to='/login'>
                        Login
                     </Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </NavBarContainer>
      )
   }
}

export default Header
