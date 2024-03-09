import React from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import "./SingleCard.css"

export default function SingleCard(props) {
    console.log(props)
    const { asin, title, img, price, category } = props;
    console.log(asin)
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
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>

    );

}
