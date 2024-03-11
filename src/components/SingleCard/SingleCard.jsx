import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import "./SingleCard.css";
import { FaStar } from 'react-icons/fa';

export default function SingleCard(props) {
    const { asin, title, img, price, category } = props;

    const [add, setAdd] = useState(false);

    function handleAdd() {
        setAdd(!add)
    }
    return (

        <Col md={3} sm={6}>
            <Card className="card mt-3" id={asin}>
                <Card.Img variant="top" className="card-img" src={img} />
                <Card.Body>
                    <Card.Title className="card-title">{title}</Card.Title>
                    <Card.Text>
                        ${price}
                        <br />
                        {category}
                    </Card.Text>
                    <Button variant="warning" onClick={handleAdd} >
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
