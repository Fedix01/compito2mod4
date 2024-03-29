import React from 'react'
import { Button, Container } from 'react-bootstrap';

export default function SingleCartItem(props) {

    const { title, img, handleRemove, item } = props;


    return (
        <Container>
            <div className='d-flex align-items-center'>
                <div>
                    <img src={img} alt="Foto Libro" style={{ height: "200px" }} />
                </div>
                <div>
                    <h2>{title}</h2>
                </div>
                <div>
                    <Button variant='danger' onClick={() => handleRemove(item)}>Elimina</Button>
                </div>
            </div>
        </Container>
    )
}
