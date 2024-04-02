import React, { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap';

export default function SingleCartItem(props) {

    const { title, img, price, handleRemove, item, quantity, setPrice } = props;

    useEffect(() => {
        setPrice(calculatePrice)
    }, [price, quantity])

    const calculatePrice = () => {
        return quantity * price
    }
    return (
        <Container>
            <div className='d-flex align-items-center justify-content-between mt-3'>
                <div>

                    <img src={img} alt="Foto Libro" style={{ height: "200px" }} />

                    <span className='ms-3' style={{ fontSize: "25px" }}>{title}</span>
                    <span className='ms-3' style={{ fontSize: "20px" }}>x {quantity}</span>
                    <span className='ms-3' style={{ fontSize: "25px" }}>{price}€</span>

                </div>
                <div className='ms-3'>
                    <Button variant='danger' onClick={() => handleRemove(item)}>Elimina</Button>
                </div>
            </div>

        </Container>
    )
}
