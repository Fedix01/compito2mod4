import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import horrorData from '../../data/horror.json';
import fantasyData from "../../data/fantasy.json";
import historyData from "../../data/history.json";
import sciFiData from "../../data/scifi.json";
import romanceData from "../../data/romance.json";
import MyNavbar from '../MyNavbar/MyNavbar';
import MyFooter from '../MyFooter/MyFooter';
import CommentArea from '../CommentArea/CommentArea';
import { ThemeContext } from '../ThemeContextProvider/ThemeContextProvider';
import { Row, Col, Container } from 'react-bootstrap';


export default function BookDetails(props) {

    const { navDetails, navForm } = props;



    const params = useParams();
    console.log(params.asin)

    const [book, setBook] = useState([]);

    const { theme } = useContext(ThemeContext)

    const handleData = () => {
        const allData = [...horrorData, ...fantasyData, ...historyData, ...sciFiData, ...romanceData];

        const filteredData = allData.filter((el) => el.asin.includes(params.asin));

        setBook(filteredData);
    }

    useEffect(() => {
        handleData();
        navDetails(false)
    }, [params])

    book.forEach(el => console.log(el))

    return (
        <>
            <MyNavbar navForm={navForm} />
            <div className={theme === "dark" ? "bg-dark" : "bg-light"}>
                <Container >
                    <Row>
                        <Col md={6}>

                            <div className={theme === "dark" ? "text-light" : null}>
                                {book.map((el) => (
                                    <div key={el.asin}>
                                        <img src={el.img} alt="" width={"500px"} className='container-fluid' />
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className={theme === "dark" ? "text-light" : null}>
                                {book.map((el) => (
                                    <div key={el.asin}>
                                        <h2>{el.title}</h2>
                                        <h4 className='mt-3'>Categoria: {el.category}</h4>
                                        <p className='mt-3'>Prezzo: {el.price}€</p>
                                        <h2 style={{ marginTop: "5rem" }}>Tutti i commenti:</h2>
                                    </div>
                                ))}
                                {book.map((el) => <CommentArea key={el.asin} id={el.asin} />)}
                            </div>
                        </Col>

                    </Row >
                </Container>
            </div>

            <MyFooter />
        </>
    )
}
