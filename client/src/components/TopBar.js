import React from 'react'
import {Navbar , Nav , Container} from "react-bootstrap"
import {LinkContainer} from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import {MdLocalOffer} from 'react-icons/md'
function TopBar() {
  return (
    <div>
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container fluid>
            <h6 className='text-light'>
                <MdLocalOffer className='text-warning' /> &nbsp;&nbsp;
               Free Home delivery on order above 500 rs</h6>
               <Nav className="ms.auto">
                   <LinkContainer to='/' activeClassName>
                       <Nav.Link>
                           Home
                       </Nav.Link>
                   </LinkContainer>
                   <LinkContainer to='/about' activeClassName>
                       <Nav.Link>
                           About
                       </Nav.Link>
                   </LinkContainer>
                   <LinkContainer to='/contact' activeClassName>
                       <Nav.Link>
                           Contact
                       </Nav.Link>
                   </LinkContainer>
                   <LinkContainer to='/policy' activeClassName>
                       <Nav.Link>
                           Terms and Policy
                       </Nav.Link>
                   </LinkContainer>
                  
               </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default TopBar