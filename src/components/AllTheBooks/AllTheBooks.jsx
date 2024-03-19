import React, { useState, useEffect, useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SingleBook from '../SingleBook/SingleBook';
import { ThemeContext } from '../ThemeContextProvider/ThemeContextProvider';
export default function AllTheBooks(props) {

    const { theme } = useContext(ThemeContext)

    const book = props.books;
    const { input } = props;

    const [filteredBooks, setFilteredBooks] = useState(book);


    useEffect(() => {
        const filteredName = book.filter((book) => book.title.toLowerCase().includes(input.toLowerCase()));
        setFilteredBooks(filteredName);
    }, [input, book]);

    return (
        <>
            <div className={theme === "dark" ? "bg-dark" : "bg-light"}>
                <Container>
                    <Row>
                        {filteredBooks.map((element) => <SingleBook key={element.asin} asin={element.asin} title={element.title} img={element.img} price={element.price} category={element.category} />)}
                    </Row>
                </Container>
            </div>
        </>

    );

}
