import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import SingleBook from '../SingleBook/SingleBook';
export default function AllTheBooks(props) {
    const allBooks = props.books;

    const [filteredBooks, setFilteredBooks] = useState(allBooks);
    const [inputName, setInputName] = useState("");


    function handleName(name) {
        const filteredName = allBooks.filter((book) => book.title.toLowerCase().includes(name.toLowerCase()));
        setFilteredBooks(filteredName);
    }

    useEffect(() => {
        setFilteredBooks(allBooks);
    }, [allBooks]);

    return (
        <>
            <Container>
                <div className='my-3 d-flex justify-content-around'>
                    <Form.Control type="text" placeholder="Inserisci il titolo" value={inputName} onChange={(e) => setInputName(e.target.value)}
                        style={{ width: "50%" }} />
                    <Button variant="primary" size="lg" onClick={() => handleName(inputName)}>
                        Cerca per titolo
                    </Button>
                </div>
                <Row>
                    {filteredBooks.map((element) => <SingleBook key={element.asin} asin={element.asin} title={element.title} img={element.img} price={element.price} category={element.category} />)}
                </Row>
            </Container>
        </>

    );

}
