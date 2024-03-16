import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import "./SingleBook.css";
import CommentArea from '../CommentArea/CommentArea';

export default function SingleBook(props) {
    const { asin, title, img, price, category } = props;


    const [selected, setSelected] = useState(false);

    return (

        <Col md={3} sm={6}>
            <Card className="card mt-3" id={asin}
                style={{ border: selected ? "2px solid red" : "none" }}>
                <Card.Img variant="top" className="card-img" src={img} />
                <Card.Body>
                    <Card.Title className="card-title">{title}</Card.Title>

                    <div>
                        ${price}
                        <br />
                        {category}
                    </div>
                    <div>
                        {selected &&
                            <CommentArea id={asin} />}
                        {selected ? <Button variant="warning" onClick={() => setSelected(!selected)}>Chiudi</Button> : <Button variant="warning" onClick={() => setSelected(!selected)}>Aggiungi</Button>}

                    </div>

                </Card.Body>
            </Card>
        </Col>

    );

}
