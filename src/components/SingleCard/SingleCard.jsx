import React from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

export default function SingleCard(props) {
    console.log(props)
    const { asin, title, img, price, category } = props;
    console.log(asin)
    return (

        <Col md={4}>
            <Card id={asin}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {price}
                        <br />
                        {category}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>

    );

}
