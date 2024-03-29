import React from 'react'
import { Button, Container } from 'react-bootstrap';

export default function SingleCartItem(props) {

    const { title, img, price, handleRemove, item } = props;

    return (
        <Container>
            <div className='d-flex align-items-center'>
                <div>
                    <img src={img} alt="Foto Libro" style={{ height: "200px" }} />
                </div>
                <div className='ms-3'>
                    <h2>{title}</h2>
                    <p>{price}€</p>
                </div>
                <div className='ms-3'>
                    <Button variant='danger' onClick={() => handleRemove(item)}>Elimina</Button>
                </div>
            </div>

        </Container>
    )
}
