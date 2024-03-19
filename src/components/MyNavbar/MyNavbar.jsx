import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from 'react-bootstrap';
import { ThemeContext } from '../ThemeContextProvider/ThemeContextProvider';

export default function MyNavbar(props) {

    const { setInput } = props;

    const [search, setSearch] = useState("");

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <Navbar bg={theme} data-bs-theme={theme}>
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Browse</Nav.Link>
                </Nav>
                <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Cambia tema</Button>
                <Form className='my-3 d-flex justify-content-around'>
                    <Form.Control type="text" placeholder="Inserisci il titolo" onChange={(e) => setSearch(e.target.value)}
                        style={{ width: "50%" }} />
                    <Button variant="outline-primary" size="lg" onClick={() => setInput(search)}>
                        Cerca per titolo
                    </Button>
                </Form>
            </Container>
        </Navbar>
    )
}
