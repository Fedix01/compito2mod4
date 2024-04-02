import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function ModifyComment(props) {

    const { putComment, onclick, oldComment } = props;
    const [input, setInput] = useState("");

    const [num, setNum] = useState(1)

    function modifyCom(e, input, num) {
        onclick(true)
        putComment(e, input, num)
    }


    return (
        <div>
            <Form>
                <Form.Label>Modifica...</Form.Label>
                <Form.Control as="textarea" aria-label="With textarea" type="text" placeholder={oldComment} value={input} onChange={(e) => setInput(e.target.value)} />
            </Form>
            <Form className='mt-2'>
                <Form.Label>Valutazione...</Form.Label>
                <div className='d-flex align-items-center justify-content-between'>
                    <Form.Control type="number" min={1} max={5} value={num} onChange={(e) => setNum(e.target.value)} placeholder="Insert num" style={{ width: "70%" }} required />
                    <Button variant="primary" type='submit' onClick={(e) => modifyCom(e, input, num)}>Modifica</Button>
                </div>
            </Form>
        </div>
    )
}