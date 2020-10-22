import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


export const NavigationBar = () => {
    return (
        <Navbar style={{"background": "#2a4b83"}} sticky="top" collapseOnSelect expand="md" variant="dark">
            <Container>
                <Navbar.Brand href="/">UIFA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Главное</Nav.Link>
                    <Nav.Link href="/news">Новости</Nav.Link>
                    <Nav.Link href="/services">Услуги</Nav.Link>
                    <Nav.Link href="/about_us">О нас</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Искать" className="my-2 mr-sm-2 rounded-0" />
                        <Button variant="outline-light rounded-0">Искать</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>   
    )
}