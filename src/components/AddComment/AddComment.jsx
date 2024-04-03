import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function AddComment(props) {

    const { postComment } = props;
    const [input, setInput] = useState("");

    const [num, setNum] = useState(1)

    function resetFormAndPost(e, input, num) {
        postComment(e, input, num);
        setInput("");
        setNum(1);
    }


    return (
        <div>
            <Form>
                <Form.Label>Lascia un commento...</Form.Label>
                <Form.Control as="textarea" aria-label="With textarea" type="text" placeholder="Scrivi un commento..." value={input} onChange={(e) => setInput(e.target.value)} />
            </Form>
            <Form className='mt-2'>
                <Form.Label>Valutazione...</Form.Label>
                <div className='d-flex align-items-center justify-content-between'>
                    <Form.Control type="number" min={1} max={5} value={num} onChange={(e) => setNum(e.target.value)} placeholder="Inserisci Voto da 1 a 5" style={{ width: "70%" }} required />
                    <Button variant="success" type='submit' onClick={(e) => resetFormAndPost(e, input, num)}>Commenta</Button>
                </div>
            </Form>
        </div>
    )
}
