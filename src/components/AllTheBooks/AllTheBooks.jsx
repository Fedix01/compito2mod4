import React, { useState, useEffect, useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SingleBook from '../SingleBook/SingleBook';
import { ThemeContext } from '../ThemeContextProvider/ThemeContextProvider';
import { Col } from 'react-bootstrap';
import CommentArea from '../CommentArea/CommentArea';
import { SelectedContext } from '../SelectedContextProvider/SelectContextProvider';
export default function AllTheBooks(props) {

    const { theme } = useContext(ThemeContext);

    const { selected } = useContext(SelectedContext)

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
                    <Row >
                        <Col md={8} >
                            <Row>
                                {filteredBooks.map((element) => <SingleBook key={element.asin} asin={element.asin} title={element.title} img={element.img} price={element.price} category={element.category} />)}
                            </Row>
                        </Col>
                        <Col md={4}>
                            <div style={{ position: "sticky", top: "100px" }} className='ms-5'>
                                <h2 className={theme === "dark" ? 'text-light' : ''}>Tutti i commenti</h2>
                                <div>{selected &&
                                    <CommentArea id={selected} />}
                                </div>
                            </div>
                        </Col>
                    </Row>


                </Container>
            </div>
        </>

    );

}
