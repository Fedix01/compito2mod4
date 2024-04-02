import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import "./SingleBook.css";
import { ThemeContext } from '../ThemeContextProvider/ThemeContextProvider';
import { SelectedContext } from '../SelectedContextProvider/SelectContextProvider';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContextProvider/CartContextProvider';
import { AlertCartContext } from '../AlertCartProvider/AlertCartProvider';


export default function SingleBook(props) {
    const { asin, title, img, price, category, book } = props;

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/details/" + asin)
    }

    const { alert, setAlert } = useContext(AlertCartContext);

    const { selected, setSelected } = useContext(SelectedContext);

    const { cart, setCart } = useContext(CartContext);

    const addToCart = (book) => {
        console.log(book);
        const index = cart.findIndex((item) => item.asin === book.asin);
        if (index !== -1) {
            const updateCartItems = [...cart];
            updateCartItems[index].quantity += 1;
            setCart(updateCartItems);
            setTimeout(() => {
                setAlert(false)
            }, 4000);
            setAlert(!alert);

        } else {
            const newItem = { ...book, quantity: 1 };
            setCart([...cart, newItem]);
            setTimeout(() => {
                setAlert(false)
            }, 4000);
            setAlert(!alert);
        }
    }



    const { theme } = useContext(ThemeContext)

    useEffect(() => {

    }, [selected])

    return (
        <>

            <Col md={6} sm={6}>

                <div id={asin}>
                    <Card data-testid="test-cards" className={theme === "dark" ? "card mt-3 bg-dark text-light" : "card mt-3 bg-light"} id={asin}
                        style={{ border: (selected === asin) ? "2px solid red" : "none" }}>
                        <Card.Img variant="top" className="card-img" src={img} />
                        <Card.Body>
                            <Card.Title className="card-title">{title}</Card.Title>

                            <div>
                                {price}€
                                <br />
                                {category}
                            </div>
                            <div className='mt-2'>
                                {(selected === asin) ? <Button variant="warning" onClick={() => setSelected("")}>Chiudi</Button> : <Button data-testid="test-comment" variant="warning" onClick={() => setSelected(asin)}>Commenta</Button>}
                                <Button className='ms-2' variant="primary" onClick={handleNavigate}>Dettagli</Button>
                                <Button className='ms-2' variant="success" onClick={() => addToCart(book)}>Aggiungi</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Col>
        </>
    );

}
