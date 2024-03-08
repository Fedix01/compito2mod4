import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import SingleCard from '../SingleCard/SingleCard';
export default function BooksTemplate(props) {
    const allBooks = props.books;


    return (
        <>
            <Container>
                <Row>
                    {allBooks.map((element) => <SingleCard asin={element.asin} title={element.title} img={element.img} price={element.price} category={element.category} />)}
                </Row>
            </Container>
        </>

    );

}
