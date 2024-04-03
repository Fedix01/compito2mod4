import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from 'react-bootstrap';
import { ThemeContext } from '../ThemeContextProvider/ThemeContextProvider';
import Alert from 'react-bootstrap/Alert';
import "./MyNavbar.css";

import { MdModeNight } from "react-icons/md";
import { IoSunny } from "react-icons/io5";
import { IoBookSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { AlertCartContext } from '../AlertCartProvider/AlertCartProvider';
import { CartCounterContext } from '../CartCounterContextProvider/CartCounterContextProvider';

export default function MyNavbar(props) {

    const { setInput, navForm } = props;

    const [search, setSearch] = useState("");

    const { alert } = useContext(AlertCartContext);


    const { theme, setTheme } = useContext(ThemeContext);

    const { count } = useContext(CartCounterContext)

    const navigate = useNavigate()

    return (
        <>
            <Navbar bg={theme} data-bs-theme={theme} style={{ position: "sticky", top: "0", zIndex: "1", height: "5rem" }} expand="md">
                <Container>
                    <Navbar.Brand onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                        <IoBookSharp />
                        <span className='ms-2'>Epibooks Market</span>
                    </Navbar.Brand>
                    <Nav className="me-auto nav-items">
                        <Nav.Link onClick={() => navigate("/")} style={{ cursor: "pointer" }} >Home</Nav.Link>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Nav.Link onClick={() => navigate("/cart")}>Carrello</Nav.Link>
                            {count > 0 &&
                                <div className='container-cart d-flex justify-content-center align-items-center'>
                                    <span className='cart-items'>{count}</span>
                                </div>
                            }
                        </div>
                        <Nav.Link onClick={() => navigate("/browse")} style={{ cursor: "pointer" }} className='d-none d-md-flex'>Browse</Nav.Link>
                    </Nav>

                    <Form className='me-5 d-flex align-items-center justify-content-center d-none d-md-flex'>
                        <Form.Check className={theme === "dark" ? "text-light" : ""} style={{ cursor: "pointer" }} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            type="switch"
                            id="custom-switch"
                            label={theme === "dark" ? "Dark-Mode" : "Light-Mode"}
                        />
                        {theme === "dark" ? <MdModeNight className='ms-2' style={{ color: "white", fontSize: "40px" }} /> : <IoSunny className='ms-2' style={{ color: "black", fontSize: "40px" }} />}
                    </Form>

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
            {alert &&
                <Alert className='alert' variant='success'>
                    Libro aggiunto al carrello: {alert}
                </Alert>}
        </>

    )
}
