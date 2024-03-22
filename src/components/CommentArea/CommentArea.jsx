import React, { useContext, useEffect, useState } from 'react'
import CommentList from '../CommentList/CommentList';
import AddComment from '../AddComment/AddComment';
import Spinner from 'react-bootstrap/Spinner';
import ModifyComment from '../ModifyComment/ModifyComment';
import Alert from 'react-bootstrap/Alert';
import { ThemeContext } from '../ThemeContextProvider/ThemeContextProvider';

export default function CommentArea(props) {

    const { id } = props;

    const { theme } = useContext(ThemeContext)

    const endpointGET = `https://striveschool-api.herokuapp.com/api/books/${id}/comments/`;
    const endpointPOST = "https://striveschool-api.herokuapp.com/api/comments";

    const endpointDELETE = "https://striveschool-api.herokuapp.com/api/comments/";


    const [data, setData] = useState([]);
    const [spinner, setSpinner] = useState(false);

    const [put, setPut] = useState(false);

    const [commentId, setCommentId] = useState("")

    // Old comment in modify comment form
    const [modify, setModify] = useState("");

    const [alert, setAlert] = useState(null)

    const [err, setErr] = useState(false)

    async function handleData() {
        setSpinner(true)

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
                setSpinner(false)
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

    useEffect(() => {
        console.log(id + " è cambiato")
    }, [id])


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
                handleData();
                setAlert("postOk");
                setTimeout(() => {
                    setAlert(null);
                }, 5000);
            } else {
                console.log("Errore nella richiesta POST")
                setErr(true);
                setTimeout(() => {
                    setErr(false);
                }, 5000);
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
                setAlert("postDel");
                setTimeout(() => {
                    setAlert(null);
                }, 5000);
            } else {
                console.log("Errore nella chimata DELETE");
                setErr(true);
                setTimeout(() => {
                    setErr(false);
                }, 5000);
            }
        } catch (error) {
            console.error(error)
        }
    }

    function putForm(commenti) {
        setPut(true)
        setModify(commenti)
    }

    async function putComment(e, input, num) {
        e.preventDefault()

        let payload = {
            "comment": input,
            "rate": num.toString(),
            "elementId": id
        }
        console.log(payload)
        try {
            const response = await fetch(`${endpointDELETE}${commentId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZDE0NzljNDM3MDAwMTkzYzM2ODIiLCJpYXQiOjE3MTA1MzA0MzEsImV4cCI6MTcxMTc0MDAzMX0.ALisovWy5c9k5JT2NbrK8WGAvsVO4JWFd2lnGN3bnc8"
                },
                body: JSON.stringify(payload)
            })
            const res = response.json();
            console.log(res)
            if (response.ok) {
                handleData()
                setPut(false)
                setAlert("postPut");
                setTimeout(() => {
                    setAlert(null);
                }, 5000);
            } else {
                console.log("Errore nella chimata PUT")
                setPut(false);
                setErr(true);
                setTimeout(() => {
                    setErr(false);
                }, 5000);
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={theme === "dark" ? "text-light" : ""}>
            <div>{spinner ? <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner> : ""}
                {data &&
                    data.map((el) => <CommentList deleteComment={deleteComment} key={el._id} Id={commentId} setId={setCommentId} commentId={el._id} comments={el.comment} rate={el.rate} putForm={putForm} />)}
            </div>
            <div>
                {put ? <ModifyComment id={id} oldComment={modify} onclick={setPut} putComment={putComment} /> :
                    data && <AddComment id={id} postComment={postComment} />}
            </div>
            <div>
                {alert === "postOk" ? <Alert variant="success" className='mt-2'>
                    Commento postato con successo!
                </Alert> : null}
                {alert === "postDel" ? <Alert variant="danger" className='mt-2'>
                    Commento eliminato con successo!
                </Alert> : null}
                {alert === "postPut" ? <Alert variant="primary" className='mt-2'>
                    Commento modificato con successo!
                </Alert> : null}
                {err && <Alert variant="warning" className='mt-2'>
                    Errore nel caricamento del commento
                </Alert>}
            </div>
        </div>

    )
}
