import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import horrorData from '../../data/horror.json';
import fantasyData from "../../data/fantasy.json";
import historyData from "../../data/history.json";
import sciFiData from "../../data/scifi.json";
import romanceData from "../../data/romance.json";

export default function BookDetails() {

    const params = useParams();
    console.log(params.asin)

    const [book, setBook] = useState([]);

    const handleData = () => {
        const allData = [...horrorData, ...fantasyData, ...historyData, ...sciFiData, ...romanceData];

        const filteredData = allData.filter((el) => el.asin.includes(params.asin));

        setBook(filteredData);
    }


    useEffect(() => {
        handleData();
    }, [params])

    return (
        <div>
            {book.map((el) => (
                <div key={el.asin}>
                    <img src={el.img} alt="" />
                    <p>{el.price}</p>
                </div>
            ))}
        </div>
    )
}
