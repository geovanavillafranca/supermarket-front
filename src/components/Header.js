import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
            <Link to='/'>
                <Navbar.Brand>
                    SuperMarket
                </Navbar.Brand>
            </Link>

        </Container>
    </Navbar>
</header>
  )
}

export default Header