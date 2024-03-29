import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from 'react-bootstrap';
import { ThemeContext } from '../ThemeContextProvider/ThemeContextProvider';
import "./MyNavbar.css";

import { MdModeNight } from "react-icons/md";
import { IoSunny } from "react-icons/io5";
import { IoBookSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export default function MyNavbar(props) {

    const { setInput, navForm } = props;

    const [search, setSearch] = useState("");

    const { theme, setTheme } = useContext(ThemeContext)

    const navigate = useNavigate()

    return (
        <Navbar bg={theme} data-bs-theme={theme} style={{ position: "sticky", top: "0", zIndex: "1", height: "5rem" }}>
            <Container>
                <Navbar.Brand onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                    <IoBookSharp />
                    <span className='ms-2'>Epibooks Market</span>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => navigate("/")} style={{ cursor: "pointer" }}>Home</Nav.Link>
                    <Nav.Link onClick={() => navigate("/cart")}>Carrello</Nav.Link>
                    <Nav.Link href="#pricing">Browse</Nav.Link>
                </Nav>
                <div className='me-5' style={{ cursor: "pointer" }} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    {theme === "dark" ? <IoSunny style={{ color: "white", fontSize: "40px" }} /> : <MdModeNight style={{ color: "black", fontSize: "40px" }} />}</div>
                {navForm &&
                    <Form className='my-3 d-flex justify-content-around form'>
                        <Form.Control data-testid="input-test" type="text" placeholder="Inserisci il titolo" onChange={(e) => setSearch(e.target.value)}
                            style={{ width: "50%" }} />
                        <Button data-testid="test-button" variant="outline-primary" size="lg" onClick={() => setInput(search)}>
                            Cerca per titolo
                        </Button>
                    </Form>}

            </Container>
        </Navbar >
    )
}
