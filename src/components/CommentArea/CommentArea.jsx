import React, { useEffect, useState } from 'react'
import CommentList from '../CommentList/CommentList';
import AddComment from '../AddComment/AddComment';
import Spinner from 'react-bootstrap/Spinner';

export default function CommentArea(props) {

    const { id } = props;

    const endpointGET = `https://striveschool-api.herokuapp.com/api/books/${id}/comments/`;
    const endpointPOST = "https://striveschool-api.herokuapp.com/api/comments";

    const endpointDELETE = "https://striveschool-api.herokuapp.com/api/comments/";


    const [data, setData] = useState([]);
    const [spinner, setSpinner] = useState(false)

    async function handleData() {
        setSpinner(false)
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
                setSpinner(true)
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

    async function deleteComment(id) {
        console.log(id)
        try {
            const response = await fetch(`${endpointDELETE}${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZDE0NzljNDM3MDAwMTkzYzM2ODIiLCJpYXQiOjE3MTA1MzA0MzEsImV4cCI6MTcxMTc0MDAzMX0.ALisovWy5c9k5JT2NbrK8WGAvsVO4JWFd2lnGN3bnc8"
                }
            });
            if (response.ok) {
                handleData()
            } else {
                console.log("Errore nella chimata DELETE")
            }
        } catch (error) {
            console.error(error)
        }
    }

    async function putComment(id, input, num) {

        let payload = {
            "comment": input,
            "rate": num.toString(),
            "elementId": id
        }
        try {
            const response = await fetch(`${endpointDELETE}${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZDE0NzljNDM3MDAwMTkzYzM2ODIiLCJpYXQiOjE3MTA1MzA0MzEsImV4cCI6MTcxMTc0MDAzMX0.ALisovWy5c9k5JT2NbrK8WGAvsVO4JWFd2lnGN3bnc8"
                },
                body: JSON.stringify(payload)
            })
            if (response.ok) {
                handleData()
            } else {
                console.log("Errore nella chimata PUT")
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <div>
                {data &&
                    data.map((el) => <CommentList deleteComment={deleteComment} key={el._id} commentId={el._id} comments={el.comment} rate={el.rate} />)}
            </div>
            <div>
                {data && <AddComment id={id} postComment={postComment} />}
            </div>
        </div>

    )
}
