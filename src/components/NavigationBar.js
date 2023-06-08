import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

import React from 'react'

export default function NavigationBar() {
  return (
    <Navbar bg='light' expand='lg'>
        <Navbar.Collapse id='basic-navbar-nav'>
            <Navbar.Text>Hello welcome.</Navbar.Text>
            <Nav className='me-auto'>

            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
