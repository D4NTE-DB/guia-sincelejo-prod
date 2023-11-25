import React from 'react';
import { Container, Nav, Navbar, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavBar = () => {
  return (
    <div>
      <Card>
        <Navbar bg="" expand="lg">
          <Container>
            <img as={Link} to='/' style={{ width: '30px', margin: 0 }} src="images/icon.jpeg" alt="" />
            <Navbar.Brand style={{ right: '300px', margin: 'initial' }} as={Link} to='/'>Food Guía Sincelejo</Navbar.Brand>
            <Nav className='about-us-info'>
              <Nav.Link as={Link} to='/about-us'>
                <u>Más Información</u>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Card>
    </div>
  );
};

export default AppNavBar;