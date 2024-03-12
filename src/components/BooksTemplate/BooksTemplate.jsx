import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import SingleCard from '../SingleCard/SingleCard';
export default function BooksTemplate(props) {
    const allBooks = props.books;

    const [filteredBooks, setFilteredBooks] = useState(allBooks);
    const [inputName, setInputName] = useState("");


    function handleName(name) {
        const filteredName = allBooks.filter((book) => book.title.includes(name));
        setFilteredBooks(filteredName);
    }
    return (
        <>
            <Container>
                <Form.Control type="text" placeholder="Inserisci il titolo" value={inputName} onChange={(e) => setInputName(e.target.value)} />
                <Button variant="primary" size="lg" onClick={() => handleName(inputName)}>
                    Cerca
                </Button>
                <Row>
                    {filteredBooks.map((element) => <SingleCard key={element.asin} asin={element.asin} title={element.title} img={element.img} price={element.price} category={element.category} />)}
                </Row>
            </Container>
        </>

    );

}
