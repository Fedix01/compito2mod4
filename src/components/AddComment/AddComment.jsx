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
            <h6>Lascia un commento...</h6>
            <Form.Control as="textarea" aria-label="With textarea" type="text" placeholder="Normal text" value={input} onChange={(e) => setInput(e.target.value)} />
            <h6>Valutazione...</h6>
            <div className='d-flex'>
                <Form.Control type="number" min={1} max={5} value={num} onChange={(e) => setNum(e.target.value)} placeholder="Inserisci Voto" />
                <Button variant="success" type='submit' onClick={(e) => resetFormAndPost(e, input, num)}>Commenta</Button>
            </div>
        </div>
    )
}
