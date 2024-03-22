import React, { useContext, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import "./SingleBook.css";
import { ThemeContext } from '../ThemeContextProvider/ThemeContextProvider';
import { SelectedContext } from '../SelectedContextProvider/SelectContextProvider';


export default function SingleBook(props) {
    const { asin, title, img, price, category } = props;


    const { selected, setSelected } = useContext(SelectedContext)

    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        console.log(selected)
    }, [selected])

    return (
        <>
            <Col md={6} sm={6}>
                <Card className={theme === "dark" ? "card mt-3 bg-dark text-light" : "card mt-3 bg-light"} id={asin}
                    style={{ border: (selected === asin) ? "2px solid red" : "none" }}>
                    <Card.Img variant="top" className="card-img" src={img} />
                    <Card.Body>
                        <Card.Title className="card-title">{title}</Card.Title>

                        <div>
                            ${price}
                            <br />
                            {category}
                        </div>
                        {(selected === asin) ? <Button className='mt-2' variant="warning" onClick={() => setSelected("")}>Chiudi</Button> : <Button variant="warning" onClick={() => setSelected(asin)}>Aggiungi</Button>}

                    </Card.Body>
                </Card>
            </Col>
        </>
    );

}
