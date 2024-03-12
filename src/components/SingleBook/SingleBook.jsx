import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import "./SingleBook.css";
import { FaStar } from 'react-icons/fa';

export default function SingleBook(props) {
    const { asin, title, img, price, category } = props;


    const [add, setAdd] = useState(false);

    return (

        <Col md={3} sm={6}>
            <Card className="card mt-3" onClick={() => setAdd(!add)} id={asin}
                style={{ border: add ? "2px solid red" : "none" }}>
                <Card.Img variant="top" className="card-img" src={img} />
                <Card.Body>
                    <Card.Title className="card-title">{title}</Card.Title>
                    <Card.Text>
                        ${price}
                        <br />
                        {category}
                    </Card.Text>
                    <Button variant="warning" onClick={() => setAdd(!add)} >
                        {!add && (
                            <FaStar
                                style={{
                                    marginRight: "8px",
                                    color: "black",
                                    marginBottom: "4px"
                                }}
                            />
                        )}
                        {add ? "Added!" : "Add"}</Button>
                </Card.Body>
            </Card>
        </Col>

    );

}
