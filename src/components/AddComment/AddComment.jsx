import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function AddComment(props) {

    const { postComment } = props;
    const [input, setInput] = useState("");

    const [num, setNum] = useState(1)




    return (
        <div className='d-flex'>
            <Form.Control type="text" placeholder="Normal text" value={input} onChange={(e) => setInput(e.target.value)} />
            <Form.Control type="number" min={1} max={5} value={num} onChange={(e) => setNum(e.target.value)} placeholder="Insert num" />
            <Button variant="outline-primary" type='submit' onClick={(e) => postComment(e, input, num)}>Commenta</Button>
        </div>
    )
}