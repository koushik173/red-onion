import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../Images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand href="/home"><img style={{height: '30px'}} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Link title='order' to="/order"><FontAwesomeIcon icon={faCartShopping} /></Link>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign up</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
