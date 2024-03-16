import React, { useEffect, useState } from 'react'
import CommentList from '../CommentList/CommentList';
import AddComment from '../AddComment/AddComment';

export default function CommentArea(props) {

    const { id } = props;

    const endpointGET = `https://striveschool-api.herokuapp.com/api/books/${id}/comments/`;
    const endpointPOST = "https://striveschool-api.herokuapp.com/api/comments";


    const [data, setData] = useState([]);

    async function handleData() {
        try {
            const response = await fetch(endpointGET, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZDE0NzljNDM3MDAwMTkzYzM2ODIiLCJpYXQiOjE3MTA1MzA0MzEsImV4cCI6MTcxMTc0MDAzMX0.ALisovWy5c9k5JT2NbrK8WGAvsVO4JWFd2lnGN3bnc8"
                }
            });
            if (response.ok) {
                const result = await response.json();
                setData(result)
                console.log(result)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        handleData()
        return () => {

        }
    }, [])

    async function postComment(e, input, num) {
        e.preventDefault();
        let payload = {
            "comment": input,
            "rate": num.toString(),
            "elementId": id
        }
        console.log(payload)
        try {
            const post = await fetch(endpointPOST, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZDE0NzljNDM3MDAwMTkzYzM2ODIiLCJpYXQiOjE3MTA1MzA0MzEsImV4cCI6MTcxMTc0MDAzMX0.ALisovWy5c9k5JT2NbrK8WGAvsVO4JWFd2lnGN3bnc8"
                },
                body: JSON.stringify(payload)
            })
            if (post.ok) {
                handleData()
            } else {
                console.log("Errore nella richiesta POST")
            }
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div>
            <div>
                {data &&
                    data.map((el) => <CommentList key={el.elementId} comments={el.comment} />)}
            </div>
            <div>
                {data && <AddComment id={id} postComment={postComment} />}
            </div>
        </div>

    )
}
